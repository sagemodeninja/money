import { app, ipcMain, dialog, OpenDialogOptions, SaveDialogOptions } from "electron";
import { writeFile } from "fs/promises";
import { FileIpcMessages, SystemPathNames } from "@/enums";

export class FileHandler {
    public static getSystemPath(name: SystemPathNames) {
        return app.getPath(name);
    }

    public static async writeFile(path: string, content: string) {
        return writeFile(path, content, "utf8");
    }

    public static async showOpenDialog(options: OpenDialogOptions) {
        return dialog.showOpenDialog(options);
    }

    public static async showSaveDialog(options: SaveDialogOptions) {
        return dialog.showSaveDialog(options);
    }
}

export class FileHandlerBridge {
    public static init() {
        ipcMain.handle(
            FileIpcMessages.GET_SYSTEM_PATH,
            async (_, name) => FileHandler.getSystemPath(name)
        );
        
        ipcMain.handle(
            FileIpcMessages.WRITE_FILE,
            async (_, path, content) => FileHandler.writeFile(path, content)
        );

        ipcMain.handle(
            FileIpcMessages.SHOW_OPEN_DIALOG,
            async (_, options) => FileHandler.showOpenDialog(options)
        );

        ipcMain.handle(
            FileIpcMessages.SHOW_SAVE_DIALOG,
            async (_, options) => FileHandler.showSaveDialog(options)
        );
    }
}