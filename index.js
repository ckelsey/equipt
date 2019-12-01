const electron = require(`electron`)
const app = electron.app
const BrowserWindow = electron.BrowserWindow
require(`./src/server/projects`)

let win

function createWindow() {
    if (win !== undefined && win !== null) { return }

    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            allowEval: false
        }
    })

    win.maximize()
    win.loadFile(`index.html`)
    win.webContents.openDevTools()
    win.on(`closed`, () => win = null)
}

app.on(`ready`, createWindow)
app.on(`window-all-closed`, () => process.platform !== `darwin` ? app.quit() : undefined)
app.on(`activate`, createWindow)
