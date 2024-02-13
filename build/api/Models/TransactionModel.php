<?php
    namespace Models;

    use Core\ModelBase;
    use DateTime;

    class TransactionModel extends ModelBase {
        public int $id;
        public DateTime $transactionDate;
        public int $transferType;
        public string $description;
        public ?string $remarks;
        public int $status;

        public static function getById($id) {
            $connection = TransactionModel::connect();

            $selectFields = TransactionModel::getSelectFields();
            $query = 'SELECT ' . implode(',', $selectFields) . ' FROM `transaction` t WHERE t.`Id` = :id AND a.`Status` != 2;';
            
            $statement = $connection->execute($query, [':id' => $id]);
            $result = $statement->fetch();

            return TransactionModel::mapRowToModel(TransactionModel::class, $result);
        }

        public static function create($transaction) {
            $connection = TransactionModel::connect();

            $insertFields = TransactionModel::getInsertFields();
            $query = 'INSERT INTO `transaction` (' . implode(',', $insertFields) . ') VALUES (:transaction_date, :transaction_type, :description, :remarks)';
            
            $params = [
                ':transaction_date' => $transaction->transactionDate,
                ':transaction_type' => $transaction->transactionType,
                ':description' => $transaction->description,
                ':remarks' => $transaction->remarks
            ];
            $connection->execute($query, $params);
        }

        public static function update($id, $transaction) {
            $connection = TransactionModel::connect();

            $query = 'UPDATE `transaction` SET `TransactionDate` = :transaction_date, `Description` = :description, `Remarks` = :remarks WHERE `Id` = :id';
            $params = [
                ':id' => $id,
                ':transaction_date' => $transaction->transactionDate,
                ':description' => $transaction->description,
                ':remarks' => $transaction->remarks
            ];

            $connection->execute($query, $params);
        }

        public static function post($id) {
            $connection = TransactionModel::connect();

            $query = 'UPDATE `transaction` SET `Status` = 1 WHERE Id = :id';
            $params = [':id' => $id];

            $connection->execute($query, $params);
        }

        public static function cancel($id) {
            $connection = TransactionModel::connect();

            $query = 'UPDATE `transaction` SET `Status` = 0 WHERE Id = :id';
            $params = [':id' => $id];

            $connection->execute($query, $params);
        }

        public static function remove($id) {
            $connection = TransactionModel::connect();

            $query = 'UPDATE `transaction` SET `Status` = 2 WHERE Id = :id';
            $params = [':id' => $id];

            $connection->execute($query, $params);
        }

        private static function getSelectFields() {
            return [
                't.Id',
                't.TransactionDate',
                't.TransactionType',
                't.Description',
                't.Remarks',
                't.Status'
            ];
        }

        private static function getInsertFields() {
            return [
                'TransactionDate',
                'TransactionType',
                'Description',
                'Remarks'
            ];
        }
    }
?>