import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";
import { Hono } from "https://jsr.io/@hono/hono/4.8.5/src/hono.ts";
import { migrate } from "@utils/db/migration.ts";
import * as response from "@utils/http-response.ts";
import { CreateDbRequest } from "@data/requests/create-db-request.ts";

function route(db: DB) {
    const utils = new Hono();

    utils.post('/db/create', async c => {
        const request = await c.req.json() as CreateDbRequest;
        const result = await migrate(db, request);
        return response.fromResult(c, result);
    });

    return utils;
}

export const utils = { route };