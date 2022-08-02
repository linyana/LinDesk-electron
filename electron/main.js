const { app, BrowserWindow } = require('electron');

require("http").createServer(function (req, res) {
    res.end("Hello from server started by Electron app!");
}).listen(8080)

//创建窗口
const createWindow = () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true,   //允许渲染进程使用node.js
            contextIsolation: false,  //允许渲染进程使用node.js
            enableRemoteModule: true
        },
    })
    win.loadURL(
        // NODE_ENV === "development" ?
        "http://localhost:3000/"
        // `file://${path.join(__dirname, "../dist/index.html")}`
    );
}



app.whenReady().then(() => {
    createWindow()
})
