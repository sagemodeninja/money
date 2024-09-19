<?php
class Database {
    private readonly string $_table;
    private readonly string $_model;
    private readonly PDO $_connection;

    public function __construct(string $table, string $model)
    {
        $this->_table = $table;
        $this->_model = $model; 
        $this->_connection = self::connect();
    }

    public function all(string $query)
    {
        $statement = $this->_connection->prepare($query);

        $statement->execute();
        $result = $statement->fetchAll();

        return self::rowsToModel($this->_model, $result);
    }

    public function insert(mixed $model) {
        $fields = [];
        $params = [];

        $reflection = new ReflectionClass($model);
        $properties = $reflection->getProperties(ReflectionProperty::IS_PUBLIC);

        foreach ($properties as $property)
        {
            $field = $property->getName();

            if (!isset($model->$field)) continue;
            
            $fields[] = "`$field`";
            $params[":$field"] = $property->getValue($model);
        }

        $query = "INSERT INTO $this->_table (" . implode(', ', $fields) . ") VALUES (" . implode(', ', array_keys($params)) . ")";
        $statement = $this->_connection->prepare($query);

        $statement->execute($params);
    }

    private static function connect()
    {
        $dbhost = getenv('MYSQL_HOST');
        $dbuser = getenv('MYSQL_USER');
        $dbpassword = getenv('MYSQL_PASSWORD');
        $dbname = getenv('MYSQL_DATABASE');

        $dsn = "mysql:host=$dbhost;dbname=$dbname;charset=utf8mb4";

        return new PDO($dsn, $dbuser, $dbpassword);
    }

    private static function rowToModel(string $model, mixed $row)
    {
        $entity = new $model();

        foreach ($row as $key => $value)
        {
            if (property_exists($entity, $key))
            {
                $entity->$key = $value;
            }
        }

        return $entity;
    }

    private static function rowsToModel(string $model, array $rows)
    {
        return array_map(
            fn ($row) => self::rowToModel($model, $row),
            $rows
        );
    }
}
?>