import { model, Model } from "@utils/_db/model.ts";
import { Account } from "@entities/account.ts";

@model("account")
export class AccountModel extends Model<Account> {}