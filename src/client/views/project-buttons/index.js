import { WCConstructor, WCDefine, ObserveEvent, iconPencil, iconPlay } from 'builtjs'
import Projects from '../../services/projects'

const componentName = `project-buttons`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    delete: { selector: `.${componentName}-delete` },
    edit: {
        selector: `.${componentName}-edit`,
        onChange(el) {
            el.eventSubscriptions = {
                click: ObserveEvent(el, `click`).subscribe(() => Projects.editing = !Projects.editing)
            }
        }
    },
    editIcon: {
        selector: `.edit-project-icon`,
        onChange(el) { el.svg = iconPencil }
    },
    runBtn: {
        selector: `.project-buttons-run`,
        onChange(el) {
            el.eventSubscriptions = {
                click: ObserveEvent(el, `click`).subscribe(() => Projects.run(Projects.project))
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

export const ProjectButtons = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    onConnected(host) {
        Projects.project$.subscribe(project => {
            host.elements.edit.classList[!project.name ? `add` : `remove`](`hide`)
            host.elements.runBtn.classList[!project.name ? `add` : `remove`](`hide`)
        })
    }
})

WCDefine(componentName, ProjectButtons)

export default ProjectButtons