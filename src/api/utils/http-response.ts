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
 * Returns a failed response with a specific error message and status code.
 * @param context The HTTP context object.
 * @param error The error message to return.
 * @param status The HTTP status code (defaults to 500).
 * @returns A JSON response with the error.
 */
export function failed(context: Context, error: string, status: ContentfulStatusCode): Response {
    return context.json({
        success: false,
        error
    }, status ?? 500);
}

/**
 * Returns a bad request response with a specific error message.
 * @param context The HTTP context object.
 * @param error The error message to return.
 * @returns A JSON response with the error.
 */
export function bad(context: Context, error: string) {
    return failed(context, error, 400);
}

/**
 * Returns an unauthorized response with a specific error message.
 * @param context The HTTP context object.
 * @param error The error message to return.
 * @returns A JSON response with the error.
 */
export function unauthorized(context: Context, error: string) {
    return failed(context, error, 401);
}
