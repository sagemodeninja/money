import * as byte from "@utils/byte.ts";

export async function generateSigningKeyPair(): Promise<CryptoKeyPair> {
    return await crypto.subtle.generateKey(
        {
            name: 'RSA-PSS',
            modulusLength: 2048,
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            hash: 'SHA-256'
        },
        true,
        ["sign", "verify"]
    );
}

export async function exportPublicKeyToPem(key: CryptoKey): Promise<string> {
    const exported = await crypto.subtle.exportKey("spki", key);

    const header = "-----BEGIN PUBLIC KEY-----";
    const base64 = byte.toBase64(exported);
    const content = base64.match(/.{1,64}/g)?.join('\n') || base64;
    const footer = "-----END PUBLIC KEY-----";

    return [header, content, footer].join('\n');
}
