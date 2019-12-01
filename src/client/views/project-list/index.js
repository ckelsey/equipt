import '../project-link'
import { WCConstructor, WCDefine, CreateElement, ObserverUnsubscribe } from 'builtjs'
import Projects from '../../services/projects'

const populate = (root, projects) => {
    root.innerHTML = ``

    const keys = Object.keys(projects)

    keys.sort((a, b) => {
        const aName = projects[a].name.toLowerCase()
        const bName = projects[b].name.toLowerCase()
        return aName < bName ? -1 : aName > bName ? 1 : 0
    })

    keys.forEach(key =>
        root.appendChild(
            CreateElement({
                tagName: `project-link`,
                project: projects[key]
            })
        )
    )
}

const componentName = `project-list`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const elements = { root: { selector: componentRoot } }

export const ProjectList = WCConstructor({
    componentName,
    componentRoot,
    template,
    elements,
    onDisconnected: ObserverUnsubscribe,
    onConnected(host) {
        host.subscriptions = {
            projects: Projects.projects$.subscribe(projects => populate(host.elements.root, projects))
        }

        Projects.getProjects()
    }
})

WCDefine(componentName, ProjectList)

export default ProjectList