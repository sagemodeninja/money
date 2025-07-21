import { Hono } from 'hono'
import { parseArgs } from "@std/cli/parse-args";
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { createDb } from "./utils/db.ts";

const app = new Hono()

const args = parseArgs(Deno.args)

if (!args.db)
    throw new Error('Database path is required. Use --db <path> to specify it.')

const db = new DB(args.db)

app.post('/db/create', (c) => {
    const result = createDb(db);
    return result.success
        ? c.json(result)
        : c.json(result, 500);
})

app.get('/debug', c => {
    let filePassword: string | undefined = undefined;

    try {
        const row = db.query("SELECT value FROM config WHERE key = 'file_password'");
        for (const [value] of row) {
            // If value is a Uint8Array, convert to string
            if (value instanceof Uint8Array) {
                filePassword = new TextDecoder().decode(value);
            } else {
                filePassword = String(value);
            }
        }
    } catch (e) {
        filePassword = `Error: ${e}`;
    }

    return c.json({
        message: 'Debug endpoint',
        filePassword
    });
})

Deno.serve(app.fetch)
