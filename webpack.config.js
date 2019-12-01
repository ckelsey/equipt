const exec = require(`child_process`).exec
const postPlugin = {
    apply: compiler => compiler.hooks.afterEmit.tap(
        `AfterEmitPlugin`,
        () => new Promise(resolve => {
            exec(`osascript -e 'display notification "Complete" with title "WEBPACK"'`, () => {
                return resolve()
            })
        })
    )
}

const exported = {
    mode: `production`,
    context: __dirname,
    entry: `${__dirname}/src/client/index.js`,
    resolve: { extensions: [`*`, `.js`, `.html`] },
    output: {
        globalObject: `self`,
        filename: `index.js`,
        path: `${__dirname}/client`,
    },
    optimization: {
        minimize: false
    },
    target: `electron-renderer`,
    plugins: [postPlugin],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: `babel-loader`,
                options: {
                    presets: [
                        [`@babel/env`, { modules: false }],
                    ]
                }
            }]
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: `html-loader`,
                    options: {
                        minimize: true
                    }
                }
            ]
        },
        {
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: [
                `css-loader`,
                `sass-loader`,
                `postcss-loader`,
            ],
        },
        ]
    }
}

module.exports = exported