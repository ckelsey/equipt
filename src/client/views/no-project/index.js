import { WCConstructor, WCDefine } from 'builtjs'
import Projects from '../../services/projects'

const componentName = `no-project`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()

const setTransition = (el, index, host) => {
    cancelAnimationFrame(host.timer)
    clearTimeout(host.setTimer)

    if (typeof el.transitionTo !== `function`) {
        return host.timer = requestAnimationFrame(() => setTransition(el, index, host))
    }

    if (index) {
        host.setTimer = setTimeout(() => el.setCurrent(index), 620)
    } else {
        el.setCurrent(index)
    }
}

const elements = {
    transition: {
        selector: `.${componentName}-transition`,
        onChange(el, host) {
            el.eventSubscriptions = {
                project: Projects.project$.subscribe(project => {
                    setTransition(el, project && project.id ? 0 : 1, host)
                })
            }
        }
    }
}

export const NoProject = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements
})

WCDefine(componentName, NoProject)

export default NoProject