const fs = require(`fs`)
const path = require(`path`)
const execSync = require(`child_process`).execSync
const GetProjectRoot = require(`./get-project-root`)
const GetResultsPath = require(`./get-results-path`)
const GetCoverage = require(`./gather-test-results-coverage`)

module.exports = project => new Promise((resolve, reject) => {
    const root = GetProjectRoot(project)
    const dirname = path.dirname(root)
    const output = path.join(root, `output`)
    const resultsPath = GetResultsPath(root)
    const tests = []
    const testsdata = {}
    let coverage
    let testsDone = 0
    let testsLength = 0

    const shortenedFilePath = p => p.split(dirname)[1]

    const finish = () => {
        if (testsDone !== testsLength || !coverage) { return }

        Object.keys(testsdata)
            .sort()
            .forEach(testFilepath => tests.push(testsdata[testFilepath]))

        const results = { tests, coverage }

        fs.writeFileSync(path.join(resultsPath, `results-${new Date().getTime()}.json`), JSON.stringify(results))
        execSync(`rm -R ${output}`)

        return resolve(results)
    }

    GetCoverage(root)
        .then(res => {
            coverage = res
            finish()
        })

    fs.readdir(output, (err, files) => {
        if (err) { return reject(err) }

        files = files
            .filter(f => f.indexOf(`json-reporter.log`) > -1)
            .sort()

        testsLength = files.length

        files.forEach(file => {
            const filePath = path.join(output, file)

            fs.readFile(filePath, (err, fileContent) => {
                if (err) { return reject(err) }

                fileContent = JSON.parse(fileContent)
                fileContent.specs = fileContent.specs.map(shortenedFilePath)
                testsdata[shortenedFilePath(filePath)] = fileContent
                testsDone = testsDone + 1
                finish()
            })
        })
    })
})