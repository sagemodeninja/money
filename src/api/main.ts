import { Hono } from 'hono'
import { parseArgs } from "@std/cli/parse-args";
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { createDb } from "./utils/db.ts";
import { verify } from "./utils/password.ts";
import { CreateDbRequest } from "./data/requests/create-db-request.ts";

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

Deno.serve(app.fetch)
