export interface ResponsePayload<T> {
    state: boolean;
    content: string | T;
}