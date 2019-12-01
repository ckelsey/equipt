import '../project-buttons'
import { WCConstructor, WCDefine, ObserveEvent, iconPlay } from 'builtjs'
import Projects from '../../services/projects'

const componentName = `project-header`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    root: {
        selector: componentRoot
    },
    headerText: {
        selector: `.${componentName}-text`
    },
    runBtn: {
        selector: `.run-project`,
        onChange(el) {
            el.eventSubscriptions = {
                click: ObserveEvent(el, `click`).subscribe(() => Projects.run(Projects.project$.value))
            }
        }
    },
    runBtnIcon: {
        selector: `.run-project-icon`,
        onChange(el) {
            el.svg = iconPlay
        }
    }
}

export const ProjectHeader = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    onConnected(host) {
        Projects.project$.subscribe(project => {

            host.elements.runBtn.classList.add(`hide`)

            if (project.name) {
                host.elements.headerText.textContent = project.name
                host.elements.runBtn.classList.remove(`hide`)

            } else if (Projects.isNew) {
                host.elements.headerText.textContent = `New project`

            } else {
                host.elements.headerText.textContent = ``
            }
        })
    }
})

WCDefine(componentName, ProjectHeader)

export default ProjectHeader