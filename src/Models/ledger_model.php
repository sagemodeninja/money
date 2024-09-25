<?php
class LedgerModel {
    public int $id;
    public int $user_id;
    public string $record_date;
    public int $record_type; # 0-Deposit, 1-Withdraw, 2-Transfer
    public string $description;
    public int $status; # 0-Deleted, 1-Draft, 2-Posted
}
?>