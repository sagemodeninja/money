import { OpenDialogOptions, SaveDialogOptions } from "electron";
import { SystemPathNames } from "@/enums/system-path-names";

export const KEY = "file-handler";

export type OpenDialogProperties = Array<
    | "openFile"
    | "openDirectory"
    | "multiSelections"
    | "showHiddenFiles"
    | "createDirectory"
    | "promptToCreate"
    | "noResolveAliases"
    | "treatPackageAsDirectory"
    | "dontAddToRecent"
>;

export class FileHandler {
    // Main Bridge
    public static async getSystemPath(name: SystemPathNames) {
        return window[KEY].getSystemPath(name);
    }
    
    public static async writeFile(path: string, content: string) {
        return window[KEY].writeFile(path, content)
    }

    public static async showOpenDialog(options: OpenDialogOptions) {
        return window[KEY].showOpenDialog(options);
    }

    public static async showSaveDialog(options: SaveDialogOptions) {
        return window[KEY].showSaveDialog(options);
    }
    
    // Renderer
    public static getRecentDirectory(id: string) {
        const key = ["recent-dir", id].join("-");
        return window.localStorage.getItem(key) ?? undefined;
    }

    public static setRecentDirectory(id: string, path: string) {
        const key = ["recent-dir", id].join("-");
        window.localStorage.setItem(key, path);
        return path;
    }
}
