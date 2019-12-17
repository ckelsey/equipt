const fs = require(`fs`)
const path = require(`path`)
const GetPaths = require(`./get-paths`)

const GetResults = resultsPath => new Promise((resolve, reject) => {
    try {
        if (!fs.existsSync(resultsPath)) { return resolve([]) }
    } catch (error) {
        return resolve([])
    }

    fs.readdir(resultsPath, (err, files) => err ? reject(err) : resolve(files))
})

module.exports = project => new Promise((resolve, reject) => {

    const paths = GetPaths(project)

    GetResults(paths.outputResults)
        .then(res => {
            const results = []
            let i = res.length
            let stop = false

            if (!i) { return resolve(results) }

            while (!stop && i) {
                i = i - 1
                fs.readFile(path.join(paths.outputResults, res[i]), (err, content) => {
                    if (stop) { return }

                    if (err) {
                        stop = true
                        return reject(err)
                    }

                    results.push(JSON.parse(content))

                    if (results.length === res.length) {
                        return resolve(results)
                    }
                })
            }
        })

})