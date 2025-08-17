type EventListeners = Record<string, Function[]>;

export class EventEmitter {
    private _listeners: EventListeners = {};

    public on(event: string, listener: Function) {
        if (!this._listeners[event])
            this._listeners[event] = [];
        this._listeners[event].push(listener);
    }

    public off(event: string, listener: Function) {
        if (this._listeners[event]) {
            const updated = this._listeners[event].filter(l => l !== listener);
            this._listeners[event] = updated;
        }
    }

    protected emit(event: string, ...args: any[]) {
        if (this._listeners[event]) {
            for (const listener of this._listeners[event]) {
                listener(...args);
            }
        }
    }
}
