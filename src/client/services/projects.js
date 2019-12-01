import { Observer, ID } from 'builtjs'
import Server from "./server"

let progressBar
const setProgressBar = () => !progressBar ? progressBar = document.getElementById(`app-progress`) : undefined

const Projects = {
    projects$: Observer({}),
    projects: { get() { return Projects.projects$.value } },

    project$: Observer({}),
    project: { get() { return Projects.project$.value } },

    editing$: Observer(false),

    getProjects() {
        const projects = JSON.parse(Server.send(`getProjects`))
        Projects.projects$.next(projects)
        Projects.project$.next(projects[Object.keys(projects)[0]] || {})
    },

    open(key) {
        Projects.projects$.next(JSON.parse(Server.send(`getProjects`)))
        Projects.editing = false
        Projects.project$.next(Projects.projects$.value[key] || {})
    },

    newProject() {
        if (Projects.isNew) { return }

        Projects.project$.next({ id: ID() })
        Projects.editing = true
    },

    delete(project) {
        Projects.editing = false
        Projects.projects$.next(JSON.parse(Server.send(`deleteProject`, project)))
    },

    save(project) {
        Projects.editing = false
        Projects.projects$.next(JSON.parse(Server.send(`updateProject`, project)))
        Projects.open(project.id)
    },

    run(project) {
        setProgressBar()
        progressBar.animation = `linear`
        Server.sendAsync(`runProject`, project)
    }
}

Object.defineProperties(Projects, {
    projects: { get() { return Projects.projects$.value } },
    project: { get() { return Projects.project$.value } },
    isNew: {
        get() {
            return Projects.project$.value.id && Object.keys(Projects.projects$.value).indexOf(Projects.project$.value.id) === -1
        }
    },
    editing: {
        get() { return Projects.editing$.value },
        set(value) { if (value !== Projects.editing$.value) { Projects.editing$.next(value) } }
    }
})

Server.subscribe(`testResults`, () => Projects.open(Projects.project.id))
Server.subscribe(`testProgress`, data => {
    setProgressBar()
    progressBar.visible = !data.done
    progressBar.text = `<div>${data.text || `&nbsp;`}</div>`
    progressBar.header = `<div>${data.header || `&nbsp;`}</div>`
    progressBar.value = data.progress
})

export default Projects