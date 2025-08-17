import * as path from "path";
import { app } from "electron";

export function getToolPath(name: string) {
    const basePath = app.isPackaged
        ? path.join(process.resourcesPath, "tools")
        : path.join(process.cwd(), "static", "tools");
    return path.join(basePath, name);
}
