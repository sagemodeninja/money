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