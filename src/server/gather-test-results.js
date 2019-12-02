module.exports = project => {
    const fs = require(`fs`)
    const path = require(`path`)
    const execSync = require(`child_process`).execSync
    const GetProjectRoot = require(`./get-project-root`)
    const GetResultsPath = require(`./get-results-path`)
    const GetCoverage = require(`./gather-test-results-coverage`)
    const ReadTestResultFiles = require(`./read-test-result-files`)
    const CoverageUtils = require(`./coverage-utils`)
    const root = GetProjectRoot(project)
    const dirname = path.dirname(root)
    const output = path.join(root, `output`)
    const resultsPath = GetResultsPath(root)

    return Promise.all([
        GetCoverage(root),
        ...ReadTestResultFiles(output, dirname)
    ])
        .then(res => {
            const coverage = res.shift()
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

            const time = new Date().getTime()
            const results = { time, coverage, coverageSummary, tests: res }
            fs.writeFileSync(path.join(resultsPath, `results-${time}.json`), JSON.stringify(results))
            execSync(`rm -R ${output}`)
            try { execSync(`rm -R ${path.join(path.dirname(root), `.nyc_output`)}`) } catch (error) { console.log(error) }

            return results
        })
}