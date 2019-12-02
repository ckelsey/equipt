module.exports = function WdConfig(project, getPath) {
    const appPath = require(`electron`).app.getAppPath()
    const path = require(`path`)
    const fs = require(`fs`)
    const glob = require(`fast-glob`)
    const template = fs.readFileSync(path.join(appPath, `configs`, `template-wd.txt`)).toString()
    const GetProjectRoot = require(`./get-project-root`)
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
        babelConfig.plugins = [
            `istanbul`,
            [`babel-plugin-module-resolver`, { root: [path.dirname(root)], alias: `./`, cache: false }]
        ]


        babelConfig.root = babelConfig.root || path.dirname(babelConfigPath)
        babelConfig.extends = babelConfig.extends || babelConfigPath
        babelConfig.ignore = babelConfig.ignore || [`node_modules`]
        babelConfig.cache = false

        babelArgs[1] = `require('@babel/register')(${JSON.stringify(babelConfig)})`
    }

    const beforeRequires = [`{{beforeRequires}}`, `require('node-sass')`]

    return template
        .replace(`{{outputDir}}`, path.resolve(`${root}/output`))
        .replace(`{{specs}}`, specs)
        .replace(...babelArgs)
        .replace(...beforeRequires)
}