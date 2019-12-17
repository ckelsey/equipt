const spawn = require(`child_process`).spawn

const update = string => process.send({ string, type: `update` })

const current = {
    complete() {
        update(`Done`)
        try {
            current.child.kill(`SIGTERM`)
            process.send({ type: `complete` })
        } catch (error) {/** */ }
    },
    getError(error) {
        if (typeof error === `string`) { return error }
        return Buffer.from(error).toString()
    },
    error(error) {
        error = current.getError(error)
        update(error)
        process.send({ error, type: `error` })
        current.complete()
    }
}

const run = (paths) => {
    const args = [
        `--cwd`,
        paths.projectRoot,
        `--cache`,
        false,
        `--report-dir`,
        paths.outputTmp,
        `--reporter=json`,
        `--require`,
        paths.babelRegister,
        paths.webdriver,
        `run`,
        paths.webdriverConfig
    ]

    current.child = spawn(paths.nyc, args)
    current.child.on(`exit`, current.complete)
    current.child.on(`error`, current.error)
    current.child.stderr.on(`data`, current.error)
    current.child.stdout.on(`data`, (data) => {
        update(data.toString())
        console.log(`stdout: ${data}`)
    })
}

process.on(`message`, data => {
    if (data.action === `run`) {
        return run(data.paths)
    }

    if (data.action === `cancel`) {
        return current.complete()
    }
})