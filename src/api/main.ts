import { Hono } from 'hono'
import { parseArgs } from "@std/cli/parse-args";
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { createDb } from "@utils/db.ts";
import { deriveKeyWithSalt, verify } from "@utils/crypto/password.ts";
import { CreateDbRequest } from "./data/requests/create-db-request.ts";
import { unpack } from "@utils/byte.ts";
import { importKey, unwrapKey } from "@utils/crypto/aes/key.ts";
import { decrypt, encrypt } from "@utils/crypto/aes/index.ts";

const app = new Hono()

const args = parseArgs(Deno.args)

if (!args.db)
    throw new Error('Database path is required. Use --db <path> to specify.')

const db = new DB(args.db)

app.post('/db/create', async c => {
    const body = await c.req.json() as CreateDbRequest;
    const result = await createDb(db, body);
    return result.success
        ? c.json(result)
        : c.json({
            success: false,
            error: result.error.message
        }, 500);
})

app.post('/debug', async (c) => {
    const body = await c.req.json() as CreateDbRequest;
    const [first] = db.query("SELECT value FROM config WHERE key = 'auth_password'");
    const result = await verify(body.password, first[0] as Uint8Array);
    return result.success
        ? c.json(result)
        : c.json({
            success: false,
            error: result.error.message
        }, 500);
});

app.post('/debug/encrypt', async (c) => {
    try {
        const body = await c.req.json() as CreateDbRequest & { data: string };
        const [first] = db.query("SELECT value FROM config WHERE key = 'master_enc_key'");

        const storedWrappedMasterKey = first[0] as Uint8Array;
        const [salt, ...wrappedKey] = unpack(storedWrappedMasterKey);
        const derive = await deriveKeyWithSalt(body.password, salt);

        if (!derive.success)
            throw derive.error;

        const wrappingKey = await importKey(derive.data!.key, ["unwrapKey"]);
        const unwrapped = await unwrapKey(wrappedKey, wrappingKey, ["encrypt"]);
        const plaintext = new TextEncoder().encode(body.data);
        const encrypted = await encrypt(plaintext, unwrapped);

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

        const storedWrappedMasterKey = first[0] as Uint8Array;
        const [salt, ...wrappedKey] = unpack(storedWrappedMasterKey);
        const derive = await deriveKeyWithSalt(body.password, salt);

        if (!derive.success)
            throw derive.error;

        const wrappingKey = await importKey(derive.data!.key, ["unwrapKey"]);
        const unwrapped = await unwrapKey(wrappedKey, wrappingKey, ["decrypt"]);
        const encrypted = Uint8Array.from(atob(body.data), c => c.charCodeAt(0));
        const plaintext = await decrypt(encrypted, unwrapped);

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
