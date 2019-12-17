import { WCConstructor, WCDefine, ObserveEvent, ObserverUnsubscribe, CreateElement, ValidateHtml } from 'builtjs'
import '../project-list'
import '../project-header'
import '../project-results'
import '../project-settings'
import '../no-project'
import '../test-progress'
import Projects from '../../services/projects'
import { Messages } from '../../services/messages'

const componentName = `app-content`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    newProjectBtn: {
        selector: `#new-project-btn`,
        onChange(el) {
            el.eventSubscriptions = {
                click: ObserveEvent(el, `click`).subscribe(() => Projects.newProject())
            }
        }
    },
    overlayMessages: { selector: `#app-messages` },
    spinner: { selector: `#app-spinner` }
}

export const AppContent = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    onConnected(host) {
        const messageSlots = [`header`, `body`, `button`]

        host.eventSubscriptions = {
            messages: Messages.messages$.subscribe(messages => {
                const message = messages[0]
                const overlayMessages = host.elements.overlayMessages
                overlayMessages.innerHTML = ``

                if (!message) { return overlayMessages.shown = false }

                messageSlots.forEach(slot => {
                    overlayMessages.appendChild(
                        CreateElement({
                            tagName: `div`,
                            innerHTML: ValidateHtml(messages[0][slot], [], [`script`]).sanitized,
                            slot
                        })
                    )
                })

                overlayMessages.shown = true

            }),

            loadingProjects: Projects.loading$.subscribe(loading => host.elements.spinner.visible = loading)
        }
    },
    onDisconnected(host) {
        ObserverUnsubscribe(host)
    }
})

WCDefine(componentName, AppContent)

export default AppContent