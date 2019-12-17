const scoreEvaluation = score => score > 90 ? `good` : score > 75 ? `ok` : `bad`

module.exports = {
    scoreEvaluation,

    overallScore: fileObjects => Math.round(fileObjects.reduce((result, current) => result + current.score, 0) / fileObjects),

    overallTypeCoverage: fileObjects => {
        const len = fileObjects.length
        const data = fileObjects.reduce(
            (result, current) => ({
                branches: result.branches + current.branches.score,
                statements: result.statements + current.statements.score,
                functions: result.functions + current.functions.score,
            }),
            { branches: 0, statements: 0, functions: 0, }
        )

        data.branches = { score: Math.round(data.branches / len), scoreEvaluation: scoreEvaluation(data.branches / len) }

        data.statements = { score: Math.round(data.statements / len), scoreEvaluation: scoreEvaluation(data.statements / len) }

        data.functions = { score: Math.round(data.functions / len), scoreEvaluation: scoreEvaluation(data.functions / len) }

        return data
    },

    getTypeCoverage: coverageObject => coveredResultKey => {
        const keys = Object.keys(coverageObject[coveredResultKey])
        const reduced = keys.reduce((result, current) => {

            const cur = coverageObject[coveredResultKey][current]

            if (Array.isArray(cur)) {
                const count = result.count + cur.length
                const covered = result.covered + cur.filter(c => parseInt(c) !== 0).length

                return {
                    count,
                    covered,
                    score: Math.round((covered / count) * 100)
                }
            }

            const parsedCovered = parseInt(cur)
            const invalid = isNaN(parsedCovered)
            const count = result.count + (invalid ? 0 : 1)
            const covered = result.count + (invalid || parsedCovered === 0 ? 0 : 1)

            return {
                count,
                covered,
                score: Math.round((covered / count) * 100)
            }
        }, { count: 0, covered: 0, score: 0 })

        reduced.scoreEvaluation = scoreEvaluation(reduced.score)

        return reduced
    }

}