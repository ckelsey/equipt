const appPath = require(`electron`).app.getAppPath()
const path = require(`path`)
const fs = require(`fs`)
const template = fs.readFileSync(path.join(appPath, `configs`, `template-wd.txt`)).toString()
const GetProjectRoot = require(`./get-project-root`)

module.exports = function WdConfig(project, getPath) {
    const root = GetProjectRoot(project)

    if (getPath) { return path.join(root, `wdio.conf.js`) }

    const needsBabel = project.babelConfig !== false
    const babelArgs = [`{{babel}}`, ``]

    if (needsBabel) {
        const babelConfigPath = project.babelConfig || path.join(appPath, `configs`, `babel.config.js`)
        const babelConfig = require(babelConfigPath)

        babelConfig.plugins = [`istanbul`, [
            `babel-plugin-module-resolver`, { root: [path.dirname(root)], alias: `./` }]
        ].concat(babelConfig.plugins || [])
        babelConfig.root = babelConfig.root || path.dirname(babelConfigPath)
        babelConfig.extends = babelConfig.extends || babelConfigPath
        babelConfig.ignore = babelConfig.ignore || [`node_modules`]

        babelArgs[1] = `require('@babel/register')(${JSON.stringify(babelConfig)})`
    }

    return template
        .replace(`{{outputDir}}`, path.resolve(`${root}/output`))
        .replace(`{{specs}}`, `${path.dirname(root)}${project.testsPath}`)
        .replace(...babelArgs)
}