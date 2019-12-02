module.exports = equiptRoot => new Promise((resolve, reject) => {
    const fs = require(`fs`)
    const path = require(`path`)
    const outputDir = `output`

    const getOutputJson = equiptRoot => {
        try {
            const dir = path.join(equiptRoot, outputDir)

            if (!fs.existsSync(dir)) { return }

            const files = fs.readdirSync(dir)

            let i = files.length

            while (i) {
                i = i - 1
                if (files[i].indexOf(`json-reporter.log`) > -1) {
                    return JSON.parse(fs.readFileSync(path.join(dir, files[i])))
                }
            }
        } catch (error) {
            return
        }
    }

    const getCoverageJson = equiptRoot => {
        try {
            if (!fs.existsSync(equiptRoot)) { return }

            const files = fs.readdirSync(equiptRoot)

            let i = files.length

            while (i) {
                i = i - 1
                if (files[i].indexOf(`coverage-summary.json`) > -1) {
                    return JSON.parse(fs.readFileSync(path.join(equiptRoot, files[i])))
                }
            }
        } catch (error) {
            return
        }
    }

    const testResults = getOutputJson(equiptRoot)

    if (!testResults) {
        return reject(`Invalid Equipt output`)
    }

    const coverage = getCoverageJson(equiptRoot)

    if (!coverage) {
        return reject(`Invalid Equipt coverage report`)
    }

    return resolve({
        coverage,
        testResults
    })
})