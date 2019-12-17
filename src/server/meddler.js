const fs = require(`fs`)
const path = require(`path`)
const ID = require(`../utils/id`)
const MEDDLERKEY = Symbol.for(`Equipt.Meddler`)
const globalSymbols = Object.getOwnPropertySymbols(global)
const hasMeddler = (globalSymbols.indexOf(MEDDLERKEY) > -1)
const dataPath = path.join(__dirname, `meddler-data.json`)
const outputPath = path.resolve(`meddler.json`)

const meddler = {
    save(data) {
        fs.writeFileSync(dataPath, JSON.stringify(data))
    },
    trigger(name, data) {
        const cbs = meddler.subscriptions[name]

        if (!cbs) { return }

        // I used an eval()...dies...
        Object.keys(meddler.subscriptions[name] || {}).forEach(key => eval(cbs[key])(data))
    },
    subscribe(name, cb) {
        let subscriptions = meddler.subscriptions

        if (!subscriptions[name]) {
            subscriptions[name] = {}
        }

        const id = ID()
        subscriptions[name][id] = cb.toString()
        meddler.save(subscriptions)

        return () => {
            subscriptions = meddler.subscriptions

            if (!subscriptions[name]) { return }

            subscriptions[name][id] = null
            delete subscriptions[name][id]
            meddler.save(subscriptions)
        }
    },
    init() {
        fs.writeFileSync(dataPath, `{}`)
        fs.writeFileSync(outputPath, `[]`)
    }
}

Object.defineProperty(meddler, `subscriptions`, {
    get: function () {
        return JSON.parse(fs.readFileSync(dataPath))
    }
})

if (!hasMeddler) { global[MEDDLERKEY] = meddler }

const singleton = {}

Object.defineProperty(singleton, `instance`, {
    get: function () {
        return global[MEDDLERKEY]
    }
})

Object.freeze(singleton)

module.exports = singleton