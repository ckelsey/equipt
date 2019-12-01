import '../result-body'
import '../result-header'
import { WCConstructor, WCDefine, ComponentClassObject } from 'builtjs'

const componentName = `test-result`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    root: { selector: componentRoot },
    header: { selector: `result-header` },
    body: { selector: `result-body` }
}
const properties = {
    class: ComponentClassObject,
    testdata: {
        format: val => val,
        onChange: (val, host) => {
            host.elements.header.testdata = val
            host.elements.body.testdata = val
        }
    }
}

export const TestResult = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    properties,
    observedAttributes: Object.keys(properties),
})

WCDefine(componentName, TestResult)

export default TestResult