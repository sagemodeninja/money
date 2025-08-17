import { contextBridge, ipcRenderer, OpenDialogOptions, OpenDialogReturnValue } from "electron";
import { FileIpcMessages } from "@/enums/ipc-messages";
import { SystemPathNames } from "@/enums/system-path-names";
import { KEY } from "@/utilities/file-handler";

contextBridge.exposeInMainWorld(KEY, {
    getSystemPath: async (name: SystemPathNames) =>
        ipcRenderer.invoke(FileIpcMessages.GET_SYSTEM_PATH, name),
    showOpenDialog: async (options: OpenDialogOptions) =>
        ipcRenderer.invoke(FileIpcMessages.SHOW_OPEN_DIALOG, options),
});

declare global {
    interface Window {
        [KEY]: {
            getSystemPath: (name: SystemPathNames) => Promise<string>,
            showOpenDialog: (options: OpenDialogOptions) => Promise<OpenDialogReturnValue>,
        }
    }
}
