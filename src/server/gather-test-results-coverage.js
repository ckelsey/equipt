const fs = require(`fs`)
const Get = require(`../utils/get`)

module.exports = paths => {
    const shortenedFilePath = p => p.split(paths.projectRoot)[1]
    const coverageObject = fs.existsSync(paths.coveragePath) ? JSON.parse(fs.readFileSync(paths.coveragePath).toString()) : {}
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

    const lineIsComment = content => content.match(/(^|\s)\/\*/) ?
        content.match(/(^|\s)\/\*/).index === 0 :
        content.match(/(^|\s)\/\//) ?
            content.match(/(^|\s)\/\//).index === 0 :
            false

    const mapLine = codePath => (content, lineIndex) => {
        if (lineIsComment(content)) {
            return {
                content,
                covered: ``,
                number: lineIndex + 1,
                is: [`comment`]
            }
        }

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

    const getCoverage = (data, key) => {
        {
            Object.keys(data.s).length,
            covered
        }
    }

    const parseFile = codePath => new Promise((resolve, reject) => {
        fs.readFile(codePath, (err, codeFileContent) => {
            if (err) { return reject(err) }

            const data = coverageObject[codePath]
            const lineMapper = mapLine(codePath)
            // const getTypeCoverage = CoverageUtils.getTypeCoverage(coverageObject[codePath])

            // const statements = getTypeCoverage(`s`)
            // const functions = getTypeCoverage(`f`)
            // const branches = getTypeCoverage(`b`)
            // const score = Math.round((statements.score + branches.score + functions.score) / 3)

            // { count: 0, covered: 0, score: 0 } scoreEvaluation

            const lines = codeFileContent
                .toString()
                .split(`\n`)
                .map(lineMapper)

            const statements = getCoverage(data, `s`)



            return resolve({
                file: shortenedFilePath(codePath),
                lines,
                // statements,
                // functions,
                // branches,
                // score,
                // scoreEvaluation: CoverageUtils.scoreEvaluation(score),
                // lines: codeFileContent
                //     .toString()
                //     .split(`\n`)
                //     .map(lineMapper)
            })
        })
    })

    return Promise.all(codePaths.filter(f => f.indexOf(`webdriver.config.js`) === -1).map(parseFile))
}