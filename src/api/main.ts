import { Hono } from "hono";
import { parseArgs } from "@std/cli/parse-args";
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { vault, auth, account, wallet, debug } from "@routes/index.ts";

const args = parseArgs(Deno.args)

if (!args.vault)
    throw new Error('Vault path is required. Use --vault <path> to specify.');

const api = new Hono();
const db = new DB(args.vault);

api.route("/vault", vault.route(db));
api.route("/auth", auth.route(db));
api.route("/account", account.route(db));
api.route("/wallet", wallet.route(db));
api.route("/debug", debug.route(db));

Deno.serve({
    onListen: add => console.log(`Listening on http://localhost:${add.port}`),
}, api.fetch);
