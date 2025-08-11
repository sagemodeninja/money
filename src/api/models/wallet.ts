import { model, Model } from "@utils/db/model.ts";
import { Wallet } from "@entities/wallet.ts";

@model("wallet")
export class WalletModel extends Model<Wallet> {}
