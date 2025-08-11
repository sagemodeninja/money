import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";
import { Hono } from "hono";
import { WalletModel } from "@models/wallet.ts";
import { ok, bad, failed } from "@utils/http-response.ts";
import { jwt } from "@utils/auth/jwt.ts";

function route(db: DB) {
    const hono = new Hono();
    const model = new WalletModel(db);

    hono.use("*", jwt);

    hono.get("/", (c) => {
        model.where((a) => a.eq("active", true));
        return c.json(model.all());
    });

    hono.post("/", async (c) => {
        try {
            const body = await c.req.json();

            model.add({
                id: crypto.randomUUID(),
                ...body
            });

            model.save();

            return ok(c, "Wallet successfully created.");
        } catch (error) {
            return bad(c, error);
        }
    });

    hono.patch("/:id", async (c) => {
        try {
            const id = c.req.param("id");
            const wallet = model.where(a => a.eq("id", id).and(a.eq("active", true))).first();

            if (!wallet)
                return failed(c, `Wallet with ID ${id} not found.`, 400);

            const updated = await c.req.json();
            wallet.name = updated.name;

            model.save();
            return ok(c, "Wallet successfully updated.");
        } catch (error) {
            return bad(c, error);
        }
    });

    hono.delete("/:id", (c) => {
        try {
            const id = c.req.param("id");
            const wallet = model.where(a => a.eq("id", id).and(a.eq("active", true))).first();

            if (!wallet)
                return failed(c, `Wallet with ID ${id} not found.`, 400);

            wallet.active = false;
            model.save();

            return ok(c, "Wallet successfully deleted.");
        } catch (error) {
            return bad(c, error);
        }
    });

    return hono;
}

export const wallet = { route };