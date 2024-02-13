<?php
    namespace Models;

    use Core\ModelBase;

    class WalletModel extends ModelBase {
        public int $id;
        public int $userId;
        public string $name;
        public bool $isVirtual;
        public int $status;

        public static function getAll() {
            $connection = WalletModel::connect();

            $query = 'SELECT w.Id, w.UserId, w.Name, w.IsVirtual FROM `wallet` w WHERE w.`Status` = 0;';
            $statement = $connection->execute($query);

            $result = $statement->fetchAll();
            return WalletModel::mapRowsToModel(WalletModel::class, $result);
        }

        public static function getById($id) {
            $connection = WalletModel::connect();

            $query = 'SELECT w.Id, w.UserId, w.Name, w.IsVirtual FROM `wallet` w WHERE w.`Id` = :id AND w.`Status` = 0;';
            $statement = $connection->execute($query, [':id' => $id]);

            $result = $statement->fetch();
            return WalletModel::mapRowToModel(WalletModel::class, $result);
        }

        public static function create($wallet) {
            $connection = WalletModel::connect();

            $query = 'INSERT INTO `wallet` (`UserId`, `Name`, `IsVirtual`) VALUES (:user_id, :name, :is_virtual)';
            $params = [
                ':user_id' => $wallet->userId,
                ':name' => $wallet->name,
                ':is_virtual' => $wallet->isVirtual ? 1 : 0
            ];

            $connection->execute($query, $params);
        }

        public static function update($id, $wallet) {
            $connection = WalletModel::connect();

            $query = 'UPDATE `wallet` SET `Name` = :name, `IsVirtual` = :is_virtual WHERE Id = :id';
            $params = [
                ':id' => $id,
                ':name' => $wallet->name,
                ':is_virtual' => $wallet->isVirtual ? 1 : 0
            ];
            
            $connection->execute($query, $params);
        }

        public static function remove($id) {
            $connection = WalletModel::connect();

            $query = 'UPDATE `wallet` SET `Status` = 1 WHERE Id = :id';
            $params = [':id' => $id];

            $connection->execute($query, $params);
        }
    }
?>