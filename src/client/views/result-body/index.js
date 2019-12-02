import '../suites-content'
import '../coverage-results'
import { WCConstructor, WCDefine, CreateElement } from 'builtjs'

const componentName = `result-body`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    root: { selector: componentRoot },
    testContent: { selector: `.${componentName}-test-content` },
    coverageResults: { selector: `.${componentName}-coverage-results` }
}
const properties = {
    testdata: {
        format: val => val,
        onChange: (val, host) => {
            const testContent = host.elements.testContent
            const coverageResults = host.elements.coverageResults
            coverageResults.innerHTML = testContent.innerHTML = ``

            if (!val || !val.tests.length) { return }

            val.tests.forEach((test, index) => {
                testContent.appendChild(
                    CreateElement({
                        tagName: `suites-content`,
                        suites: test.suites,
                        class: index % 2 == 0 ? `even` : `odd`
                    })
                )
            })

            coverageResults.results = val
        }
    }
}

export const ResultBody = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    properties,
    observedAttributes: Object.keys(properties),
})

WCDefine(componentName, ResultBody)

export default ResultBody