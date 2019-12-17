module.exports = project => {
    const fs = require(`fs`)
    return fs.existsSync(project.packagePath)
}