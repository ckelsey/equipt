const fs = require(`fs`)
const electron = require(`electron`)
const path = require(`path`)
const InitProject = require(`./init-project`)
const RunTests = require(`./run-tests`)
const GetAllProjectResults = require(`./get-all-project-results`)

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

function updateProject(data) {
    const projects = getProjectsObject()
    projects[data.id] = data

    return InitProject(data) ? writeProjects(projects) : { error: `Error saving project` }
}

function deleteProject(data) {
    const projects = getProjectsObject()
    projects[data.id] = undefined
    delete projects[data.id]

    return writeProjects(projects)
}

ipcMain.on(`deleteProject`, (event, data) => event.returnValue = deleteProject(data))
ipcMain.on(`updateProject`, (event, data) => event.returnValue = updateProject(data))
ipcMain.on(`getProjects`, event => {
    const projects = getProjectsObject()

    Object.keys(projects)
        .forEach(id => projects[id].results =
            GetAllProjectResults(projects[id])
        )

    event.returnValue = JSON.stringify(projects)
})

ipcMain.on(`runProject`, (event, data) => {
    event.returnValue = true
    RunTests(data)
})
