// Wrappers for AES key management functions.

import * as byte from "@utils/byte.ts";
import { deriveKeyWithSalt } from "@utils/crypto/password.ts";

export function generateKey(): Promise<CryptoKey> {
    return crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );
}

/**
 * Imports a raw key into an AES-GCM CryptoKey.
 * @param raw The raw key to import.
 * @param usages The key usages for the imported key.
 * @returns A promise that resolves to the imported CryptoKey.
 */
export function importKey(raw: Uint8Array, usages: KeyUsage[]): Promise<CryptoKey> {
    return crypto.subtle.importKey("raw", raw, { name: "AES-GCM" }, false, usages);
}

/**
 * Wraps a key.
 * 
 * _NOTE: Output is packed as [IV, wrappedKey]._
 * @param key The key to wrap.
 * @param wrappingKey The key used for wrapping.
 * @param iv The initialization vector used for wrapping.
 * @returns A promise that resolves to the wrapped key.
 */
export async function wrapKey(key: CryptoKey, wrappingKey: CryptoKey): Promise<Uint8Array> {
    const iv = byte.random(12);
    const wrapped = await crypto.subtle.wrapKey(
        "raw",
        key,
        wrappingKey,
        { name: "AES-GCM", iv }
    );
    return byte.pack(iv, new Uint8Array(wrapped));
}

/**
 * Unwraps a wrapped key.
 * @param key The key to unwrap, packed as [salt, IV, key].
 * @param wrappingKey The key used to unwrap key.
 * @param usages The key usages for the unwrapped key.
 * @returns A promise that resolves to the unwrapped key.
 */
export function unwrapKey(key: Uint8Array, wrappingKey: CryptoKey, usages: KeyUsage[]): Promise<CryptoKey> {
    const [_, iv, wrappedKey] = byte.unpack(key);
    return crypto.subtle.unwrapKey(
        "raw",
        wrappedKey,
        wrappingKey,
        { name: "AES-GCM", iv },
        { name: "AES-GCM" },
        true,
        usages
    );
}

/**
 * Unwraps a wrapped key using a password.
 * @param key The key to unwrap, packed as [salt, IV, key].
 * @param password The password to use for unwrapping.
 * @returns A promise that resolves to the unwrapped key.
 */
export async function unwrapKeyWithPassword(key: Uint8Array, password: string, usages: KeyUsage[]): Promise<CryptoKey> {
    const [salt] = byte.unpack(key);
    const { key: derived } = await deriveKeyWithSalt(password, salt);
    const wrapping = await importKey(derived, ["unwrapKey"]);
    return unwrapKey(key, wrapping, usages);
}