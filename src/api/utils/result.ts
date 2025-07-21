export interface SuccessResult<T> {
    success: true;
    data?: T;
}

export interface ErrorResult<E> {
    success: false;
    error: E;
}

// Union types

export type EmptyResult<E> = SuccessResult<null> | ErrorResult<E>;

export type Result<T, E> = SuccessResult<T> | ErrorResult<E>;

// Utility functions

export function success<T>(data?: T): SuccessResult<T> {
    return { success: true, data };
}

export function failed(error: unknown): ErrorResult<Error> {
    return {
        success: false,
        error: error instanceof Error ? error : new Error(String(error))
    };
}
