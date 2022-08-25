import {app, ipcMain, BrowserWindow} from "electron"
import * as path from "path";

app.on("ready", createWindow)

let mainWindow : BrowserWindow;

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, "preload.js")
        }
    });

    mainWindow.loadFile("./index.html");
    mainWindow.webContents.openDevTools();
    mainWindow.on("ready-to-show", () => mainWindow.show())
}