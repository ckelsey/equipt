const GetProjectRoot = require(`./get-project-root`)
const CanWriteFiles = require(`./can-write-files`)
const WriteRemoteFiles = require(`./write-remote-files`)

module.exports = project => {
    if (!CanWriteFiles(project)) { return false }

    WriteRemoteFiles(project, GetProjectRoot(project))

    return true
}