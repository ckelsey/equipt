import '../coverage-line'
import { WCConstructor, WCDefine, CreateElement } from 'builtjs'
import { Coverage } from '../../services/coverage'

const componentName = `coverage-result`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    root: { selector: componentRoot },
    toggler: { selector: `.${componentName}-toggler` },
    content: { selector: `.${componentName}-content` },
}

const properties = {
    coverage: {
        format: val => val,
        onChange: (val, host) => {
            console.log(val)

            const average = Coverage.average(val)
            const toggler = host.elements.toggler
            const content = host.elements.content

            toggler.innerHTML = `<span>${val.file}&nbsp;<span class="result-coverage-score-text" evaluated="${Coverage.scoreEvaluation(average)}">${average}%</span></span>`

            val.lines.forEach((line, lineIndex) => content.appendChild(
                CreateElement({
                    tagName: `coverage-line`,
                    number: lineIndex,
                    count: line.covered,
                    content: line.content
                })
            ))
        }
    }
}

export const CoverageResult = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    properties,
    observedAttributes: Object.keys(properties)
})

WCDefine(componentName, CoverageResult)

export default CoverageResult