import { Hono } from 'hono'
import { parseArgs } from "@std/cli/parse-args";
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { createDb } from "./utils/db.ts";
import { deriveKeyWithSalt, verify } from "./utils/crypto/password.ts";
import { CreateDbRequest } from "./data/requests/create-db-request.ts";
import { unpack } from "./utils/byte.ts";
import { importKey } from "./utils/crypto/aes/key.ts";

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
        const [salt, iv, wrappedKey] = unpack(storedWrappedMasterKey);
        const derive = await deriveKeyWithSalt(body.password, salt);

        if (!derive.success)
            throw derive.error;

        const { key } = derive.data!;
        const wrappingKey = await importKey(key, ["unwrapKey"]);

        const unwrapped = await crypto.subtle.unwrapKey(
            "raw",
            wrappedKey,
            wrappingKey,
            { name: "AES-GCM", iv },
            { name: "AES-GCM" },
            true,
            ["encrypt"]
        );

        const encrypted = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv },
            unwrapped,
            new TextEncoder().encode(body.data),
        );

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
        const [salt, iv, wrappedKey] = unpack(storedWrappedMasterKey);
        const derive = await deriveKeyWithSalt(body.password, salt);

        if (!derive.success)
            throw derive.error;

        const { key } = derive.data!;
        const wrappingKey = await importKey(key, ["unwrapKey"]);

        const unwrapped = await crypto.subtle.unwrapKey(
            "raw",
            wrappedKey,
            wrappingKey,
            { name: "AES-GCM", iv },
            { name: "AES-GCM" },
            true,
            ["decrypt"]
        );

        const encryptedBytes = Uint8Array.from(atob(body.data), c => c.charCodeAt(0));
        const decrypted = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv },
            unwrapped,
            encryptedBytes,
        );

        return c.json({
            success: true,
            data: new TextDecoder().decode(decrypted)
        });
    } catch (error) {
        return c.json({
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }, 500);
    }
});

Deno.serve(app.fetch)
