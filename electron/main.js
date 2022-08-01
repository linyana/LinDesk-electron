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
        "http://localhost:5173/"
    );
}

// async function createWindow() {
//     win = new BrowserWindow({
//         webPreferences: {
//             nodeIntegration: false,
//             contextIsolation: true,
//             preload: path.resolve(path.join(__dirname, '../public/preload.ts')),
//         },
//     });
// }

// const { contextBridge, ipcRenderer } = require("electron");
// contextBridge.exposeInMainWorld("darkMode", {
//     a: () => { alert(2);}
// });


app.whenReady().then(() => {
    createWindow()
})
