export interface SuccessResult<T> {
    success: true;
    data?: T;
}

export interface ErrorResult<E> {
    success: false;
    error: E;
}

export type Result<T, E> = SuccessResult<T> | ErrorResult<E>;

// Utility functions to create results

export function success<T>(data?: T): SuccessResult<T> {
    return { success: true, data };
}

export function fromError(error: unknown): ErrorResult<string> {
    return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
    };
}
