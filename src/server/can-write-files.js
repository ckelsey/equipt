const fs = require(`fs`)
module.exports = project => fs.existsSync(project.packagePath)