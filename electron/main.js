const { app, BrowserWindow } = require('electron')



const createWindow = () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadURL(
        "http://localhost:5173/"
    );

}

app.whenReady().then(() => {
  createWindow()
})
