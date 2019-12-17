const fs = require(`fs`)
const GetPaths = require(`./get-paths`)

module.exports = (project, asExport) => {
    const paths = GetPaths(project)

    fs.writeFileSync(paths.babelConfig, `module.exports = ${JSON.stringify({
        presets: [
            [`@babel/preset-env`, {
                useBuiltIns: `entry`,
                corejs: 3,
                targets: {
                    browsers: [`last 3 versions`],
                    "node": true
                }
            }]
        ],
        plugins: [
            [`istanbul`, { cache: false }],
            [`babel-plugin-module-resolver`, { root: [asExport ? `./` : paths.projectRoot], alias: `./`, cache: false }]
        ],
        ignore: [`node_modules`],
    })}`)
}