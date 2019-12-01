import { WCConstructor, WCDefine, ObserveEvent, Get, HasKeys } from 'builtjs'
import Projects from '../../services/projects'

const submit = () => {
    /** TODO - alert error */
    if (!HasKeys([`id`, `name`, `packagePath`, `entryPath`, `testsPath`])(Projects.project).valid) { return }

    Projects.save(Projects.project)
}

const componentName = `project-settings`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()
const done = (el, host) => ObserveEvent(el, `done`).subscribe(() => submit(host))
const value = (el, key) => ObserveEvent(el, `inputchange`).subscribe(val => Projects.project$.value[key] = Get(val, `detail.0.path`))
const requiresBabel = () => Projects.project$.value.babelConfig !== false
const expandBabelConfig = (el, val) => {
    if (val) {
        el.transitionTo(1)

        if (Projects.project$.value.babelConfig === false) {
            Projects.project$.value.babelConfig = undefined
        }
    } else {
        el.transitionTo(0)
        Projects.project$.value.babelConfig = false
    }
}
const elements = {
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
    entryPath: {
        selector: `.${componentName}-entry`,
        onChange(el, host) {
            el.eventSubscriptions = {
                done: done(el, host),
                value: value(el, `entryPath`)
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
    requireBabel: {
        selector: `.${componentName}-require-babel`,
        onChange(el, host) {
            el.eventSubscriptions = {
                done: done(el, host),
                value: ObserveEvent(el, `inputchange`).subscribe(e => {
                    const babelTransition = host.elements.babelTransition
                    if (!babelTransition) { return }
                    expandBabelConfig(babelTransition, e.detail)
                })
            }
        }
    },
    babelConfig: {
        selector: `.${componentName}-require-babel`,
        onChange(el, host) {
            el.eventSubscriptions = {
                done: done(el, host),
                value: value(el, `babelConfig`)
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
    babelTransition: { selector: `.${componentName}-babel-transition` },
    empty: { selector: `.${componentName}-empty` },
    content: { selector: `.${componentName}-content` },
    transition: {
        selector: `.${componentName}-transition`,
        onChange(el, host) {
            host.settingTransitionEnd = () => { }
            host.subscriptions = {
                editing: Projects.editing$.subscribe(editing => {
                    if (typeof el.transitionChild !== `function`) { return }

                    el.transitionChild(host.elements[editing ? `content` : `empty`])

                    if (!editing) { return }

                    host.elements.name.value = Projects.project$.value.name
                    host.elements.entryPath.pathvalue = Projects.project$.value.entryPath
                    host.elements.testsPath.value = Projects.project$.value.testsPath
                    host.elements.packagePath.pathvalue = Projects.project$.value.packagePath
                    host.elements.babelConfig.pathvalue = Projects.project$.value.babelConfig

                    const babel = requiresBabel()
                    host.elements.requireBabel.value = babel
                    host.elements.babelTransition.setCurrent(babel ? 1 : 0)
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