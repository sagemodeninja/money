import { Hono } from "hono";
import { parseArgs } from "@std/cli/parse-args";
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { utils, auth, account, debug } from "@routes/index.ts";

const args = parseArgs(Deno.args)

if (!args.db)
    throw new Error('Database path is required. Use --db <path> to specify.');

const api = new Hono();
const db = new DB(args.db);

api.route('/utils', utils.route(db));
api.route('/auth', auth.route(db));
api.route('/account', account.route(db));
api.route('/debug', debug.route(db));

Deno.serve(api.fetch);
