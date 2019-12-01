import { WCConstructor, WCDefine, ObserveEvent } from 'builtjs'
import '../project-list'
import '../project-header'
import '../project-results'
import '../project-settings'
import Projects from '../../services/projects'

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
    }
}

export const AppContent = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
})

WCDefine(componentName, AppContent)

export default AppContent