const ipcMain = require(`electron`).ipcMain
const { fork } = require(`child_process`)
const path = require(`path`)
const GetProjectRoot = require(`./get-project-root`)
const WriteRemoteFiles = require(`./write-remote-files`)
const State = require(`./state`)
const meddler = require(`./meddler`).instance
const GatherTestResults = require(`./gather-test-results`)

module.exports = project => {
    State.window.webContents.send(`runningTests`, true)

    const root = GetProjectRoot(project)
    WriteRemoteFiles(project, root)

    meddler.init()

    const runner = fork(path.join(__dirname, `runner-process.js`))

    const end = () => {
        meddler.init()
        GatherTestResults(project)
            .then(res => {
                State.window.webContents.send(`runningTests`, false)
                State.window.webContents.send(`testResults`, res)
            })
            .catch(errored)

    }

    const errored = error => {
        runner.kill(`SIGINT`)
        meddler.init()
        State.window.webContents.send(`runningTests`, false)

        if (error.stderr) {
            error = Buffer.from(error.stderr).toString()
        }

        State.window.webContents.send(`appError`, { error })
    }

    const sendUpdate = data => State.window.webContents.send(`runnerUpdate`, data)

    ipcMain.on(`cancelTests`, event => {
        event.returnValue = true
        runner.kill(`SIGINT`)
        end()
    })

    runner.on(`message`, data =>
        data.type === `complete` ?
            end() :
            data.type === `error` ?
                errored(data) :
                sendUpdate(data)
    )

    runner.send(root)
}