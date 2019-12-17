import { Observer, ID, Pipe, FromJSON, IfInvalid, Get } from 'builtjs'
import Server from "./server"

const Projects = {
    projects$: Observer({}),
    project$: Observer({}),
    editing$: Observer(false),
    loading$: Observer(false),

    getProjects() {
        Projects.loading = true
        Server.send(`getProjects`)
    },

    open(key) {
        Projects.loading = true
        Projects.editing = false
        Server.send(`openProject`, key)

        // if not current project
        if (Projects.projects[key] && Projects.project.id !== key) {
            Projects.project$.next({ id: Projects.projects[key].id })
        }

        if (Projects.lastOpenedProject !== key) {
            Projects.lastOpenedProject = key
        }
    },

    newProject() {
        if (Projects.isNew) { return }
        Projects.project$.next({ id: ID(), name: ``, packagePath: ``, testsPath: ``, requiresBabel: true })
        Projects.editing = true
    },

    delete(project) {
        Projects.loading = true
        Projects.editing = false
        Server.send(`deleteProject`, project)
    },

    save(project) {
        Projects.loading = true
        Projects.editing = false
        Server.send(`updateProject`, project)
        Projects.open(project.id)
    },

    run(project) {
        Server.sendAsync(`runProject`, project)
    },

    storage: {
        lastOpenedProject: {
            clearInvalids() {
                const projectHistory = Projects.storage.lastOpenedProject.history()
                const projectIds = Object.keys(Projects.projects)
                let i = projectHistory.length

                if (projectIds.length === 0) {
                    return projectHistory
                }

                while (i) {
                    i = i - 1
                    if (projectIds.indexOf(projectHistory[i]) === -1) {
                        projectHistory.pop()
                    }
                }

                localStorage.setItem(Projects.storage.lastOpenedProject.storageKey, JSON.stringify(projectHistory))

                return projectHistory
            },
            history() {
                return Pipe(FromJSON, IfInvalid([]))(localStorage.getItem(Projects.storage.lastOpenedProject.storageKey) || []).value
            },
            storageKey: `openedProjectHistory`
        }
    }
}

Object.defineProperties(Projects, {
    projects: { get() { return Projects.projects$.value || {} } },
    project: { get() { return Projects.project$.value || {} } },
    isNew: {
        get() {
            return Projects.project$.value.id && Object.keys(Projects.projects$.value).indexOf(Projects.project$.value.id) === -1
        }
    },
    editing: {
        get() { return Projects.editing$.value },
        set(value) { Projects.editing$.next(value) }
    },
    loading: {
        get() { return Projects.editing$.value },
        set(value) {
            if (Projects.loading$.value === value) { return }
            Projects.loading$.next(value)
        }
    },
    lastOpenedProject: {
        get() {
            const projectHistory = Projects.storage.lastOpenedProject.clearInvalids()
            return projectHistory[projectHistory.length - 1]
        },
        set(id) {
            const projectHistory = Projects.storage.lastOpenedProject.clearInvalids()
            projectHistory.push(id)
            localStorage.setItem(Projects.storage.lastOpenedProject.storageKey, JSON.stringify(projectHistory.slice(-10)))
        },
    }
})

const projectsUpdate = data => {
    Projects.projects$.next(data)

    const currentProjectId = Get(Projects, `project.id`)
    const lastOpenedProject = Projects.lastOpenedProject

    if (currentProjectId || lastOpenedProject) {
        Server.send(`openProject`, currentProjectId || lastOpenedProject)
    } else {
        Projects.loading = false
    }
}

const projectUpdate = data => {
    Projects.project$.next(data)
    Projects.loading = false
}

Server.subscribe(`testResults`, () => Projects.open(Projects.project.id))
Server.subscribe(`appError`, () => Projects.loading = false)
Server.subscribe(`projectsUpdate`, projectsUpdate)
Server.subscribe(`projectUpdate`, projectUpdate)

export default Projects