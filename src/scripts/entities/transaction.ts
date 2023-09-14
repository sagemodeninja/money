export interface Transaction {
    Id: bigint;
    Date: string;
    Description: string;
    Debit: number;
    Credit: number;
    Total: number;
    Posted: boolean
}