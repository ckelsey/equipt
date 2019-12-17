const fs = require(`fs`)
const path = require(`path`)

module.exports = paths => file => new Promise((resolve, reject) => {
    const filePath = path.join(paths.outputTmp, file)
    const shortenedFilePath = p => p.split(paths.projectRoot)[1]

    fs.readFile(filePath, (err, fileContent) => {
        if (err) { return reject(err) }

        try {
            fileContent = JSON.parse(fileContent)
        } catch (error) {
            return resolve()
        }

        fileContent.specs = fileContent.specs.map(shortenedFilePath)

        return resolve(fileContent)
    })
})