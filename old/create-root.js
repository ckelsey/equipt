const fs = require(`fs`)
const path = require(`path`)

module.exports = root => {
    const output = path.join(root, `output`)
    if (!fs.existsSync(root)) { fs.mkdirSync(root) }
    if (!fs.existsSync(output)) { fs.mkdirSync(output) }
}