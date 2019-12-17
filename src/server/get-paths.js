const path = require(`path`)

module.exports = project => {
    const appPath = require(`electron`).app.getAppPath()
    const projectRoot = path.dirname(project.packagePath)
    const outputDirname = `equipt-testing`
    const output = path.join(projectRoot, outputDirname)
    const outputNodeModules = path.join(output, `node_modules`)
    const outputTmp = path.join(output, `tmp`)

    return {
        appPath,
        projectRoot,

        output,
        outputDirname,
        outputTmp,
        outputResults: path.join(output, `results`),
        outputPackage: path.join(output, `package.json`),

        outputNodeModules,
        appNodeModules: path.join(appPath, `node_modules`),


        babelConfig: path.join(output, `babel.config.js`),
        babelRegister: path.join(outputNodeModules, `@babel/register`),

        webdriverConfig: path.join(output, `webdriver.config.js`),
        webdriver: path.join(outputNodeModules, `.bin/wdio`),

        nyc: path.join(outputNodeModules, `.bin/nyc`),
        nycTmp: path.join(projectRoot, `.nyc_output`),
        coveragePath: path.join(outputTmp, `coverage-final.json`),

        meddler: path.join(appPath, `src`, `server`, `meddler`),
        meddlerJson: path.resolve(`meddler.json`),

        appPackage: path.join(appPath, `package.json`),
        runnerProcess: path.join(__dirname, `runner-process.js`)
    }
}