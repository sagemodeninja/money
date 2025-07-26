import { Hono } from "hono";
import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";
import * as password from "@utils/crypto/password.ts";
import * as response from "@utils/http-response.ts";
import { AuthSession } from "@utils/auth/session.ts";
import { LoginRequest } from "../data/requests/login-request.ts";

const route = (db: DB) => {
    const auth = new Hono();

    auth.post('/login', async (c) => {
        const request = await c.req.json() as LoginRequest;
        const [first] = db.query("SELECT value FROM config WHERE key = 'auth_password'");
        const verify = await password.verify(request.password, first[0] as Uint8Array);

        if (!verify.success)
            return response.unauthorized(c, "Password is incorrect.");

        const session = await AuthSession.start();
        return response.fromResult(c, session);
    })

    return auth;
}

export const auth = { route };