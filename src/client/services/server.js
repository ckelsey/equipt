import { ipcRenderer } from 'electron'

const Server = {
    send(name, data) {
        return ipcRenderer.sendSync(name, data)
    },
    sendAsync(name, data) {
        return ipcRenderer.send(name, data)
    },
    subscriptions: {},
    subscribe(event, cb) {
        if (!Server.subscriptions[event]) {
            Server.subscriptions[event] = []
        }

        Server.subscriptions[event].push(cb)
    },

    trigger(event, data) {
        if (!Server.subscriptions[event]) { return }
        Server.subscriptions[event].forEach(cb => cb(data))
    }
}

ipcRenderer.on(`testResults`, (_event, data) => Server.trigger(`testResults`, data))
ipcRenderer.on(`savingProjectProgress`, (_event, data) => Server.trigger(`savingProjectProgress`, data))
ipcRenderer.on(`testProgress`, (_event, data) => Server.trigger(`testProgress`, data))

export default Server