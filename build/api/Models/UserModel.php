<?php
    namespace Models;

    use \R;
    use RedBeanPHP\SimpleModel;

    class UserModel extends SimpleModel {
        public int $id;
        public string $firstname;
        public string $lastname;
        public string $email;
        public int $status;

        public static function create($data) {
            $user = R::getRedBean()->dispense('user');
            
            $user->firstname = $data->firstname;
            $user->lastname = $data->lastname;
            $user->email = $data->email;

            R::store($user);
        }

        public static function getAll() {
            $users = R::findAll('user', "status = ?", [true]);
            return $users;
        }

        public static function getById($id) {
            $host = getenv('MYSQL_HOST');
            $dbname = getenv('MYSQL_DATABASE');
            $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";

            $pdo = new \PDO($dsn, getenv('MYSQL_USER'), getenv('MYSQL_PASSWORD'));

            // Perform a SQL query
            $stmt = $pdo->prepare("SELECT * FROM user WHERE id = :value1");
            $stmt->execute(['value1' => $id]);

            $row = $stmt->fetch();

            if (!$row) return null;

            $result = new UserModel();
            $result->id = $row['id'];
            $result->firstname = $row['firstname'];
            $result->lastname = $row['lastname'];
            $result->email = $row['email'];
            $result->status = $row['status'];

            // Close the database connection
            $pdo = null;

            return $result;
        }
    }
?>