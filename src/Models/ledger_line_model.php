<?php
class LedgerLineModel {
    public int $id;
    public int $ledger_id;
    public int $wallet_id;
    public int $account_id;
    public string $description;
    public float $debit;
    public float $credit;
    public int $status;
}
?>