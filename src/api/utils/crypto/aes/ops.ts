import * as byte from "@utils/byte.ts";

/**
 * Encrypts data using AES-GCM.
 * 
 * _Note: Output is packed as [IV, ciphertext]._
 * @param plaintext The data to be encrypted.
 * @param key The key to be used for encryption.
 * @returns A promise that resolves to the encrypted data as a Uint8Array, packed with the IV.
 */
export async function encrypt(plaintext: Uint8Array, key: CryptoKey): Promise<Uint8Array> {
    const iv = byte.random(12);
    const ciphertext = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        plaintext
    );
    return byte.pack(iv, new Uint8Array(ciphertext));
}

/**
 * Decrypts data using AES-GCM.
 * 
 * _Note: Input data must be packed as [IV, ciphertext]._
 * @param data Packed data containing the IV and ciphertext.
 * @param key The key to be used for decryption.
 * @returns A promise that resolves to the decrypted data as a Uint8Array.
 */
export async function decrypt(data: Uint8Array, key: CryptoKey): Promise<Uint8Array> {
    const [iv, ciphertext] = byte.unpack(data);
    const plaintext = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        key,
        ciphertext
    );
    return new Uint8Array(plaintext);
}
