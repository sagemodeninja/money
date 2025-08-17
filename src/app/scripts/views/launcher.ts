import "./launcher.scss";
import "@/components";

import { LauncherButton } from "@/components";
import { FileHandler } from "@/utilities/file-handler";

class LauncherView {
    private readonly _createBtn: LauncherButton;
    private readonly _openBtn: LauncherButton;
    private readonly _closeBtn: HTMLButtonElement;

    constructor() {
        this._createBtn = document.getElementById("create-btn") as LauncherButton;
        this._openBtn = document.getElementById("open-btn") as LauncherButton;
        this._closeBtn = document.getElementById("close-btn") as HTMLButtonElement;
        this.addEventListeners();
    }

    private addEventListeners() {
        this._createBtn.onclick = () => window.app.sendCommand("open-create-wizard");
        this._openBtn.onclick = this.openFile.bind(this);
        this._closeBtn.onclick = () => window.app.sendCommand("close-launcher");
    }

    private async openFile() {
        const result = await FileHandler.showOpenDialog({
            title: "Open File",
            message: "Select the file to open.",
            defaultPath: FileHandler.getOpenDialogRecent("save-location") ?? undefined,
            properties: ["openFile"]
        });

        if (result.canceled) return;

        const location = FileHandler.setOpenDialogRecent("save-location", result.filePaths[0]);
        window.app.sendCommand("open-file", location);
    }
}

window.addEventListener("DOMContentLoaded", () => new LauncherView());
