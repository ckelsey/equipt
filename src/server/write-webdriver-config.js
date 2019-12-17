/* eslint-disable */

const glob = require(`fast-glob`)
const fs = require(`fs`)
const beautify = require('js-beautify').js
const GetPaths = require(`./get-paths`)

module.exports = (project, asExport) => {
    const paths = GetPaths(project)

    const renderPath = key => asExport ? `./${paths[key].split(paths.projectRoot)[0]}` : paths[key]

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
            .replace(`'{{babelModuleResolverRoot}}'`, `'${renderPath(`output`)}'`)
            .replace(`'{{babelConfigPath}}'`, `'${renderPath(`babelConfig`)}'`)
            .replace(`'{{babelExtendsPath}}'`, `'${renderPath(`babelConfig`)}'`)
        },`

    const globs = project.testsPath.split(`,`).map(s => s.trim()).filter(s => !!s)
    const globsReplace = JSON.stringify(glob.sync(
        globs,
        {
            absolute: !asExport,
            ignore: `**/node_modules/**`,
            onlyFiles: true,
            cwd: paths.projectRoot,
            followSymbolicLinks: false
        }
    ))

    const result = () => {
        /* eslint-disable */

        const Service = {
            beforeSession: ''
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
                        args: ['--enable-precise-memory-info', '--headless', '--disable-gpu']
                    }
                }
            ],
            framework: 'jasmine',
            jasmineNodeOpts: { defaultTimeoutInterval: 20000, grep: null, invertGrep: null },
            headless: true,
            bail: 0,
            waitforTimeout: 20000,
            connectionRetryTimeout: 20000,
            connectionRetryCount: 3,
            reporters: ['spec', 'json'],
            reporterOptions: { combined: true },
            services: [
                'chromedriver',
                [Service]
            ],
            specs: [],
            outputDir: '',
            cache: false
        };
    };

    const configStringLines = result.toString().split(`\n`)
    configStringLines.shift()
    configStringLines.pop()

    const config = configStringLines
        .join(`\n`)
        .replace(`beforeSession: ''`, beforeSessionReplace)
        .replace(`specs: [],`, `specs: ${globsReplace},`)
        .replace(`outputDir: ''`, `outputDir: '${renderPath(`outputTmp`)}'`)
        .split(`\n`).map(s => s.trim()).filter(s => !!s).join(` `)

    fs.writeFileSync(paths.webdriverConfig, beautify(config, { indent_size: 4, space_in_empty_paren: true }))
}


