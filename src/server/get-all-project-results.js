module.exports = project => new Promise((resolve, reject) => {
    const fs = require(`fs`)
    const path = require(`path`)
    const GetProjectRoot = require(`./get-project-root`)
    const GetResultsPath = require(`./get-results-path`)
    const root = GetProjectRoot(project)

    GetResultsPath(root, true, false)
        .then(res => {
            const results = []
            let i = res.length
            let stop = false

            if (!i) {
                return resolve(results)
            }

            while (!stop && i) {
                i = i - 1
                fs.readFile(path.join(GetResultsPath(root), res[i]), (err, content) => {
                    if (err) {
                        stop = true
                        return reject(err)
                    }

                    results.push(JSON.parse(content))

                    if (results.length === res.length) {
                        results.sort((a, b) => {
                            return a.time < b.time
                        })

                        return resolve(results)
                    }
                })
            }
        })

})