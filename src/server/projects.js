const fs = require(`fs`)
const electron = require(`electron`)
const path = require(`path`)
const InitProject = require(`./init-project`)
const RunTests = require(`./run-tests`)
const GetAllProjectResults = require(`./get-all-project-results`)
const State = require(`./state`)

const app = electron.app
const ipcMain = electron.ipcMain
const projectPath = path.resolve(`${app.getAppPath()}/data/projects.json`)
const getProjects = () => fs.readFileSync(projectPath).toString()
const getProjectsObject = () => JSON.parse(getProjects())

const writeProjects = data => {
    const projectString = JSON.stringify(data)
    fs.writeFileSync(projectPath, projectString)
    return projectString
}

function getProjectsData() {
    const projects = getProjectsObject()
    const projectKeys = Object.keys(projects)
    const projectsResults = {}

    projectKeys
        .forEach(id => GetAllProjectResults(projects[id])
            .then(res => {
                projectsResults[id] = res

                const resultKeys = Object.keys(projectsResults)
                if (projectKeys.length === resultKeys.length) {
                    resultKeys.forEach(idKey => projects[idKey].results = projectsResults[idKey])
                    State.window.webContents.send(`projectsUpdate`, projects)
                }
            })
        )
}

function updateProject(data) {
    const projects = getProjectsObject()
    projects[data.id] = data
    InitProject(data) ? writeProjects(projects) : { error: `Error saving project` }
    getProjectsData()
}

function deleteProject(data) {
    const projects = getProjectsObject()
    projects[data.id] = undefined
    delete projects[data.id]
    writeProjects(projects)
    getProjectsData()
}

ipcMain.on(`deleteProject`, (event, data) => {
    event.returnValue = true
    deleteProject(data)
})
ipcMain.on(`updateProject`, (event, data) => {
    event.returnValue = true
    updateProject(data)
})
ipcMain.on(`getProjects`, event => {
    event.returnValue = true
    getProjectsData()
})

ipcMain.on(`runProject`, (event, data) => {
    event.returnValue = true
    RunTests(data)
        .catch(console.log)
})
