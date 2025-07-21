// Wrappers for AES key management functions.

export function generateKey(): Promise<CryptoKey> {
    return crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );
}

export function importKey(raw: Uint8Array, usages: KeyUsage[]): Promise<CryptoKey> {
    return crypto.subtle.importKey("raw", raw, { name: "AES-GCM" }, false, usages);
}

export async function wrapKey(iv: Uint8Array, key: CryptoKey, wrappingKey: CryptoKey): Promise<Uint8Array> {
    const wrapped = await crypto.subtle.wrapKey(
        "raw",
        key,
        wrappingKey,
        { name: "AES-GCM", iv }
    );
    return new Uint8Array(wrapped);
}

/**
 * Unwraps a wrapped key using a wrapping key.
 * @param key The key to be unwrapped, packed as [IV, wrappedKey].
 * @param wrappingKey The key used to unwrap the wrapped key.
 * @param usages The key usages for the unwrapped key.
 * @returns A promise that resolves to the unwrapped key.
 */
export function unwrapKey(key: Uint8Array[], wrappingKey: CryptoKey, usages: KeyUsage[]): Promise<CryptoKey> {
    const [iv, wrappedKey] = key;
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