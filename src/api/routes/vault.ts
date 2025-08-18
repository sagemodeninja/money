import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";
import { Hono } from "hono";
import { InitVaultRequest } from "@data/requests/index.ts";
import { migrate } from "@utils/db/migration.ts";
import * as response from "@utils/http-response.ts";

function route(db: DB) {
    const hono = new Hono();

    hono.post("/init", async c => {
        const request = await c.req.json() as InitVaultRequest;

        // Migrate the database.
        const result = await migrate(db, request);

        return result.success
            ? response.ok(c, "Vault successfully initialized.")
            : response.fromResult(c, result);
    });

    return hono;
}

export const vault = { route };
