const fs = require(`fs`)
const GetPaths = require(`./get-paths`)
const WriteRemoteFiles = require(`./write-remote-files`)

module.exports = project => {
    WriteRemoteFiles(project)
    return true
}