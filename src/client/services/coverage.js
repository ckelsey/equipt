export const Coverage = {
    average: val => Math.round((val.branches.pct + val.functions.pct + val.statements.pct) / 3),
    scoreEvaluation: score => score > 90 ? `good` : score > 75 ? `ok` : `bad`
}