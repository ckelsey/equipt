const fs = require(`fs`)
const execSync = require(`child_process`).execSync
const GetPaths = require(`./get-paths`)
const WriteWebdriverConfig = require(`./write-webdriver-config`)
const WriteBabelConfig = require(`./write-babel-config`)
const WritePackageJson = require(`./write-package-json`)

module.exports = (project, asExport) => {
    const paths = GetPaths(project)

    if (!fs.existsSync(paths.projectRoot)) { fs.mkdirSync(paths.projectRoot) }
    if (!fs.existsSync(paths.output)) { fs.mkdirSync(paths.output) }
    if (!fs.existsSync(paths.outputResults)) { fs.mkdirSync(paths.outputResults) }
    if (!fs.existsSync(paths.outputTmp)) { fs.mkdirSync(paths.outputTmp) }

    WriteBabelConfig(project, asExport)
    WritePackageJson(project)
    WriteWebdriverConfig(project, asExport)

    if (fs.existsSync(paths.outputNodeModules)) { execSync(`rm -R ${paths.outputNodeModules}`) }

    fs.symlinkSync(paths.appNodeModules, paths.outputNodeModules)
}