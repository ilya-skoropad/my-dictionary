import {ipcRenderer, contextBridge} from "electron"
import {userInfo} from "os"

contextBridge.exposeInMainWorld("api", {
    GetUserName: userInfo().username
});