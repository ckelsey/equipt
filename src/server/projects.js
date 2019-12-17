const fs = require(`fs`)
const electron = require(`electron`)
const path = require(`path`)
const GetAllProjectResults = require(`./get-all-project-results`)
const WriteRemoteFiles = require(`./write-remote-files`)
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

function send(key, data) {
    return State.window.webContents.send(key, data)
}

function getProjectsData() {
    return send(`projectsUpdate`, getProjectsObject())
}

function openProject(id) {
    const projects = getProjectsObject()
    const project = projects[id]

    if (!project) { return send(`projectUpdate`, {}) }

    GetAllProjectResults(project)
        .then(results => {
            send(`projectUpdate`, Object.assign({}, project, { results }))
        })
}

function updateProject(data) {
    const projects = getProjectsObject()
    projects[data.id] = data
    WriteRemoteFiles(data, true)
    writeProjects(projects)
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

ipcMain.on(`openProject`, (event, id) => {
    event.returnValue = true
    openProject(id)
})

ipcMain.on(`runProject`, (event, data) => {
    event.returnValue = true
    require(`./run-tests`)(data)
})

ipcMain.on(`deleteResult`, (event, data) => {
    event.returnValue = true
    require(`./delete-result`)(data.result, data.project)
    getProjectsData()
})
