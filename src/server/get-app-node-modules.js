const appPath = require(`electron`).app.getAppPath()
const path = require(`path`)

module.exports = () => path.join(appPath, `node_modules`)
