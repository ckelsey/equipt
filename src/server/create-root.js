const fs = require(`fs`)
module.exports = root => !fs.existsSync(root) ? fs.mkdirSync(root) : undefined