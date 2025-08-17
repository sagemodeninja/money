import { contextBridge, ipcRenderer } from "electron";
import { AppIpcMessages } from "@/enums/ipc-messages";

const KEY = "app";

contextBridge.exposeInMainWorld(KEY, {
    sendCommand: (command: string, ...args: any[]) => {
        ipcRenderer.send(AppIpcMessages.M_COMMAND, command, args)
    },
})

declare global {
    interface Window {
        [KEY]: {
            sendCommand: (command: string, ...args: any[]) => void,
        }
    }
}
