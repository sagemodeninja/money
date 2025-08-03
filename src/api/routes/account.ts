import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";
import { Hono } from "https://jsr.io/@hono/hono/4.8.5/src/hono.ts";
import { AccountModel } from "../models/account.ts";
import { ok, bad } from "@utils/http-response.ts";
import { jwt } from "@utils/auth/jwt.ts";

function route(db: DB) {
    const hono = new Hono();
    const model = new AccountModel(db);

    hono.use('*', jwt);

    hono.get('/', (c) => {
        return c.json(model.all());
    });
    
    hono.post('/', async (c) => {
        try {
            const body = await c.req.json();

            model.add({
                id: crypto.randomUUID(),
                ...body
            });

            model.save();

            return ok(c, 'Account successfully created.');
        } catch (error) {
            return bad(c, error);
        }
    });

    return hono;
}

export const account = { route };