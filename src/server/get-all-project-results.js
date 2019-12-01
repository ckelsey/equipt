const fs = require(`fs`)
const path = require(`path`)
const GetProjectRoot = require(`./get-project-root`)
const GetResultsPath = require(`./get-results-path`)

module.exports = project => {
    const root = GetProjectRoot(project)

    return GetResultsPath(root, true, true)
        .sort()
        .reverse()
        .map(file =>
            JSON.parse(
                fs.readFileSync(path.join(GetResultsPath(root), file))
            )
        )
}