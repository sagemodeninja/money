import { SignJWT } from "npm:jose@6.0.12";
import { generateSigningKeyPair, exportPublicKeyToPem } from "@utils/crypto/rsa/key.ts";
import { failed, success, Result } from "@utils/result.ts";

export class AuthSession {
    private static _secrets: Map<string, string> = new Map();

    public static async start(): Promise<Result<string>> {
        try {
            const id = crypto.randomUUID();
            const keys = await generateSigningKeyPair();

            const jwt = await new SignJWT({ sid: id })
                .setProtectedHeader({ alg: "PS256" })
                .sign(keys.privateKey);

            // We need to store the public key for later verification.
            const publicKey = await exportPublicKeyToPem(keys.publicKey);
            this._secrets.set(id, publicKey);

            return success(jwt);
        } catch (error) {
            return failed(error);
        }
    }

    public static getSecret(id: string) {
        return this._secrets.get(id);
    }

    public static end(id: string): boolean {
        if (!this._secrets.has(id))
            return false;

        this._secrets.delete(id);
        return true;
    }
}
