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

ipcRenderer.on(`appError`, (_event, data) => Server.trigger(`appError`, data))
ipcRenderer.on(`projectsUpdate`, (_event, data) => Server.trigger(`projectsUpdate`, data))
ipcRenderer.on(`projectUpdate`, (_event, data) => Server.trigger(`projectUpdate`, data))
ipcRenderer.on(`runnerUpdate`, (_event, data) => Server.trigger(`runnerUpdate`, data))
ipcRenderer.on(`runningTests`, (_event, data) => Server.trigger(`runningTests`, data))
ipcRenderer.on(`testResults`, (_event, data) => Server.trigger(`testResults`, data))

export default Server