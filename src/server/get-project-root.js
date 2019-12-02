module.exports = project => {
    const path = require(`path`)
    return path.join(path.dirname(project.packagePath), `equipt-testing`)
}