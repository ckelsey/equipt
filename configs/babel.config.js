module.exports = {
    presets: [
        [`@babel/preset-env`, {
            useBuiltIns: `entry`,
            corejs: 3,
            targets: {
                browsers: [`last 3 versions`],
                "node": true
            }
        }]
    ]
}