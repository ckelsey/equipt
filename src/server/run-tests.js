const fork = require(`child_process`).fork
const ipcMain = require(`electron`).ipcMain
const State = require(`./state`)
const GetPaths = require(`./get-paths`)
const WriteResults = require(`./write-results`)
const WriteRemoteFiles = require(`./write-remote-files`)
const RunnerCleanUp = require(`./runner-clean-up`)

module.exports = project => {
    let canceled = false

    State.window.webContents.send(`runningTests`, true)
    const paths = GetPaths(project)

    WriteRemoteFiles(project)

    const runner = fork(paths.runnerProcess)

    const cleanup = () => {
        State.window.webContents.send(`runningTests`, false)
        RunnerCleanUp(project)
    }

    const errored = error => {
        if (canceled) { return cleanup() }

        runner.send({ action: `cancel` })
        State.window.webContents.send(`runningTests`, false)
        State.window.webContents.send(`appError`, error)
    }

    const end = () => {
        if (canceled) { return cleanup() }

        WriteResults(project)
            .then(res => {
                WriteRemoteFiles(project, true)
                State.window.webContents.send(`runningTests`, false)
                State.window.webContents.send(`testResults`, res)
            })
            .catch(errored)

    }

    const sendUpdate = data => State.window.webContents.send(`runnerUpdate`, data)

    ipcMain.on(`cancelTests`, event => {
        event.returnValue = true
        canceled = true
        runner.send({ action: `cancel` })
    })

    runner.on(`message`, data =>
        data.type === `complete` ?
            end() :
            data.type === `error` ?
                errored(data) :
                sendUpdate(data)
    )

    runner.send({ action: `run`, paths })
}