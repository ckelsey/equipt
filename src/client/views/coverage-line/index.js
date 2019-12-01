import { WCConstructor, WCDefine } from 'builtjs'

const componentName = `coverage-line`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    root: { selector: componentRoot },
    count: { selector: `.${componentName}-count` },
    number: { selector: `.${componentName}-number` },
    content: { selector: `.${componentName}-content` },
}

const properties = {
    number: {
        format: val => val,
        onChange: (val, host) => host.elements.number.textContent = val
    },
    count: {
        format: val => val,
        onChange: (val, host) => {
            const count = host.elements.count
            count.textContent = `${val}x`
            count.classList[val === `0` ? `add` : `remove`](`no-coverage`)
        }
    },
    content: {
        format: val => val,
        onChange: (val, host) => host.elements.content.textContent = val
    }
}

export const CoverageLine = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    properties,
    observedAttributes: Object.keys(properties)
})

WCDefine(componentName, CoverageLine)

export default CoverageLine