<?php
    namespace Models;

    use ReflectionClass;
    use ReflectionProperty;

    class AccountModel {
        public int $id;
        public string $shortCode;
        public string $title;
        public ?int $walletId;
        public ?int $categoryId;
        public CategoryModel $category;
        public ?string $accountNumber;
        public ?string $bankIcon;
        public int $status;
        
        public static function getCategorized() {
            $host = getenv('MYSQL_HOST');
            $dbname = getenv('MYSQL_DATABASE');
            $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";

            $pdo = new \PDO($dsn, getenv('MYSQL_USER'), getenv('MYSQL_PASSWORD'));

            $columns = [];

            AccountModel::mapColumns(AccountModel::class, $columns);
            AccountModel::prepareColumns($columns);

            $query = "SELECT " . join(',', $columns) . " FROM account a LEFT JOIN category b ON b.Id = a.CategoryId WHERE a.`Status` IN (1, 2)";
            $stmt = $pdo->prepare($query);
            
            $stmt->execute();
            $result = $stmt->fetchAll();

            $pdo = null;

            return AccountModel::mapRowsToModel(AccountModel::class, $result);
        }

        private static function mapColumns($class, &$columns, $alias = 'a') {
            $reflection = new ReflectionClass($class);
            $properties = $reflection->getProperties(ReflectionProperty::IS_PUBLIC);

            foreach ($properties as $property) {
                $type = $property->getType()->getName();

                if (str_starts_with($type, "Models\\")) {
                    $nextAlias = chr(97 + count($columns));
                    AccountModel::mapColumns($type, $columns, $nextAlias);
                } else {
                    $columns[$alias][] = ucfirst($property->getName());
                }
            }
        }

        private static function prepareColumns(&$columns) {
            array_walk($columns, function (&$group, $alias) {
                $group = array_map(fn ($column) => "`$alias`.`$column`", $group);
            });

            $columns = array_merge(...array_values($columns));
        }

        private static function mapRowsToModel($className, $rows) {
            $entities = [];
        
            foreach ($rows as $row) {
                $entity = new $className();
        
                foreach ($row as $key => $value) {
                    $key = lcfirst($key);
                    $exists = property_exists($entity, $key);

                    if ($exists) {
                        $entity->$key = $value;
                    }
                }
        
                $entities[] = $entity;
            }
        
            return $entities;
        }
    }
?>