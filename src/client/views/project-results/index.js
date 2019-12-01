import { WCConstructor, WCDefine, CreateElement } from 'builtjs'
import '../test-result'
import Projects from '../../services/projects'

const componentName = `project-results`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const elements = { root: { selector: componentRoot } }

const populate = (root, results) => {
    root.innerHTML = ``

    if (!results) { return }

    results.forEach((result, index) => {
        root.appendChild(
            CreateElement({
                tagName: `test-result`,
                testdata: result,
                class: index % 2 == 0 ? `even` : `odd`
            })
        )
    })
}

const properties = {
    results: {
        format: val => val,
        onChange: (val, host) => populate(host.elements.root, val)
    }
}

export const ProjectResults = WCConstructor({
    componentName,
    componentRoot,
    template,
    elements,
    properties,
    observedAttributes: Object.keys(properties),
    onConnected(host) {
        host.subscriptions = {
            projects: Projects.project$.subscribe(project => {
                populate(host.elements.root, project.results)
            })
        }
    }
})

WCDefine(componentName, ProjectResults)

export default ProjectResults