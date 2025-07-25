import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { CreateDbRequest } from "../data/requests/create-db-request.ts";
import { success, failed, Result, EmptyResult } from "@utils/result.ts";
import { deriveKey, hash } from "@utils/crypto/password.ts";
import { generateKey, importKey, wrapKey } from "@utils/crypto/aes/key.ts";
import * as byte from "@utils/byte.ts";

function scaffoldDatabase(db: DB): EmptyResult {
    try {
        db.execute(`
            CREATE TABLE IF NOT EXISTS config (
                key TEXT PRIMARY KEY,
                value BLOB
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
        if (!hashed.success) return hashed;

        const { salt, key } = await deriveKey(password);
        const masterKey = await generateKey();
        const wrappingKey = await importKey(key, ["wrapKey"]);
        const wrapped = await wrapKey(masterKey, wrappingKey);
        const packed = byte.prepend(wrapped, salt);

        db.query(
            `INSERT OR IGNORE INTO config (key, value) VALUES (?, ?)`,
            ['auth_password', hashed.data]
        );

        db.query(
            `INSERT OR IGNORE INTO config (key, value) VALUES (?, ?)`,
            ['master_enc_key', packed]
        );

        return success();
    } catch (error) {
        return failed(error);
    }
}

export async function createDb(db: DB, options: CreateDbRequest): Promise<Result<string>> {
    const scaffold = scaffoldDatabase(db);
    if (!scaffold.success) return scaffold;

    const seed = await seedDatabase(db, options.password);
    if (!seed.success) return seed;

    return success('Database created successfully');
}
