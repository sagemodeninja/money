<?php
    namespace Models;

    use Core\ModelBase;

    class AccountModel extends ModelBase {
        public int $id;
        public int $userId;
        public string $name;
        public int $accountType;
        public int $status;

        public static function getAll() {
            $connection = AccountModel::connect();

            $query = 'SELECT a.`Id`, a.`UserId`, a.`Name`, a.`AccountType` FROM `account` a WHERE a.`Status` = 0;';
            $statement = $connection->execute($query);

            $result = $statement->fetchAll();
            return AccountModel::mapRowsToModel(AccountModel::class, $result);
        }

        public static function getById($id) {
            $connection = AccountModel::connect();

            $query = 'SELECT a.`Id`, a.`UserId`, a.`Name`, a.`AccountType` FROM `account` a WHERE a.`Id` = :id AND a.`Status` = 0;';
            $statement = $connection->execute($query, [':id' => $id]);

            $result = $statement->fetch();
            return AccountModel::mapRowToModel(AccountModel::class, $result);
        }

        public static function create($account) {
            $connection = AccountModel::connect();

            $query = 'INSERT INTO `account` (`UserId`, `Name`, `AccountType`) VALUES (:user_id, :name, :account_type)';
            $params = [
                ':user_id' => $account->userId,
                ':name' => $account->name,
                ':account_type' => $account->accountType
            ];

            $connection->execute($query, $params);
        }

        public static function update($id, $account) {
            $connection = AccountModel::connect();

            $query = 'UPDATE `account` SET `Name` = :name, `AccountType` = :account_type WHERE Id = :id';
            $params = [
                ':id' => $id,
                ':name' => $account->name,
                ':account_type' => $account->accountType
            ];
            
            $connection->execute($query, $params);
        }

        public static function remove($id) {
            $connection = AccountModel::connect();

            $query = 'UPDATE `account` SET `Status` = 1 WHERE Id = :id';
            $params = [':id' => $id];

            $connection->execute($query, $params);
        }
    }
?>