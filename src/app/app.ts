import { app, ipcMain } from "electron";
import { AppIpcMessages } from "@/enums/ipc-messages";
import { MenuManager } from "@/utilities/menu";
import { WindowManager } from "@/utilities/window";
import { ServerService } from "@/utilities/server";
import { FileHandler, FileHandlerBridge } from "@/utilities/file-handler.main";

export class MainApplication {
    private readonly _menu: MenuManager;
    private readonly _windows: WindowManager;
    private readonly _server: ServerService;

    constructor() {
        this._menu = new MenuManager();
        this._windows = new WindowManager();
        this._server = new ServerService();

        this._menu.init();
        this.addEventListeners();
    }

    public start() {
        this._windows.show("launcher");
    }

    public stop() {
        this._windows.close("launcher");
    }

    private addEventListeners() {
        this._menu.on("menu", this.handleCommands.bind(this));
        ipcMain.on(
            AppIpcMessages.M_COMMAND,
            async (_, command: string, args: any[]) => this.handleCommands(command, ...args)
        );
        FileHandlerBridge.init();
    }

    private async handleCommands(command: string, ...args: any[]) {
        switch (command) {
            case "create-vault":
                await this.createVault(args[0]);
                break;
            case "open-vault":
                this.openVault(args[0]);
                break;
            case "close-launcher":
                this._windows.close("launcher");
                break;
            case "quit":
                app.quit();
                break;
        }
    }

    private async createVault(vault: string) {
        await FileHandler.writeFile(vault, "");
        this.openVault(vault);
    }

    private openVault(vault: string) {
        this._server.start(vault);

        const window = this._windows.show("vault");
        window.on("close", this.closeVault.bind(this));

        this._windows.hide("launcher");
    }

    private closeVault() {
        this._server.stop();
        this._windows.show("launcher");
    }
}
