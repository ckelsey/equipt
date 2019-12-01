import '../project-buttons'
import { WCConstructor, WCDefine } from 'builtjs'
import Projects from '../../services/projects'

const componentName = `project-header`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const elements = {
    root: { selector: componentRoot },
    headerText: { selector: `.${componentName}-text` }
}

export const ProjectHeader = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    onConnected(host) {
        Projects.project$.subscribe(project => {
            if (project.name) {
                host.elements.headerText.textContent = project.name

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