const fs = require(`fs`)
const path = require(`path`)
const childProcess = require(`child_process`)
const appPath = require(`electron`).app.getAppPath()
const tmpPath = path.join(appPath, `tmp`)

module.exports = project => {
    if (fs.existsSync(tmpPath)) { childProcess.execSync(`rm - R ${tmpPath}`) }

    fs.mkdirSync(tmpPath)


}