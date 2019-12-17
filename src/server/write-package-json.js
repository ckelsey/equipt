const fs = require(`fs`)
const GetPaths = require(`./get-paths`)

module.exports = project => {
    const paths = GetPaths(project)

    fs.writeFileSync(paths.outputPackage, JSON.stringify({
        name: `${project.name}_equipt`,
        description: `Testing for ${project.name}`,
        nyc: {
            require: [`@babel/register`],
            reporter: [
                `lcov`,
                `text`,
                `json`,
                `json-summary`
            ],
            sourceMap: false,
            instrument: false,
            cache: false
        },
        dependencies: require(paths.appPackage).dependencies
    }))
}