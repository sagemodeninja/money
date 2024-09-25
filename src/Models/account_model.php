<?php
class AccountModel {
    public int $id;
    public int $user_id;
    public string $name;
    public int $type; # 0-Budget, 1-Savings, 2-Goals, 3-Liabilities
    public int $status;
}
?>