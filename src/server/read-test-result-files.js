const fs = require(`fs`)
const ReadTestResultFile = require(`./read-test-result-file`)

module.exports = (outputDir, projectDir) => {
    const readTestResultFile = ReadTestResultFile(outputDir, projectDir)

    return fs.readdirSync(outputDir)
        .filter(f => f.indexOf(`json-reporter.log`) > -1)
        .map(readTestResultFile)
}