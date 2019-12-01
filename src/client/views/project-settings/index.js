import { WCConstructor, WCDefine, ObserveEvent, Get } from 'builtjs'
import Projects from '../../services/projects'
import { Messages } from '../../services/messages'

const submit = host => {

    if (!Projects.project.name || !Projects.project.packagePath || !Projects.project.testsPath) {
        const reasons = []

        if (!Projects.project.name) {
            reasons.push(`Project must have a name.`)
            host.elements.name.setError(reasons[reasons.length - 1])
        }

        if (!Projects.project.packagePath) {
            reasons.push(`Project must have a path to it's package.json file.`)
            host.elements.packagePath.setError(reasons[reasons.length - 1])
        }

        if (!Projects.project.testsPath) {
            reasons.push(`Project must have a glob to find tests.`)
            host.elements.testsPath.setError(reasons[reasons.length - 1])
        }

        return Messages.add({
            header: `Invalid settings`,
            body: reasons.join(` `),
            button: Messages.closeBtnString
        })
    }

    Projects.save(Projects.project)
}

const componentName = `project-settings`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const done = (el, host) => ObserveEvent(el, `done`).subscribe(() => submit(host))
const value = (el, key) => ObserveEvent(el, `inputchange`).subscribe(val => Projects.project$.value[key] = Get(val, `detail.0.path`))

const elements = {
    root: { selector: componentRoot },
    name: {
        selector: `.${componentName}-name`,
        onChange(el, host) {
            el.eventSubscriptions = {
                done: done(el, host),
                value: ObserveEvent(el, `inputchange`).subscribe(val => Projects.project$.value.name = val.detail)
            }
        }
    },
    packagePath: {
        selector: `.${componentName}-package`,
        onChange(el, host) {
            el.eventSubscriptions = {
                done: done(el, host),
                value: value(el, `packagePath`)
            }
        }
    },
    testsPath: {
        selector: `.${componentName}-tests-path`,
        onChange(el, host) {
            el.eventSubscriptions = {
                done: done(el, host),
                value: ObserveEvent(el, `inputchange`).subscribe(val => Projects.project$.value.testsPath = val.detail)
            }
        }
    },
    requiresBabel: {
        selector: `.${componentName}-requires-babel`,
        onChange(el, host) {
            el.eventSubscriptions = {
                done: done(el, host),
                value: ObserveEvent(el, `inputchange`).subscribe(e => Projects.project$.value.requiresBabel = e.detail)
            }
        }
    },
    submit: {
        selector: `.${componentName}-submit`,
        onChange(el, host) {
            el.eventSubscriptions = {
                click: ObserveEvent(el, `click`).subscribe(() => submit(host))
            }
        }
    },
    delete: {
        selector: `.${componentName}-delete`,
        onChange(el) {
            el.eventSubscriptions = {
                click: ObserveEvent(el, `click`).subscribe(() => {
                    Projects.delete(Projects.project)
                    Projects.project$.next({})
                })
            }
        }
    },
    empty: { selector: `.${componentName}-empty` },
    content: { selector: `.${componentName}-content` },
    transition: {
        selector: `.${componentName}-transition`,
        onChange(el, host) {
            el.eventSubscriptions = {
                editing: Projects.editing$.subscribe(editing => {
                    if (typeof el.transitionChild !== `function`) { return }

                    host.elements.root.classList[Projects.isNew ? `add` : `remove`](`new-project`)

                    el.transitionChild(host.elements[editing ? `content` : `empty`])
                }),
                project: Projects.project$.subscribe(project => {
                    const name = host.elements.name

                    if (!name) { return }

                    host.elements.name.value = project.name
                    host.elements.testsPath.value = project.testsPath
                    host.elements.requiresBabel.value = project.requiresBabel
                    host.elements.packagePath.value = undefined
                    host.elements.packagePath.pathvalue = project.packagePath
                })
            }
        }
    }
}

export const ProjectSettings = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements
})

WCDefine(componentName, ProjectSettings)

export default ProjectSettings