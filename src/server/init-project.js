module.exports = project => {
    const GetProjectRoot = require(`./get-project-root`)
    const CanWriteFiles = require(`./can-write-files`)
    const WriteRemoteFiles = require(`./write-remote-files`)

    if (!CanWriteFiles(project)) { return false }

    WriteRemoteFiles(project, GetProjectRoot(project))

    return true
}