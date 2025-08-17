import { spawn, ChildProcessWithoutNullStreams } from "child_process";
import { EventEmitter } from "@/utilities/event";
import { getToolPath } from "@/utilities/tools";
import log from "electron-log";

const SERVER_PATH = getToolPath("server");
const SERVER_STARTED_MESSAGE = "Listening on";

export class ServerService extends EventEmitter {
    private _isRunning: boolean;
    private _process: ChildProcessWithoutNullStreams;

    public start(vault: string) {
        if (this._isRunning)
            return;

        log.log("Starting server...");
        this.startServer(vault);
    }

    public stop() {
        if (!this._isRunning)
            return;

        log.log("Stopping server...");
        this._process.kill();
    }

    private startServer(vault: string) {
        this._process = spawn(
            SERVER_PATH,
            [`--vault=${vault}`],
        );
        this.observe();
    }

    private observe() {
        this._process.stdout.on("data", (data) => {
            if (!this._isRunning && data.toString().includes(SERVER_STARTED_MESSAGE)) {
                this._isRunning = true;
                log.log("Server has started.");
            }
        });

        this._process.stderr.on("data", (error) => log.error(error.toString()));
        this._process.on("error", (error) => log.error(error));

        this._process.on("close", (code) => {
            this._isRunning = false;
            log.log("Server exited with code", code);
        });
    }
}
