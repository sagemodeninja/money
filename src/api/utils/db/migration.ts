import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { InitVaultRequest } from "../../data/requests/init-vault-request.ts";
import { success, failed, EmptyResult, ErrorResult } from "@utils/result.ts";
import { hash } from "@utils/crypto/password.ts";
import { generateKey, wrapKeyWithPassword } from "@utils/crypto/aes/key.ts";

function scaffoldDatabase(db: DB): EmptyResult {
    try {
        db.execute(`
            CREATE TABLE IF NOT EXISTS config (
                key VARCHAR(50) PRIMARY KEY,
                value BLOB
            );
        `);

        db.execute(`
            CREATE TABLE IF NOT EXISTS account (
                id VARCHAR(36) PRIMARY KEY,
                name VARCHAR(64),
                active INTEGER CHECK(active IN (0, 1)) DEFAULT 1
            );
        `);

        return success();
    } catch (error) {
        return failed(error);
    }
}

async function seedDatabase(db: DB, password: string): Promise<EmptyResult> {
    try {
        const hashed = await hash(password);

        if (!hashed.success)
            return hashed as ErrorResult;

        db.query(
            `INSERT OR IGNORE INTO config (key, value) VALUES (?, ?)`,
            ["auth_password", hashed.data]
        );

        const master = await generateKey();
        const wrapped = await wrapKeyWithPassword(master, password);

        db.query(
            `INSERT OR IGNORE INTO config (key, value) VALUES (?, ?)`,
            ["master_enc_key", wrapped]
        );

        return success();
    } catch (error) {
        return failed(error);
    }
}

export async function migrate(db: DB, request: InitVaultRequest): Promise<EmptyResult> {
    const scaffold = scaffoldDatabase(db);
    if (!scaffold.success) return scaffold;

    const seed = await seedDatabase(db, request.password);
    if (!seed.success) return seed;

    return success();
}
