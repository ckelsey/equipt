import '../suite-content'
import { WCConstructor, WCDefine, CreateElement } from 'builtjs'

const componentName = `suites-content`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const elements = { root: { selector: componentRoot } }

const properties = {
    suites: {
        format: val => val,
        onChange: (val, host) => {
            const root = host.elements.root
            root.innerHTML = ``

            if (!val || !Array.isArray(val) || !val.length) { return }

            val.forEach(suite =>
                root.appendChild(
                    CreateElement({
                        tagName: `suite-content`,
                        suite
                    })
                )
            )
        }
    }
}

export const SuitesContent = WCConstructor({
    componentName,
    componentRoot,
    template,
    elements,
    properties,
    observedAttributes: Object.keys(properties),
})

WCDefine(componentName, SuitesContent)

export default SuitesContent