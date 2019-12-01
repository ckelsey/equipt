import { WCConstructor, WCDefine, Get, DateToObject } from 'builtjs'

const componentName = `result-header`
const componentRoot = `.${componentName}-container`
const template = require(`./index.html`)
const style = require(`./style.scss`).toString()

const setDate = (val, el) => {
    const date = DateToObject(new Date(Get(val, `time`))).value
    el.innerHTML = `<span>${date.hourDouble}:${date.minutesDouble}&nbsp;${date.ampm}&nbsp;&middot;&nbsp;${date.monthNameShort}&nbsp;${date.day}</span>`
}

const setPassFailSkip = (val, el) => {
    let passed = 0
    let failed = 0
    let skipped = 0

    Get(val, `tests`, []).forEach(test => {
        passed = passed + test.state.passed
        failed = failed + test.state.failed
        skipped = skipped + test.state.skipped
    })

    el.innerHTML = `<span><span class="skipped">${skipped} skipped</span>&nbsp;&middot;&nbsp;<span class="failed">${failed} failed</span>&nbsp;&middot;&nbsp;<span class="passed">${passed} passed</span></span>`
}

const actualPercent = pct => !pct || pct === `Unknown` ? 0 : pct

const setCoverageScore = (val, el) => {
    const totals = Get(val, `coverage.total`, {})
    const sum = Object.keys(totals)
        .reduce((result, key) => {
            result = result + actualPercent(totals[key].pct)
            return result
        }, 0)

    const score = Math.round(sum / 4)
    const evaluated = score > 90 ? `good` : score > 75 ? `ok` : `bad`
    el.setAttribute(`evaluated`, evaluated)
    el.innerHTML = `<span>${score}%</span>`
}

const elements = {
    root: { selector: componentRoot },
    resultDate: { selector: `.result-date` },
    passesFails: { selector: `.result-passes-fails` },
    coverageScore: { selector: `.result-coverage-score` }
}
const properties = {
    testdata: {
        format: val => val,
        onChange: (val, host) => {
            setDate(val, host.elements.resultDate)
            setPassFailSkip(val, host.elements.passesFails)
            setCoverageScore(val, host.elements.coverageScore)
        }
    }
}

export const ResultHeader = WCConstructor({
    componentName,
    componentRoot,
    template,
    style,
    elements,
    properties,
    observedAttributes: Object.keys(properties),
})

WCDefine(componentName, ResultHeader)

export default ResultHeader