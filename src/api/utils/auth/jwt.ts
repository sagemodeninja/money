import { Context, Next } from "hono";
import { decode, verify } from "hono/jwt";
import { AuthSession } from "@utils/auth/session.ts";
import { unauthorized } from "@utils/http-response.ts";

export const jwt = async (c: Context, next: Next) => {
    try {
        const auth = c.req.header('Authorization');
        if (!auth || !auth.startsWith('Bearer '))
            throw new Error("Authorization header is missing or invalid.");

        const token = auth.slice(7);
        const { payload } = decode(token);

        const sid = payload.sid as string;
        if (!sid)
            throw new Error("Session ID is missing in the token.");

        const secret = AuthSession.getSecret(sid);
        if (!secret)
            throw new Error("Invalid session ID.");

        const verified = await verify(token, secret, "PS256");
        c.set('jwtPayload', verified);

        await next();
    } catch(error) {
        const message = error instanceof Error ? error.message : String(error);
        return unauthorized(c, message);
    }
};
