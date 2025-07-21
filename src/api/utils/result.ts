// Structure
export interface SuccessResult<T> {
    success: true;
    data?: T;
}

export interface ErrorResult {
    success: false;
    error: Error;
}

// Types
export type EmptyResult = SuccessResult<null> | ErrorResult;

export type Result<T> = SuccessResult<T> | ErrorResult;

// Utility
export function success<T>(data?: T): SuccessResult<T> {
    return { success: true, data };
}

export function failed(error: unknown): ErrorResult {
    return {
        success: false,
        error: error instanceof Error ? error : new Error(String(error))
    };
}
