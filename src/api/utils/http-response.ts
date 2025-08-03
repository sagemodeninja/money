import { Context } from "hono";
import { Result } from "@utils/result.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";

export function fromResult<T>(c: Context, result: Result<T>): Response {
    if (result.success) {
        return c.json(result);
    } else {
        return c.json({
            success: false,
            error: result.error.message
        }, 400);
    }
}

/**
 * Returns a successful response with the provided data.
 * @param context The HTTP context object.
 * @param data The data to return in the response.
 * @returns A JSON response with the data.
 */
export function ok<T>(context: Context, data: T): Response {
    return context.json({
        success: true,
        data
    });
}

/**
 * Returns a failed response with a specific error message and status code.
 * @param context The HTTP context object.
 * @param error The error message to return.
 * @param status The HTTP status code (defaults to 500).
 * @returns A JSON response with the error.
 */
export function failed<E>(context: Context, error: E, status: ContentfulStatusCode): Response {
    const message = error instanceof Error ? error.message : String(error);
    return context.json({
        success: false,
        error: message
    }, status ?? 500);
}

/**
 * Returns a bad request response with a specific error message.
 * @param context The HTTP context object.
 * @param error The error message to return.
 * @returns A JSON response with the error.
 */
export function bad<E>(context: Context, error: E) {
    return failed(context, error, 400);
}

/**
 * Returns an unauthorized response with a specific error message.
 * @param context The HTTP context object.
 * @param error The error message to return.
 * @returns A JSON response with the error.
 */
export function unauthorized<E>(context: Context, error: E) {
    return failed(context, error, 401);
}
