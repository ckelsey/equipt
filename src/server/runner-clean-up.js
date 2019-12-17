const execSync = require(`child_process`).execSync
const GetPaths = require(`./get-paths`)

module.exports = project => {
    const paths = GetPaths(project)

    try { execSync(`rm -R ${paths.outputTmp}`) } catch (error) {/** */ }
    try { execSync(`rm -R ${paths.nycTmp}`) } catch (error) { /** */ }
}