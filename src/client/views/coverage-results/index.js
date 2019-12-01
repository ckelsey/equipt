import '../coverage-result'
import { WCConstructor, WCDefine, CreateElement, ToCapitalize } from 'builtjs'
import { Coverage } from '../../services/coverage'

const componentName = `coverage-results`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    root: { selector: componentRoot },
    lines: { selector: `.${componentName}-lines` },
    branches: { selector: `.${componentName}-branches` },
    functions: { selector: `.${componentName}-functions` },
    statements: { selector: `.${componentName}-statements` },
    files: { selector: `.${componentName}-files` }
}

const populate = (results, elements) => {
    if (!results) { return }

    const overviewItems = [`lines`, `branches`, `functions`, `statements`]
    const files = elements.files
    const doOverviewItem = key => elements[key].innerHTML = `${ToCapitalize(key).value}<span class="dim-text">(${results.total[key].total})</span>&nbsp;<div class="result-coverage-score" evaluated="${Coverage.scoreEvaluation(results.total[key].pct)}">${results.total[key].pct}%</div>`

    overviewItems.forEach(doOverviewItem)

    Object
        .keys(results)
        .forEach(file => {
            if (file === `total`) { return }

            files.appendChild(
                CreateElement({
                    tagName: `coverage-result`,
                    coverage: Object.assign({ file }, results[file])
                })
            )
        })
}

const properties = {
    results: {
        format: val => val,
        onChange: (val, host) => populate(val, host.elements)
    }
}

export const CoverageResults = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    properties,
    observedAttributes: Object.keys(properties)
})

WCDefine(componentName, CoverageResults)

export default CoverageResults