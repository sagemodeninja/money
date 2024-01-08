<?php
    namespace Models;

    use Core\ModelBase;

    class UserModel extends ModelBase {
        public int $id;
        public string $principal;
        public string $displayName;
        public int $status;

        public static function getAll() {
            $connection = UserModel::connect();

            $query = 'SELECT u.Id, u.Principal, u.DisplayName FROM `user` u WHERE `Status` = 0;';
            $statement = $connection->execute($query);

            $result = $statement->fetchAll();
            return UserModel::mapRowsToModel(UserModel::class, $result);
        }

        public static function getById($id) {
            $connection = UserModel::connect();

            $query = 'SELECT u.Id, u.Principal, u.DisplayName FROM `user` u WHERE Id = :id AND `Status` = 0;';
            $statement = $connection->execute($query, [':id' => $id]);

            $result = $statement->fetch();
            return UserModel::mapRowToModel(UserModel::class, $result);
        }

        public static function create($user) {
            $connection = UserModel::connect();

            $query = 'INSERT INTO `user` (`Principal`, `DisplayName`) VALUES (:principal, :display_name)';
            $params = [
                ':principal' => $user->principal,
                ':display_name' => $user->displayName
            ];

            $connection->execute($query, $params);
        }

        public static function update($id, $user) {
            $connection = UserModel::connect();

            $query = 'UPDATE `user` SET `Principal` = :principal, `DisplayName` = :display_name WHERE Id = :id';
            $params = [
                ':id' => $id,
                ':principal' => $user->principal,
                ':display_name' => $user->displayName
            ];
            
            $connection->execute($query, $params);
        }

        public static function remove($id) {
            $connection = UserModel::connect();

            $query = 'UPDATE `user` SET `Status` = 1 WHERE Id = :id';
            $params = [':id' => $id];

            $connection->execute($query, $params);
        }
    }
?>