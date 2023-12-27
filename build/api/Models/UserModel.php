<?php
    namespace Models;

    class UserModel {
        public int $id;
        public string $principal;
        public string $displayName;
        public int $status;

        public static function getAll() {
            $dbhost = getenv('MYSQL_HOST');
            $dbuser = getenv('MYSQL_USER');
            $dbpassword = getenv('MYSQL_PASSWORD');
            $dbname = getenv('MYSQL_DATABASE');

            $dsn = "mysql:host=$dbhost;dbname=$dbname;charset=utf8mb4";
            $pdo = new \PDO($dsn, $dbuser, $dbpassword);

            $query = "SELECT u.Id, u.Principal, u.DisplayName FROM `user` u WHERE `Status` = 0;";
            $statement = $pdo->prepare($query);
            
            $statement->execute();
            $result = $statement->fetchAll();

            return UserModel::mapRowsToModel(UserModel::class, $result);
        }

        public static function getById($id) {
            $dbhost = getenv('MYSQL_HOST');
            $dbuser = getenv('MYSQL_USER');
            $dbpassword = getenv('MYSQL_PASSWORD');
            $dbname = getenv('MYSQL_DATABASE');

            $dsn = "mysql:host=$dbhost;dbname=$dbname;charset=utf8mb4";
            $pdo = new \PDO($dsn, $dbuser, $dbpassword);

            $query = "SELECT u.Id, u.Principal, u.DisplayName FROM `user` u WHERE Id = :id AND `Status` = 0;";
            $statement = $pdo->prepare($query);
            
            $statement->execute([
                ':id' => $id
            ]);
            $result = $statement->fetch();

            return UserModel::mapRowToModel(UserModel::class, $result);
        }

        public static function create($user) {
            $dbhost = getenv('MYSQL_HOST');
            $dbuser = getenv('MYSQL_USER');
            $dbpassword = getenv('MYSQL_PASSWORD');
            $dbname = getenv('MYSQL_DATABASE');

            $dsn = "mysql:host=$dbhost;dbname=$dbname;charset=utf8mb4";
            $pdo = new \PDO($dsn, $dbuser, $dbpassword);

            $query = "INSERT INTO `user` (`Principal`, `DisplayName`) VALUES (:principal, :display_name)";
            $statement = $pdo->prepare($query);
            
            $statement->execute([
                ':principal' => $user->principal,
                ':display_name' => $user->displayName
            ]);
        }

        public static function update($id, $user) {
            $dbhost = getenv('MYSQL_HOST');
            $dbuser = getenv('MYSQL_USER');
            $dbpassword = getenv('MYSQL_PASSWORD');
            $dbname = getenv('MYSQL_DATABASE');

            $dsn = "mysql:host=$dbhost;dbname=$dbname;charset=utf8mb4";
            $pdo = new \PDO($dsn, $dbuser, $dbpassword);

            $query = "UPDATE `user` SET `Principal` = :principal, `DisplayName` = :display_name WHERE Id = :id";
            $statement = $pdo->prepare($query);
            
            $statement->execute([
                ':id' => $id,
                ':principal' => $user->principal,
                ':display_name' => $user->displayName
            ]);
        }

        public static function remove($id) {
            $dbhost = getenv('MYSQL_HOST');
            $dbuser = getenv('MYSQL_USER');
            $dbpassword = getenv('MYSQL_PASSWORD');
            $dbname = getenv('MYSQL_DATABASE');

            $dsn = "mysql:host=$dbhost;dbname=$dbname;charset=utf8mb4";
            $pdo = new \PDO($dsn, $dbuser, $dbpassword);

            $query = "UPDATE `user` SET `Status` = 1 WHERE Id = :id";
            $statement = $pdo->prepare($query);
            
            $statement->execute([':id' => $id]);
        }

        private static function mapRowToModel($className, $row) {
            $entity = new $className();
    
            foreach ($row as $key => $value) {
                $key = lcfirst($key);
                $exists = property_exists($entity, $key);

                if ($exists) {
                    $entity->$key = $value;
                }
            }
    
            return $entity;
        }

        private static function mapRowsToModel($className, $rows) {
            $entities = [];
        
            foreach ($rows as $row) {
                $entities[] = UserModel::mapRowToModel($className, $row);
            }
        
            return $entities;
        }
    }
?>