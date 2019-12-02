import '../coverage-result'
import { WCConstructor, WCDefine, CreateElement, ToCapitalize } from 'builtjs'

const componentName = `coverage-results`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    root: { selector: componentRoot },
    branch: { selector: `.${componentName}-branches` },
    function: { selector: `.${componentName}-functions` },
    statement: { selector: `.${componentName}-statements` },
    files: { selector: `.${componentName}-files` }
}

const populate = (results, elements) => {
    if (!results) { return }

    const overviewItems = [`branch`, `function`, `statement`]
    const files = elements.files
    const scoreHTML = key => `<div class="result-coverage-score" evaluated="${results.coverageSummary[`${key}ScoreEvaluation`]}">${results.coverageSummary[`${key}Score`]}%</div>`
    const doOverviewItem = key => elements[key].innerHTML = `${ToCapitalize(`${key}${key === `branch` ? `es` : `s`}`).value}&nbsp;${scoreHTML(key)}`

    overviewItems.forEach(doOverviewItem)

    results.coverage
        .sort((a, b) => {
            const aName = a.file.toLowerCase()
            const bName = b.file.toLowerCase()
            return aName < bName ? 1 : aName > bName ? -1 : 0
        })
        .forEach(file => {
            files.appendChild(
                CreateElement({
                    tagName: `coverage-result`,
                    coverage: file
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