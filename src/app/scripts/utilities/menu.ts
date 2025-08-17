import { app, shell, Menu, MenuItem, MenuItemConstructorOptions } from "electron";
import { EventEmitter } from "@/utilities/event";
import { toSafeSymbol } from "@/utilities/string";

export class MenuManager extends EventEmitter {
    public init(): void {
        const template = this.buildTemplate();
        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }

    public toggle(states: { [id: string]: boolean }): void {
        const menu = Menu.getApplicationMenu();

        if (!menu) return;

        for (const [id, state] of Object.entries(states)) {
            const submenu = menu.getMenuItemById(id);
            if (!submenu) return;
            submenu.enabled = state;
        }
    }

    private buildTemplate(): MenuItemConstructorOptions[] {
        let options: MenuItemConstructorOptions[] = [];

        if (process.platform === 'darwin') {
            const { name } = app;
            options.push({
                label: name,
                submenu: [
                    {
                        label: `About ${name}`,
                        role: 'about',
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Services',
                        role: 'services',
                        submenu: []
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Hide ' + name,
                        accelerator: 'Command+H',
                        role: 'hide'
                    },
                    {
                        label: 'Hide Others',
                        accelerator: 'Command+Shift+H',
                        role: 'hideOthers'
                    },
                    {
                        label: 'Show All',
                        role: 'unhide'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        id: 'quit',
                        label: 'Quit',
                        accelerator: 'Command+Q',
                        click: this.handleClick.bind(this),
                    },
                ]
            });
        }

        options.push({
            label: 'File',
            submenu: [
                {
                    id: 'save-project',
                    label: 'Save',
                    accelerator: 'Command+S',
                    click: this.handleClick.bind(this),
                    enabled: false
                },
            ]
        });

        options.push({
            label: 'Edit',
            submenu: [
                {
                    label: 'Cut',
                    accelerator: 'CmdOrCtrl+X',
                    role: 'cut'
                },
                {
                    label: 'Copy',
                    accelerator: 'CmdOrCtrl+C',
                    role: 'copy'
                },
                {
                    label: 'Paste',
                    accelerator: 'CmdOrCtrl+V',
                    role: 'paste'
                },
                {
                    label: 'Select All',
                    accelerator: 'CmdOrCtrl+A',
                    role: 'selectAll'
                },
            ]
        });

        const viewMenus: MenuItemConstructorOptions[] = [
            {
                label: 'Toggle Full Screen',
                accelerator: 'F11',
                role: 'togglefullscreen'
            },
        ];

        if (process.env.NODE_ENV === 'development') {
            viewMenus.push({
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                role: 'reload'
            });
            viewMenus.push({
                label: 'Toggle Developer Tools',
                accelerator: 'Alt+CmdOrCtrl+I',
                role: 'toggleDevTools'
            });
        }

        options.push({
            label: 'View',
            submenu: viewMenus
        });

        options.push({
            label: 'Help',
            role: 'help',
            submenu: [
                {
                    label: 'Learn More',
                    click: function() { shell.openExternal('http://electron.atom.io') }
                },
            ]
        });

        return options;
    }

    private handleClick(item: MenuItem) {
        const id = item.id ?? item.role ?? toSafeSymbol(item.label);
        this.emit('menu', id);
    }
}
