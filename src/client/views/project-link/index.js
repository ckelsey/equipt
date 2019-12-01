import { WCConstructor, WCDefine, ObserveEvent } from 'builtjs'
import Projects from '../../services/projects'

const setLinkText = (el, project) => {
    if (!el || !project) { return }
    el.textContent = project.name
}

const setLink = (el, project) => {
    if (!el || !project) { return }
    if (el.eventSubscriptions) { el.eventSubscriptions.click() }

    el.eventSubscriptions = {
        click: ObserveEvent(el, `click`).subscribe(() => Projects.open(project.id))
    }
}

const componentName = `project-link`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    link: {
        selector: `.${componentName}-link`,
        onChange(el, host) { setLink(el, host.project) }
    },
    linkText: {
        selector: `.${componentName}-link-text`,
        onChange(el, host) { setLinkText(el, host.project) }
    }
}
const properties = {
    project: {
        format: val => val,
        onChange(val, host) {
            setLink(host.elements.link, val)
            setLinkText(host.elements.linkText, val)
        }
    }
}

export const ProjectLink = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    properties,
    observedAttributes: Object.keys(properties),
    onConnected(host) {
        host.subscriptions = {
            projects: Projects.project$.subscribe(project => {
                if (!host.project) { return }
                const isActive = project.id === host.project.id
                host.elements.link.classList[isActive ? `add` : `remove`](`active`)
            })
        }
    },
    onDisconnected(host) {
        if (host.subscriptions.projects) { host.subscriptions.projects() }
    }
})

WCDefine(componentName, ProjectLink)

export default ProjectLink