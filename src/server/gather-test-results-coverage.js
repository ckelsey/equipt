module.exports = root => {
    const fs = require(`fs`)
    const path = require(`path`)
    const Get = require(`../utils/get`)
    const CoverageUtils = require(`./coverage-utils`)

    const dirname = path.dirname(root)
    const output = path.join(root, `output`)
    const shortenedFilePath = p => p.split(dirname)[1]

    const coverageObject = require(path.join(output, `coverage-final.json`))
    const codePaths = Object.keys(coverageObject)
    const codePathsCount = codePaths.length

    if (codePathsCount === 0) {
        return Promise.resolve({})
    }

    const filter = s => s !== false

    const IsRelevent = lineNumber => location =>
        location.start.line <= lineNumber &&
        location.end.line >= lineNumber

    // This is so ugly
    const GetLineCoverage = (codePath, isRelevent) => (mapKey, coveredResultKey, locationPath = ``) =>
        Object.keys(coverageObject[codePath][mapKey])
            .map(indexKey =>
                isRelevent(
                    Get(
                        coverageObject[codePath][mapKey][indexKey],
                        locationPath
                    )
                ) ?
                    coverageObject[codePath][coveredResultKey][indexKey] :
                    false
            )
            .filter(filter)[0]

    const mapLine = codePath => (content, lineIndex) => {
        const lineNumber = lineIndex + 1
        const isRelevent = IsRelevent(lineNumber)
        const getLineCoverage = GetLineCoverage(codePath, isRelevent)

        const branchCoverage = Get(getLineCoverage(`branchMap`, `b`, `loc`), `0`)
        const statementCoverage = getLineCoverage(`statementMap`, `s`)
        const functionCoverage = getLineCoverage(`fnMap`, `f`, `loc`)

        return {
            content,
            covered: [branchCoverage, statementCoverage, functionCoverage].indexOf(0) > -1 ?
                0 :
                Math.max(branchCoverage || 0, statementCoverage || 0, functionCoverage || 0)
        }
    }

    const parseFile = codePath => new Promise((resolve, reject) => {
        fs.readFile(codePath, (err, codeFileContent) => {
            if (err) { return reject(err) }

            const lineMapper = mapLine(codePath)
            const getTypeCoverage = CoverageUtils.getTypeCoverage(coverageObject[codePath])

            const statements = getTypeCoverage(`s`)
            const functions = getTypeCoverage(`f`)
            const branches = getTypeCoverage(`b`)
            const score = Math.round((statements.score + branches.score + functions.score) / 3)

            return resolve({
                file: shortenedFilePath(codePath),
                statements,
                functions,
                branches,
                score,
                scoreEvaluation: CoverageUtils.scoreEvaluation(score),
                lines: codeFileContent
                    .toString()
                    .split(`\n`)
                    .map(lineMapper)
            })
        })
    })

    return Promise.all(codePaths.map(parseFile))
}