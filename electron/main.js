const { app, BrowserWindow } = require('electron')



const createWindow = () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,   //允许渲染进程使用node.js
            contextIsolation: false  //允许渲染进程使用node.js
        }
    })

    win.loadURL(
        "http://localhost:5173/"
    );

}


app.whenReady().then(() => {
  createWindow()
})
