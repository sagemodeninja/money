export interface SuccessResult<T> {
    success: true;
    data?: T;
}

export interface ErrorResult<E> {
    success: false;
    error: E;
}

export type Result<T, E> = SuccessResult<T> | ErrorResult<E>;