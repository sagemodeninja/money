import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";
import { Hono } from "https://jsr.io/@hono/hono/4.8.5/src/hono.ts";
import { CreateDbRequest } from "@data/requests/create-db-request.ts";
import * as aes from "@utils/crypto/aes/index.ts";
import { jwt } from "@utils/auth/jwt.ts";
import { Model } from "@utils/_db/model.ts";
import { Account } from "@entities/account.ts";

function route(db: DB) {
    const debug = new Hono();

    debug.use('*', jwt);

    debug.post('/query', (c) => {
        const model = new Model<Account>();
        model.where(acc => acc.eq('id', '123').and(acc.ne('id', '124')));
        return c.json(model.all());
    });

    debug.post('/encrypt', async (c) => {
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

    debug.post('/decrypt', async (c) => {
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

    return debug;
}

export const debug = { route };