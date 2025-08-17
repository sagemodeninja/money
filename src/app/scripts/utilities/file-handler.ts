import { OpenDialogOptions } from "electron";
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

    public static async showOpenDialog(options: OpenDialogOptions) {
        return window[KEY].showOpenDialog(options);
    }
    
    // Renderer
    public static getOpenDialogRecent(id: string) {
        const key = ["open-dialog", id].join("-");
        return window.localStorage.getItem(key);
    }

    public static setOpenDialogRecent(id: string, path: string) {
        const key = ["open-dialog", id].join("-");
        window.localStorage.setItem(key, path);
        return path;
    }
}
