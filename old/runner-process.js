const { default: Launcher } = require(`@wdio/cli`)
const path = require(`path`)
const fs = require(`fs`)
const watch = require(`node-watch`)

const run = root => {
    const configPath = path.join(root, `webdriver.config.js`)
    const wdio = new Launcher(configPath)
    const meddler = require(`./meddler`).instance

    const watcher = watch(path.resolve(`meddler.json`), { recursive: true }, function (evt, name) {
        const data = JSON.parse(fs.readFileSync(name).toString())

        process.send({
            data,
            remainingSpecCount: wdio.getNumberOfSpecsLeft(),
            type: `update`
        })
    })

    const meddlerOnPrepareSub = meddler.subscribe(`onPrepare`, data => {
        const logData = JSON.parse(fs.existsSync(`meddler.json`) ? fs.readFileSync(`meddler.json`) : `[]`)
        logData.push(data)
        fs.writeFileSync(`meddler.json`, JSON.stringify(logData))
    })

    const meddlerBeforeTestSub = meddler.subscribe(`beforeTest`, data => {
        const logData = JSON.parse(fs.existsSync(`meddler.json`) ? fs.readFileSync(`meddler.json`) : `[]`)
        logData.push(data)
        fs.writeFileSync(`meddler.json`, JSON.stringify(logData))
    })

    const meddlerAfterTestSub = meddler.subscribe(`afterTest`, data => {
        const logData = JSON.parse(fs.existsSync(`meddler.json`) ? fs.readFileSync(`meddler.json`) : `[]`)
        logData.push(data)
        fs.writeFileSync(`meddler.json`, JSON.stringify(logData))
    })

    wdio.run()
        .then(() => {
            watcher.close()
            meddlerOnPrepareSub()
            meddlerBeforeTestSub()
            meddlerAfterTestSub()
            process.send({ type: `complete` })
        })
        .catch(error => {
            process.send({
                error: Buffer.from(error.stderr).toString(),
                type: `error`
            })
        })
}

process.on(`message`, run)