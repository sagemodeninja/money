import { CreateVaultOptions } from "@/data-objects";
import { FileHandler } from "@/utilities/file-handler.main";

export class Vault {
    public static async create(options: CreateVaultOptions): Promise<string> {
        const { saveLocation } = options;
        FileHandler.writeFile(saveLocation, "");
        return saveLocation;
    }
}
