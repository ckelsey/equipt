const fs = require(`fs`)
const path = require(`path`)
const ReadTestResultFile = require(`./read-test-result-file`)

module.exports = paths => new Promise((resolve, reject) => {
    const readTestResultFile = ReadTestResultFile(paths)

    if (!fs.existsSync(paths.outputTmp)) {
        return Promise.reject(`Error: ${paths.outputTmp} does not exist`)
    }

    const logContent = []
    const logsToCopy = []
    const logs = fs.readdirSync(paths.outputTmp).filter(f => {
        if (f.indexOf(`.log`) > -1 && f.indexOf(`wdio-`) > -1) { logsToCopy.push(f) }
        return f.indexOf(`json-reporter.log`) > -1
    })

    logsToCopy.forEach(log => {
        logContent.push(fs.readFileSync(path.join(paths.outputTmp, log)).toString())
    })

    Promise.all(logs.map(readTestResultFile))
        .then(res => resolve({ tests: res, logs: logContent.join(`\n`) }))
        .catch(reject)
})