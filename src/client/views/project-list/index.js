import '../project-link'
import { WCConstructor, WCDefine, CreateElement } from 'builtjs'
import Projects from '../../services/projects'

const populate = (root, projects) => {
    root.innerHTML = ``

    Object.keys(projects).forEach(key =>
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
    onConnected(host) {
        host.subscriptions = {
            projects: Projects.projects$.subscribe(projects => {
                populate(host.elements.root, projects)
            })
        }

        Projects.getProjects()
    }
})

WCDefine(componentName, ProjectList)

export default ProjectList