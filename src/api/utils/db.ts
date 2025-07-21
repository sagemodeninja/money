import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { fromError, success, Result } from "./result.ts";

function scaffoldDatabase(db: DB): Result<null, string> {
    try {
        db.execute(`
            CREATE TABLE IF NOT EXISTS config (
                key TEXT PRIMARY KEY,
                value BLOB
            );
        `);

        return success();
    } catch (error) {
        return fromError(error);
    }
}

function seedDatabase(db: DB, password: string): Result<null, string> {
    try {
        db.query(
            `INSERT OR IGNORE INTO config (key, value) VALUES (?, ?)`,
            ['auth_password', password]
        );
        return success();
    } catch (error) {
        return fromError(error);
    }
}

export function createDb(db: DB): Result<string, string> {
    const scaffold = scaffoldDatabase(db);
    if (!scaffold.success) return scaffold;

    // For demonstration, use a placeholder password. Replace as needed.
    const seed = seedDatabase(db, 'your_password_here');
    if (!seed.success) return seed;

    return success('Database created successfully');
}
