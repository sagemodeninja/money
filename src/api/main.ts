import { Hono } from "hono";
import { JwtVariables } from "hono/jwt";
import { parseArgs } from "@std/cli/parse-args";
import { DB } from "https://deno.land/x/sqlite/mod.ts";

import { createDb } from "@utils/db.ts";
import * as password from "@utils/crypto/password.ts";
import * as aes from "@utils/crypto/aes/index.ts";
import { jwt, AuthSession } from "@utils/auth/index.ts";
import * as response from "@utils/http-response.ts";

import { CreateDbRequest, LoginRequest } from "./data/requests/index.ts";

const app = new Hono<{ Variables: JwtVariables }>()

const args = parseArgs(Deno.args)

if (!args.db)
    throw new Error('Database path is required. Use --db <path> to specify.')

const db = new DB(args.db)

app.use('/debug/*', jwt);

app.post('/db/create', async c => {
    const request = await c.req.json() as CreateDbRequest;
    const result = await createDb(db, request);
    return response.fromResult(c, result);
})

app.post('/login', async (c) => {
    const request = await c.req.json() as LoginRequest;
    const [first] = db.query("SELECT value FROM config WHERE key = 'auth_password'");
    const verify = await password.verify(request.password, first[0] as Uint8Array);

    if (!verify.success)
        return response.unauthorized(c, "Password is incorrect.");

    const session = await AuthSession.start();
    return response.fromResult(c, session);
})

app.post('/debug/encrypt', async (c) => {
    try {
        const body = await c.req.json() as CreateDbRequest & { data: string };
        const [first] = db.query("SELECT value FROM config WHERE key = 'master_enc_key'");

        const wrapped = first[0] as Uint8Array;
        const unwrapped = await aes.unwrapKeyWithPassword(wrapped, body.password, ["encrypt"]);
        const plaintext = new TextEncoder().encode(body.data);
        const encrypted = await aes.encrypt(plaintext, unwrapped);

        return c.json({
            success: true,
            data: btoa(String.fromCharCode(...new Uint8Array(encrypted)))
        });
    } catch (error) {
        return c.json({
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }, 500);
    }
});

app.post('/debug/decrypt', async (c) => {
    try {
        const body = await c.req.json() as CreateDbRequest & { data: string };
        const [first] = db.query("SELECT value FROM config WHERE key = 'master_enc_key'");

        const wrapped = first[0] as Uint8Array;
        const unwrapped = await aes.unwrapKeyWithPassword(wrapped, body.password, ["decrypt"]);
        const encrypted = Uint8Array.from(atob(body.data), c => c.charCodeAt(0));
        const plaintext = await aes.decrypt(encrypted, unwrapped);

        return c.json({
            success: true,
            data: new TextDecoder().decode(plaintext)
        });
    } catch (error) {
        return c.json({
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }, 500);
    }
});

Deno.serve(app.fetch)
