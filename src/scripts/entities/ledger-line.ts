export interface LedgerLine {
    id: number
    ledger_id: number
    wallet_id: number
    account_id: number
    description: string
    debit: number
    credit: number
}