const fs = require(`fs`)
const path = require(`path`)
const Get = require(`./get`)

module.exports = root => new Promise((resolve, reject) => {
    const dirname = path.dirname(root)
    const output = path.join(root, `output`)
    const coverageData = require(path.join(output, `coverage-summary.json`))
    const coverage = {}
    const coverageFinalData = {}

    const shortenedFilePath = p => p.split(dirname)[1]

    const finish = () => {
        if (!coverageData || !coverageFinalData) { return }

        Object.keys(coverageData)
            .sort()
            .forEach(coverageFilepath => {
                if (coverageFilepath === `total`) {
                    coverage.total = coverageData[coverageFilepath]
                    return
                }

                coverage[shortenedFilePath(coverageFilepath)] = Object.assign(
                    {},
                    coverageData[coverageFilepath],
                    { lines: coverageFinalData[coverageFilepath] }
                )
            })

        return resolve(coverage)
    }

    fs.readFile(path.join(output, `coverage-final.json`), (err, fileContent) => {
        if (err) { return reject(err) }

        fileContent = JSON.parse(fileContent)

        const codePaths = Object.keys(fileContent)
        const codesLength = codePaths.length
        let codesGotten = 0

        codePaths.forEach(codePath => {
            const fileCoverage = fileContent[codePath]

            fs.readFile(codePath, (err, codeContent) => {
                if (err) { return reject(err) }

                codesGotten = codesGotten + 1
                const lines = codeContent.toString().split(`\n`)

                const lineMetadata = lines
                    .map((l, lineIndex) => {
                        const lineNumber = lineIndex + 1
                        const content = l

                        const filter = s => s !== false
                        const isRelevent = location =>
                            location.start.line <= lineNumber &&
                            location.end.line >= lineNumber

                        const getRelevence = (map, key, locationPath, resultKey) =>
                            isRelevent(Get(fileCoverage[map][key], locationPath)) ?
                                fileCoverage[resultKey][key] :
                                false

                        const getCoverage = (map, locationPath, resultKey) => Object.keys(fileCoverage[map])
                            .map(key => getRelevence(map, key, locationPath, resultKey))
                            .filter(filter)[0]

                        const _branchCoverage = getCoverage(`branchMap`, `loc`, `b`)
                        const branchCoverage = _branchCoverage ? _branchCoverage[0] : undefined
                        const statementCoverage = getCoverage(`statementMap`, ``, `s`)
                        const functionCoverage = getCoverage(`fnMap`, `loc`, `f`)
                        const isNotCovered = branchCoverage === 0 || statementCoverage === 0 || functionCoverage === 0
                        const coveredCount = Math.max(branchCoverage || 0, statementCoverage || 0, functionCoverage || 0)
                        const covered = isNotCovered ? 0 : coveredCount

                        return { content, covered }
                    })

                coverageFinalData[codePath] = lineMetadata

                if (codesGotten === codesLength) {
                    finish()
                }
            })
        })
    })
})