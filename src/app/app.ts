import { app, ipcMain } from "electron";
import { AppIpcMessages } from "@/enums/ipc-messages";
import { MenuManager } from "@/utilities/menu";
import { WindowManager } from "@/utilities/window";
import { ServerService } from "@/utilities/server";
import { FileHandlerBridge } from "@/utilities/file-handler.main";

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
        this._server.start();
    }
    
    public stop() {
        this._server.stop();
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
            case "open-create-wizard":
                this._windows.show("create-wizard");
                this._windows.hide("launcher");
                break;
            case "close-launcher":
                this._windows.close("launcher");
                break;
            case "quit":
                app.quit();
                break;
        }
    }
}
