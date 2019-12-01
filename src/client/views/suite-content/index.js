import { WCConstructor, WCDefine, Get, CreateElement } from 'builtjs'

const componentName = `suite-content`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    root: { selector: componentRoot },
    name: { selector: `.${componentName}-name` },
    passes: { selector: `.${componentName}-passes` },
    fails: { selector: `.${componentName}-fails` },
    skips: { selector: `.${componentName}-skips` },
    testsContainer: { selector: `.${componentName}-tests` }
}
const properties = {
    suite: {
        format: val => val,
        onChange: (val, host) => {
            const nameElement = host.elements.name
            const testsContainer = host.elements.testsContainer

            testsContainer.innerHTML = ``
            nameElement.innerHTML = Get(val, `name`)

            let passes = 0
            let fails = 0
            let skips = 0

            Get(val, `tests`, []).forEach((t, i) => {
                t.state === `failed` ?
                    fails = fails + 1 :
                    t.state === `passed` ?
                        passes = passes + 1 :
                        skips = skips + 1

                testsContainer.appendChild(
                    CreateElement({
                        tagName: `div`,
                        class: `suite-content-test-result ${t.state} ${i % 2 === 0 ? `odd` : `even`}`,
                        innerHTML: `<span class="suite-content-test-result-name ${t.state}">&middot;&nbsp;${t.name}</span><span class="suite-content-test-result-duration">${t.duration}ms</span>`
                    })
                )
            })

            host.elements.passes.textContent = passes
            host.elements.fails.textContent = fails
            host.elements.skips.textContent = skips
            nameElement.setAttribute(`state`, fails ? `failed` : skips ? `skipped` : `passed`)
        }
    }
}

export const SuiteContent = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    properties,
    observedAttributes: Object.keys(properties),
})

WCDefine(componentName, SuiteContent)

export default SuiteContent