import { WCConstructor, WCDefine, ObserveEvent, ObserverUnsubscribe, CreateElement } from 'builtjs'
import Server from '../../services/server'

const componentName = `test-progress`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()

function runnerUpdate(host, message) {
    host.elements.header.textContent = `Running tests...`

    host.elements.messages.appendChild(
        CreateElement({
            tagName: `div`,
            class: `${componentName}-content-entry`,
            innerHTML: message.string
        })
    )

}

function runningTests(host, visible) {
    if (visible) {
        host.elements.header.textContent = `Preparing tests...`
        host.elements.messages.innerHTML = ``
    }
    host.elements.root.classList[visible ? `add` : `remove`](`show`)
}

const elements = {
    root: { selector: componentRoot },
    header: { selector: `.${componentName}-header` },
    messages: { selector: `.${componentName}-messages` },
    cancel: {
        selector: `.${componentName}-cancel-btn`,
        onChange(el) {
            el.eventSubscriptions = {
                cancel: ObserveEvent(el, `click`).subscribe(() => Server.send(`cancelTests`))
            }
        }
    }
}

export const TestProgress = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    onDisconnected: host => ObserverUnsubscribe(host),
    onConnected: host => {
        host.eventSubscriptions = {
            runnerUpdate: Server.subscribe(`runnerUpdate`, data => runnerUpdate(host, data)),
            runningTests: Server.subscribe(`runningTests`, data => runningTests(host, data))
        }
    },
})

WCDefine(componentName, TestProgress)

export default TestProgress