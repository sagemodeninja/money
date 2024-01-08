<?php
    namespace Core;

    use PDO;
    use PDOStatement;

    class ModelBase {
        protected ?PDO $connection;

        public function __construct(?PDO $connection = null) {
            $this->connection = $connection;
        }

        protected static function connect(): ModelBase {
            $dbhost = getenv('MYSQL_HOST');
            $dbuser = getenv('MYSQL_USER');
            $dbpassword = getenv('MYSQL_PASSWORD');
            $dbname = getenv('MYSQL_DATABASE');

            $dsn = "mysql:host=$dbhost;dbname=$dbname;charset=utf8mb4";
            $connection = new PDO($dsn, $dbuser, $dbpassword);

            return new ModelBase($connection);
        }

        protected static function mapRowToModel($model, $row) {
            $entity = new $model();
    
            foreach ($row as $key => $value) {
                $key = lcfirst($key);

                if (property_exists($entity, $key)) {
                    $entity->$key = $value;
                }
            }
    
            return $entity;
        }

        protected static function mapRowsToModel($model, $rows) {
            $entities = [];
        
            foreach ($rows as $row) {
                $entities[] = ModelBase::mapRowToModel($model, $row);
            }
        
            return $entities;
        }

        protected function execute(string $query, ?array $params = null): PDOStatement {
            $connection = $this->connection;

            $statement = $connection->prepare($query);
            $statement->execute($params);

            return $statement;
        }
    }
?>