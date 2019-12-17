const fs = require(`fs`)
const path = require(`path`)
const GetPaths = require(`./get-paths`)

module.exports = (result, project) => fs.unlinkSync(path.join(GetPaths(project).outputResults, result.filename))