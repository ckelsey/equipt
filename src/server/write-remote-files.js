module.exports = (project, root) => {
    const fs = require(`fs`)
    const path = require(`path`)
    const execSync = require(`child_process`).execSync
    const GetAppNodeModules = require(`./get-app-node-modules`)
    const WDConfig = require(`./wd-config`)
    const Package = require(`./package`)
    const CreateRoot = require(`./create-root`)
    CreateRoot(root)

    const WDConfigPath = WDConfig(project, true)
    if (fs.existsSync(WDConfigPath)) { fs.unlinkSync(WDConfigPath) }
    fs.writeFileSync(WDConfigPath, WDConfig(project))

    const packagePath = Package(project, true)
    if (fs.existsSync(packagePath)) { fs.unlinkSync(packagePath) }
    fs.writeFileSync(packagePath, JSON.stringify(Package(project)))

    const remoteNodeMods = path.join(root, `node_modules`)
    if (fs.existsSync(remoteNodeMods)) { execSync(`rm -R ${remoteNodeMods}`) }
    fs.symlinkSync(GetAppNodeModules(), remoteNodeMods)
}