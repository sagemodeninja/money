import { app, BrowserWindow } from "electron";
import { MainApplication } from "./app";

const application = new MainApplication();

app.on("ready", () => application.start());

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0)
        application.start();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        application.stop();
        app.quit();
    }
});
