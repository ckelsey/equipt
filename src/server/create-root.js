module.exports = root => {
    const fs = require(`fs`)
    return !fs.existsSync(root) ? fs.mkdirSync(root) : undefined
}