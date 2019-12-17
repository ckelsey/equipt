module.exports = (project, getPath, getDependencies) => {
    const appPath = require(`electron`).app.getAppPath()
    const path = require(`path`)
    const GetProjectRoot = require(`./get-project-root`)
    const dependencies = require(path.join(appPath, `package.json`)).dependencies

    if (getDependencies) { return Object.keys(dependencies) }
    if (getPath) { return path.join(GetProjectRoot(project), `package.json`) }

    const needsBabel = project.requiresBabel

    return {
        name: `${project.name}_equipt`,
        description: `Testing for ${project.name}`,
        nyc: {
            require: needsBabel ? [`@babel/register`] : undefined,
            reporter: [
                `lcov`,
                `text`,
                `json`,
                `json-summary`
            ],
            sourceMap: needsBabel ? false : undefined,
            instrument: needsBabel ? false : undefined
        },
        dependencies
    }
}