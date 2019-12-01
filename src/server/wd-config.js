const appPath = require(`electron`).app.getAppPath()
const path = require(`path`)
const fs = require(`fs`)
const glob = require(`fast-glob`)
const template = fs.readFileSync(path.join(appPath, `configs`, `template-wd.txt`)).toString()
const GetProjectRoot = require(`./get-project-root`)

module.exports = function WdConfig(project, getPath) {
    const root = GetProjectRoot(project)

    if (getPath) { return path.join(root, `wdio.conf.js`) }

    const needsBabel = project.requiresBabel !== false
    const babelArgs = [`{{babel}}`, ``]
    const globs = project.testsPath.split(`,`).map(s => s.trim()).filter(s => !!s)
    const specs = JSON.stringify(glob.sync(
        globs,
        {
            absolute: true,
            ignore: `**/node_modules/**`,
            onlyFiles: true,
            cwd: path.dirname(root),
            followSymbolicLinks: false
        }
    )).split(`"`).join(`'`)

    if (needsBabel) {
        const babelConfigPath = path.join(appPath, `configs`, `babel.config.js`)
        const babelConfig = require(babelConfigPath)

        let hasIstanbulPlugin = false
        let hasBabelResolverPlugin = false

        if (!babelConfig.plugins) {
            babelConfig.plugins = []
        }

        babelConfig.plugins.forEach(plugin => {
            if (plugin === `istanbul` || (Array.isArray(plugin) && plugin[0] === `istanbul`)) {
                hasIstanbulPlugin = true
            }

            if (plugin === `babel-plugin-module-resolver` || (Array.isArray(plugin) && plugin[0] === `babel-plugin-module-resolver`)) {
                hasBabelResolverPlugin = true
            }
        })

        if (!hasIstanbulPlugin) {
            babelConfig.plugins.push(`istanbul`)
        }

        if (!hasBabelResolverPlugin) {
            babelConfig.plugins.push([`babel-plugin-module-resolver`, { root: [path.dirname(root)], alias: `./` }])
        }

        babelConfig.root = babelConfig.root || path.dirname(babelConfigPath)
        babelConfig.extends = babelConfig.extends || babelConfigPath
        babelConfig.ignore = babelConfig.ignore || [`node_modules`]

        babelArgs[1] = `require('@babel/register')(${JSON.stringify(babelConfig)})`
    }

    return template
        .replace(`{{outputDir}}`, path.resolve(`${root}/output`))
        .replace(`{{specs}}`, specs)
        .replace(...babelArgs)
}