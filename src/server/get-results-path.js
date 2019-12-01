const path = require(`path`)
const fs = require(`fs`)

module.exports = (root, read, sync) => {
    const resultsPath = path.join(root, `results`)

    if (!fs.existsSync(root)) {
        fs.mkdirSync(root)
    }

    if (!fs.existsSync(resultsPath)) {
        fs.mkdirSync(resultsPath)
    }

    if (!read) { return resultsPath }

    if (sync) { return fs.readdirSync(resultsPath) }

    return new Promise((resolve, reject) => {
        fs.readdir(resultsPath, (err, files) => err ? reject(err) : resolve(files))
    })
}