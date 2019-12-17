module.exports = () => {
    const appPath = require(`electron`).app.getAppPath()
    const path = require(`path`)
    return path.join(appPath, `node_modules`)
}
