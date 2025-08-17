import * as path from "path";
import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";
import windows from "@static/json/windows.json";

export class WindowManager {
    private _windows: Map<string, BrowserWindow> = new Map();

    public get(id: string): BrowserWindow {
        const window = this._windows.get(id);

        if (!window) 
            throw new Error(`Window with id ${id} does not exist.`);

        return window;
    }

    public show(id: string, query: Record<string, any> = {}): BrowserWindow {
        const window = this.getOrCreate(id);
        window.show();

        const file = path.join(__dirname, 'renderer/views', `${id}.html`);
        window.loadFile(file, { query });

        return window;
    }

    public hide(id: string) {
        const window = this.get(id);
        window.hide();
    }
    
    public close(id: string) {
        const window = this.get(id);
        window.close();
        this._windows.delete(id);
    }

    private getOrCreate(id: string) {
        return this._windows.get(id) ?? this.create(id);
    }

    private create(id: string) {
        const window = new BrowserWindow({
            vibrancy: 'fullscreen-ui',
            frame: false,
            ...this.getOptions(id)
        });
        this._windows.set(id, window);
        return window;
    }

    private getOptions(id: string): BrowserWindowConstructorOptions {
        const window = windows.find((w: any) => w.id === id);

        if (!window)
            throw new Error(`Window with id ${id} does not exist.`);

        const { parent, preload, ...options } = window;

        if (parent) {
            const parentWindow = this.get(parent);
            options.parent = parentWindow;
            options.modal = true;
        }

        if (preload) {
            options.webPreferences = {
                preload: path.join(__dirname, 'preloaders', preload)
            };
        }

        return options;
    }
}