const { app, BrowserWindow } = require('electron');


//创建窗口
const createWindow = () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true,   //允许渲染进程使用node.js
            contextIsolation: false  //允许渲染进程使用node.js
        },
    })
    win.loadURL(
        "http://localhost:3000/"
    );
}



app.whenReady().then(() => {
    createWindow()
})
