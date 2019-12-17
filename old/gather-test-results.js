const fs = require(`fs`)
const path = require(`path`)
const execSync = require(`child_process`).execSync
const GetProjectRoot = require(`../get-project-root`)
const GetResultsPath = require(`../get-results-path`)
const GetCoverage = require(`../gather-test-results-coverage`)
const ReadTestResultFiles = require(`../read-test-result-files`)
const CoverageUtils = require(`../coverage-utils`)
const Get = require(`../../utils/get`)

module.exports = project => {
    const root = GetProjectRoot(project)
    const dirname = path.dirname(root)
    const output = path.join(root, `output`)
    const resultsPath = GetResultsPath(root)

    const finish = results => {
        if (!fs.existsSync(output) || Get(results, `tests.length`, 0) === 0) { return results }

        fs.writeFileSync(path.join(resultsPath, `results-${results.time}.json`), JSON.stringify(results))
        try { execSync(`rm -R ${output}`) } catch (error) {/** */ }
        try { execSync(`rm -R ${path.join(path.dirname(root), `.nyc_output`)}`) } catch (error) { /** */ }

        return results
    }

    return Promise.all([
        GetCoverage(root),
        ReadTestResultFiles(output, dirname)
    ])
        .then(res => {
            const time = new Date().getTime()
            const coverage = res.shift()

            if (Object.keys(coverage).length === 0) {
                return finish({
                    time,
                    coverage,
                    tests: res[0],
                    coverageSummary: {
                        score: 0, scoreEvaluation: `bad`,
                        branchScore: 0, branchScoreEvaluation: `bad`,
                        functionScore: 0, functionScoreEvaluation: `bad`,
                        statementScore: 0, statementScoreEvaluation: `bad`
                    }
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

            const results = { time, coverage, coverageSummary, tests: res }
            return finish(results)
        })
}