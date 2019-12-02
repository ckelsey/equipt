const fs = require(`fs`)
const path = require(`path`)

module.exports = (outputDir, projectDir) => file => new Promise((resolve, reject) => {
    const filePath = path.join(outputDir, file)
    const shortenedFilePath = p => p.split(projectDir)[1]

    fs.readFile(filePath, (err, fileContent) => {
        if (err) { return reject(err) }

        fileContent = JSON.parse(fileContent)
        fileContent.specs = fileContent.specs.map(shortenedFilePath)

        return resolve(fileContent)
    })
})