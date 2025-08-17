import { contextBridge, ipcRenderer } from "electron";
import { OpenDialogOptions, OpenDialogReturnValue, SaveDialogOptions, SaveDialogReturnValue } from "electron";
import { FileIpcMessages } from "@/enums/ipc-messages";
import { SystemPathNames } from "@/enums/system-path-names";
import { KEY } from "@/utilities/file-handler";

contextBridge.exposeInMainWorld(KEY, {
    getSystemPath: async (name: SystemPathNames) =>
        ipcRenderer.invoke(FileIpcMessages.GET_SYSTEM_PATH, name),

    writeFile: async (path: string, content: string) =>
        ipcRenderer.invoke(FileIpcMessages.WRITE_FILE, path, content),

    showOpenDialog: async (options: OpenDialogOptions) =>
        ipcRenderer.invoke(FileIpcMessages.SHOW_OPEN_DIALOG, options),

    showSaveDialog: async (options: SaveDialogOptions) =>
        ipcRenderer.invoke(FileIpcMessages.SHOW_SAVE_DIALOG, options),
});

declare global {
    interface Window {
        [KEY]: {
            getSystemPath: (name: SystemPathNames) => Promise<string>,
            writeFile: (path: string, content: string) => Promise<void>,
            showOpenDialog: (options: OpenDialogOptions) => Promise<OpenDialogReturnValue>,
            showSaveDialog: (options: SaveDialogOptions) => Promise<SaveDialogReturnValue>,
        }
    }
}
