global.__coverage__ = {}

const NYC = require(`nyc`)
const nyc = new NYC({
    cwd: `/Users/chriskelsey/Sites/ck/built/`,
    reportDir: `/Users/chriskelsey/Sites/ck/built/equipt-testing/output`,
    reporter: `json`,
    require: [`/Users/chriskelsey/Sites/ck/built/equipt-testing/node_modules/@babel/register`, `/Users/chriskelsey/Sites/ck/built/src/index.js`],
    // include: [`/Users/chriskelsey/Sites/ck/built/src`],
    sourceMap: false,
    instrument: false
})

require(`@babel/register`)({
    presets: [
        [`@babel/preset-env`, {
            useBuiltIns: `entry`,
            corejs: 3,
            targets: {
                browsers: [`last 3 versions`],
                "node": true
            }
        }]
    ],
    plugins: [
        `istanbul`,
        [`babel-plugin-module-resolver`, { root: [`/Users/chriskelsey/Sites/ck/built`], alias: `./`, cache: false }]
    ],
    cache: false
    // root:`/Users/chriskelsey/Sites/ck/built/equipt-testing/`
})

nyc.addAllFiles()
const instrumenter = nyc.instrumenter()
instrumenter.instrumentSync()
nyc.instrumentAllFiles(`/Users/chriskelsey/Sites/ck/built/src/index.js`, `/Users/chriskelsey/Sites/ck/built/.nyc_output/`, (a, b, c) => {
    console.log(a, b, c)
})
nyc.writeCoverageFile()
nyc.report()
// instrumenter
// writeCoverageFile
// getCoverageMapFromAllCoverageFiles
// addAllFiles
// addFile
// report
// new NYC(config)

console.log(nyc)