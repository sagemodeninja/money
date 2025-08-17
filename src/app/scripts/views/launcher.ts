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
        this._createBtn.onclick = this.createVault.bind(this);
        this._openBtn.onclick = this.openVault.bind(this);
        this._closeBtn.onclick = () => window.app.sendCommand("close-launcher");
    }

    private async createVault() {
        const result = await FileHandler.showSaveDialog({
            title: "Create vault",
            filters: [{ name: "eMoney Vault", extensions: ["vault"] }],
            defaultPath: FileHandler.getRecentDirectory("vault"),
            buttonLabel: "Create",
            properties: ["createDirectory"]
        });

        if (result.canceled) return;

        const location = FileHandler.setRecentDirectory("vault", result.filePath);
        window.app.sendCommand("create-vault", location);
    }

    private async openVault() {
        const result = await FileHandler.showOpenDialog({
            title: "Open vault",
            filters: [{ name: "eMoney Vault", extensions: ["vault"] }],
            defaultPath: FileHandler.getRecentDirectory("vault"),
            properties: ["openFile"]
        });

        if (result.canceled) return;

        const location = FileHandler.setRecentDirectory("vault", result.filePaths[0]);
        window.app.sendCommand("open-vault", location);
    }
}

window.addEventListener("DOMContentLoaded", () => new LauncherView());
