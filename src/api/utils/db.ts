import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { CreateDbRequest } from "../data/requests/create-db-request.ts";
import { success, failed, Result, EmptyResult } from "./result.ts";
import { hash } from "./password.ts";

function scaffoldDatabase(db: DB): EmptyResult<Error> {
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

async function seedDatabase(db: DB, password: string): Promise<EmptyResult<Error>> {
    try {
        const hashed = await hash(password);

        if (!hashed.success)
            return hashed;

        db.query(
            `INSERT OR IGNORE INTO config (key, value) VALUES (?, ?)`,
            ['auth_password', hashed.data]
        );

        db.query(
            `INSERT OR IGNORE INTO config (key, value) VALUES (?, ?)`,
            ['master_enc_key', hashed.data]
        );

        return success();
    } catch (error) {
        return failed(error);
    }
}

export async function createDb(db: DB, options: CreateDbRequest): Promise<Result<string, Error>> {
    const scaffold = scaffoldDatabase(db);
    if (!scaffold.success) return scaffold;

    const seed = await seedDatabase(db, options.password);
    if (!seed.success) return seed;

    return success('Database created successfully');
}
