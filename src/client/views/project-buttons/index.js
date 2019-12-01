import { WCConstructor, WCDefine, ObserveEvent } from 'builtjs'
import Projects from '../../services/projects'

const updateButton = (el, project, clickFn) => {
    if (!project.name) {
        el.classList.add(`hide`)
    } else {
        el.classList.remove(`hide`)
    }

    if (el.eventSubscriptions) { el.eventSubscriptions.click() }

    if (!project.name) { return }

    el.eventSubscriptions = { click: ObserveEvent(el, `click`).subscribe(clickFn) }
}

const setEdit = (el, project) => updateButton(el, project, () => Projects.editing = !Projects.editing)
const setDelete = (el, project) => updateButton(el, project, () => {
    Projects.delete(project)
    Projects.project$.next({})
})

const componentName = `project-buttons`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    delete: {
        selector: `.${componentName}-delete`
    },
    edit: {
        selector: `.${componentName}-edit`,
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
            setEdit(host.elements.edit, project)
            setDelete(host.elements.delete, project)
        })
    }
})

WCDefine(componentName, ProjectButtons)

export default ProjectButtons