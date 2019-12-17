const fs = require(`fs`)

module.exports = files => files.reduce((result, current) => {
    result = result + (fs.readFileSync(current).toString().match(/\sit\(/gm) || []).length
    return result
}, 0)