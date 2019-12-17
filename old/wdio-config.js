/* eslint-disable */

const glob = require(`fast-glob`)
const path = require(`path`)
const beautify = require('js-beautify').js
const appPath = require(`electron`).app.getAppPath()
const GetProjectRoot = require(`./get-project-root`)
const GetPaths = require(`./get-paths`)

module.exports = project => {
    const paths = GetPaths(project)


    // const root = GetProjectRoot(project)
    // const rootDir = path.dirname(root)
    // const babelConfigPath = path.join(appPath, `configs`, `babel.config.js`)

    const beforeSession = function () {
        require('@babel/register')({
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
                'istanbul',
                ['babel-plugin-module-resolver', {
                    root: ['{{babelModuleResolverRoot}}'],
                    alias: './',
                    cache: false
                }]
            ],
            root: '{{babelConfigPath}}',
            extends: '{{babelExtendsPath}}',
            ignore: ['node_modules'],
            cache: false
        });
        require('regenerator-runtime');
    }

    const beforeSessionReplace = `beforeSession: ${
        beforeSession.toString()
            .replace(`'{{babelModuleResolverRoot}}'`, `'${rootDir}'`)
            .replace(`'{{babelConfigPath}}'`, `'${path.dirname(babelConfigPath)}'`)
            .replace(`'{{babelExtendsPath}}'`, `'${babelConfigPath}'`)
        },`

    const beforeTest = function (test) { meddler.trigger('beforeTest', { test, type: 'beforeTest' }); }
    const beforeTestReplace = `beforeTest: ${beforeTest.toString()},`

    const afterTest = function (test) { meddler.trigger('afterTest', { test, type: 'afterTest' }); }
    const afterTestReplace = `afterTest: ${afterTest.toString()},`

    const onPrepare = function (config) { meddler.trigger('onPrepare', { config, type: 'onPrepare' }); }
    const onPrepareReplace = `onPrepare: ${onPrepare.toString()},`

    const globs = project.testsPath.split(`,`).map(s => s.trim()).filter(s => !!s)
    const globsReplace = JSON.stringify(glob.sync(
        globs,
        {
            absolute: true,
            ignore: `**/node_modules/**`,
            onlyFiles: true,
            cwd: path.dirname(root),
            followSymbolicLinks: false
        }
    ))

    const result = () => {
        /* eslint-disable */
        const meddler = require('{{meddlerPath}}').instance;

        const Service = {
            beforeSession: '',
            beforeTest: '',
            afterTest: '',
            onPrepare: '',
        };

        exports.config = {
            hostname: 'localhost',
            port: 8282,
            path: '/',
            runner: 'local',
            capabilities: [
                {
                    maxInstances: 1,
                    browserName: 'chrome',
                    'goog:chromeOptions': {
                        args: ['--headless', '--disable-gpu']
                    }
                }
            ],
            framework: 'jasmine',
            jasmineNodeOpts: { defaultTimeoutInterval: 5000, grep: null, invertGrep: null },
            headless: true,
            bail: 0,
            waitforTimeout: 10000,
            connectionRetryTimeout: 90000,
            connectionRetryCount: 3,
            reporters: ['json'],
            reporterOptions: { combined: true },
            services: ['chromedriver', [Service]],
            specs: [],
            suites: [{ all: [] }],
            outputDir: ''
        };
    };

    const configStringLines = result.toString().split(`\n`)
    configStringLines.shift()
    configStringLines.pop()

    const config = configStringLines
        .join(`\n`)
        .replace(`beforeSession: '',`, beforeSessionReplace)
        .replace(`beforeTest: '',`, beforeTestReplace)
        .replace(`afterTest: '',`, afterTestReplace)
        .replace(`onPrepare: '',`, onPrepareReplace)
        .replace(`specs: [],`, `specs: ${globsReplace},`)
        .replace(`'{{meddlerPath}}'`, `'${path.join(appPath, `src`, `server`, `meddler`)}'`)
        .replace(`suites: [{ all: [] }],`, ``)
        .replace(`outputDir: ''`, `outputDir: '${path.resolve(`${root}/output`)}'`)
        .split(`\n`).map(s => s.trim()).filter(s => !!s).join(` `)

    return beautify(config, { indent_size: 4, space_in_empty_paren: true })
}

// const WDIOReporter = require(`@wdio/reporter`).default;

// class EquiptReporter extends WDIOReporter {
//     constructor(options) {
//         super(options);
//         this.write(`initialised custom reporter with the following reporter options:`, options);
//     }

//     onRunnerStart(a) {
//         this.write(`onRunnerStart`, a);
//     }
// };

// reporters: ['json', EquiptReporter],

// onBeforeCommand() { this.write(`onBeforeCommand`) }
            // onAfterCommand() { this.write(`onAfterCommand`) }
            // onScreenshot() { this.write(`onScreenshot`) }
            // onSuiteStart() { this.write(`onSuiteStart`) }
            // onHookStart() { this.write(`onHookStart`) }
            // onHookEnd() { this.write(`onHookEnd`) }
            // onTestStart() { this.write(`onTestStart`) }
            // onTestPass() { this.write(`onTestPass`) }
            // onTestFail() { this.write(`onTestFail`) }
            // onTestSkip() { this.write(`onTestSkip`) }
            // onTestEnd() { this.write(`onTestEnd`) }
            // onSuiteEnd() { this.write(`onSuiteEnd`) }
            // onRunnerEnd() { this.write(`onRunnerEnd`) }