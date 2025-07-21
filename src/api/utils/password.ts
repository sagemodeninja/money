import { scrypt } from "node:crypto";
import { timingSafeEqual } from "jsr:@std/crypto";
import { success, failed, EmptyResult, Result } from "../utils/result.ts";

function pack(salt: Uint8Array, derivedKey: Uint8Array): Uint8Array {
    const result = new Uint8Array(1 + salt.length + derivedKey.length);

    result[0] = salt.length;
    result.set(salt, 1);
    result.set(derivedKey, 1 + salt.length);

    return result;
}

function unpack(hashed: Uint8Array): { salt: Uint8Array; key: Uint8Array } {
    const salt = hashed.slice(1, 1 + hashed[0]);
    const key = hashed.slice(1 + hashed[0]);
    return { salt, key };
}

export function hash(password: string): Promise<Result<Uint8Array, Error>> {
    return new Promise(resolve => {
        try {
            const salt = crypto.getRandomValues(new Uint8Array(16));
            scrypt(password, salt, 32, (err, derivedKey) => {
                if (err) throw err;
                const result = pack(salt, derivedKey);
                resolve(success(result));
            });
        } catch (error) {
            resolve(failed(error));
        }
    });
}

export function verify(password: string, hashed: Uint8Array): Promise<EmptyResult<Error>> {
    return new Promise(resolve => {
        try {
            const { salt, key } = unpack(hashed);
            scrypt(password, salt, 32, (err, derivedKey) => {
                if (err) throw err;
                const equal = timingSafeEqual(derivedKey, key);
                const result = equal ? success() : failed("Password does not match.");
                resolve(result as EmptyResult<Error>);
            });
        } catch (error) {
            resolve(failed(error));
        }
    });
}