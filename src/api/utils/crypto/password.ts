import { scrypt } from "node:crypto";
import { timingSafeEqual } from "jsr:@std/crypto";
import { success, failed, EmptyResult, Result } from "../result.ts";
import { pack, unpack } from "../byte.ts";

/**
 * Hash a password.
 * @param password The password to hash.
 * @returns A promise that resolves to the hashed password.
 */
export function hash(password: string): Promise<Result<Uint8Array>> {
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

/**
 * Verify a password against a hashed value.
 * @param password The password to verify.
 * @param hashed The hashed password to compare against.
 * @returns A promise that resolves to an EmptyResult indicating success or failure.
 */
export function verify(password: string, hashed: Uint8Array): Promise<EmptyResult> {
    return new Promise(resolve => {
        try {
            const [salt, data] = unpack(hashed);
            scrypt(password, salt, 32, (err, derivedKey) => {
                if (err) throw err;
                const equal = timingSafeEqual(derivedKey, data);
                const result = equal ? success() : failed("Password does not match.");
                resolve(result as EmptyResult);
            });
        } catch (error) {
            resolve(failed(error));
        }
    });
}

export interface DerivedKey {
    salt: Uint8Array;
    key: Uint8Array;
}

/**
 * Derive a key from a password.
 * 
 * _NOTE: This function generates its own random salt._
 * @param password The password to derive a key from.
 * @returns A promise that resolves to the derived key.
 */
export function deriveKey(password: string): Promise<Result<DerivedKey>> {
    const salt = crypto.getRandomValues(new Uint8Array(32));
    return deriveKeyWithSalt(password, salt);
}

/**
 * Derive a key from a password and salt.
 * @param password The password to derive a key from.
 * @param salt The salt to use for key derivation.
 * @returns A promise that resolves to the derived key.
 */
export function deriveKeyWithSalt(password: string, salt: Uint8Array): Promise<Result<DerivedKey>> {
    return new Promise<Result<DerivedKey>>(resolve => {
        try {
            scrypt(password, salt, 32, (err, key) => {
                if (err) throw err;
                const result = success({ salt, key });
                resolve(result);
            });
        } catch (error) {
            resolve(failed(error));
        }
    });
}