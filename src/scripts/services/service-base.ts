import axios, {AxiosInstance} from 'axios';

export class ServiceBase {
    protected readonly _connection: AxiosInstance;

    constructor() {
        this._connection = axios.create();
    }
    
    endpoint(path?: string): string {
        const baseURL = (this as any)._baseURL;
        return `${baseURL}/${path}`;
    }
}

export function service(baseURL: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            _baseURL = baseURL;
        }
    }
}