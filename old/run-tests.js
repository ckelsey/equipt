module.exports = project => new Promise((resolve, reject) => {
    let errored = false
    const path = require(`path`)
    const spawn = require(`child_process`).spawn
    const GetProjectRoot = require(`../get-project-root`)
    const Between = require(`../../utils/between`)
    const CanWriteFiles = require(`../can-write-files`)
    const WriteRemoteFiles = require(`../write-remote-files`)
    const GatherTestResults = require(`../gather-test-results`)
    const State = require(`../state`)

    State.window.webContents.send(`testProgress`, { progress: 0, done: false, text: `Preparing tests`, header: `Initializing` })

    if (!CanWriteFiles(project)) {
        const error = `Invalid package.json path`
        State.window.webContents.send(`testProgress`, { done: true })
        State.window.webContents.send(`appError`, { error })
        return reject(error)
    }

    const root = GetProjectRoot(project)
    WriteRemoteFiles(project, root)

    const targetNodeModules = path.join(root, `node_modules`)
    const configPath = path.join(root, `webdriver.config.js`)
    const out = path.join(path.dirname(configPath), `output`)
    const needsBabel = project.requiresBabel
    let numberOfTests = 0
    let numberOfCompleted = 0
    let failedTests = 0
    let browser = ``

    // Helpers
    const progress = () => Math.ceil((numberOfCompleted * 100) / numberOfTests)
    const failedText = () => failedTests ? ` - <span class="danger">Failed(${failedTests})</span> - ` : ` - `
    const progressText = () => `${numberOfCompleted}/${numberOfTests}${failedText()}`
    const testFile = string => string.split(path.dirname(root))[1]
    const updateTestCount = string => numberOfTests = parseInt(Between(`Execution of `, ` spec files`, string).first())
    const incrementCompleted = () => numberOfCompleted = numberOfCompleted + 1
    const incrementFailed = () => failedTests = failedTests + 1
    const standardText = (string, type) => `${progressText()}${type} ${testFile(string) || ``}`
    const sendUpdate = (done, header, text) => errored ? undefined : State.window.webContents.send(`testProgress`, { done, text, progress: progress(), header: `${browser}${header}` })

    const die = () => {
        child.stdin.end()
        child.kill()
    }

    const onComplete = () => {
        die()

        if (errored) { return }

        sendUpdate(true, `Complete`, `Gathering reports`)
        return GatherTestResults(project)
            .then(res => {
                sendUpdate(true, `Complete`, `Done`)
                resolve(State.window.webContents.send(`testResults`, res))
            })
    }

    const onError = error => {
        errored = true
        die()
        State.window.webContents.send(`testProgress`, { done: true, text: ``, progress: 0, header: `` })
        State.window.webContents.send(`appError`, { error: error.toString() })
        return reject(error.toString())
    }

    const args = [
        `--cwd`,
        path.dirname(root),
        `--report-dir`,
        out,
        `--reporter=json`,
        `--cache`,
        `false`,
    ]

    if (needsBabel) {
        args.push(`--require`)
        args.push(path.resolve(`${targetNodeModules}/@babel/register`))
    }

    args.push(path.resolve(`${targetNodeModules}/.bin/wdio`))
    args.push(`run`)
    args.push(configPath)

    const child = spawn(path.resolve(`${targetNodeModules}/.bin/nyc`), args)

    child.on(`exit`, onComplete)
    child.on(`error`, onError)
    child.stderr.on(`data`, onError)

    child.stdout.on(`data`, (data) => {
        console.log(`stdout: ${data}`)
        const string = data.toString().trim()
        const errorIndex = string.indexOf(` Error: `)

        /** TODO - this kind of parsing sucks */
        if (errorIndex > -1 && errorIndex < 20) {
            return onError(string)
        }

        if (string.indexOf(`Execution of `) === 0) {
            updateTestCount(string)
            return sendUpdate(false, `Initializing`, `${numberOfTests} tests to run`)
        }

        if (string.indexOf(`RUNNING in `) > -1) {
            return sendUpdate(false, `Testing`, standardText(string, `Running`))
        }

        if (string.indexOf(`PASSED in`) > -1) {
            incrementCompleted()
            return sendUpdate(false, `Testing`, standardText(string, `Completed`))
        }

        if (string.indexOf(`FAILED in`) > -1) {
            incrementCompleted()
            incrementFailed()
            return sendUpdate(false, `Testing`, standardText(string, `Failed`))
        }

        if (string.indexOf(`Starting ChromeDriver`) > -1) {
            browser = `Chrome - `
            return sendUpdate(false, `Starting Chrome`, standardText(string, `Starting ChromeDriver`))
        }
    })
})