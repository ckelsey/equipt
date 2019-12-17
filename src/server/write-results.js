const fs = require(`fs`)
const path = require(`path`)
const RunnerCleanUp = require(`./runner-clean-up`)
const GetCoverage = require(`./gather-test-results-coverage`)
const ReadTestResultFiles = require(`./read-test-result-files`)
const CoverageUtils = require(`./coverage-utils`)
const Get = require(`../utils/get`)
const GetPaths = require(`./get-paths`)

module.exports = project => {

    const paths = GetPaths(project)

    const finish = results => {
        if (!fs.existsSync(paths.outputTmp) || Get(results, `tests.length`, 0) === 0) { return results }

        const filename = `results-${results.time}.json`
        results.filename = filename

        fs.writeFileSync(path.join(paths.outputResults, filename), JSON.stringify(results))

        RunnerCleanUp(project)

        return results
    }

    const flattenTests = res => Array.isArray(res) ? Array.isArray(res[0]) ? res[0][0] : res[0] : res

    return Promise.all([
        // GetCoverage(paths),
        ReadTestResultFiles(paths)
    ])
        .then(res => {
            const time = new Date().getTime()
            // const coverage = res.shift()
            const coverage = {}
            const flattened = flattenTests(res)
            const tests = flattened.tests
            const logs = flattened.logs

            if (Object.keys(coverage).length === 0) {

                return finish({
                    time,
                    coverage,
                    logs,
                    tests,
                    coverageSummary: {
                        score: 0, scoreEvaluation: `bad`,
                        branchScore: 0, branchScoreEvaluation: `bad`,
                        functionScore: 0, functionScoreEvaluation: `bad`,
                        statementScore: 0, statementScoreEvaluation: `bad`
                    },
                })
            }

            const overallTypeCoverage = CoverageUtils.overallTypeCoverage(coverage)
            const score = Math.round((overallTypeCoverage.branches.score + overallTypeCoverage.functions.score + overallTypeCoverage.statements.score) / 3)
            const coverageSummary = {
                score,
                scoreEvaluation: CoverageUtils.scoreEvaluation(score),
                branchScore: overallTypeCoverage.branches.score,
                branchScoreEvaluation: overallTypeCoverage.branches.scoreEvaluation,
                functionScore: overallTypeCoverage.functions.score,
                functionScoreEvaluation: overallTypeCoverage.functions.scoreEvaluation,
                statementScore: overallTypeCoverage.statements.score,
                statementScoreEvaluation: overallTypeCoverage.statements.scoreEvaluation
            }

            const results = { time, coverage, coverageSummary, tests, logs }
            return finish(results)
        })
}