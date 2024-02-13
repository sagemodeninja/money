<?php
    namespace Models;

    use Core\ModelBase;

    class TransactionDetailModel extends ModelBase {
        public int $id;
        public int $transactionId;
        public int $walletId;
        public int $accountId;
        public int $direction;
        public float $amount;
        public float $fee;
        public float $total;
        public int $status;

        public static function getByTransaction($transactionId) {
            $connection = TransactionDetailModel::connect();

            $selectFields = TransactionDetailModel::getSelectFields();
            $query = 'SELECT ' . implode(', ', $selectFields) . ' FROM `transaction_detail` t WHERE t.`TransactionId` = :transaction_id AND t.`Status` = 0;';

            $statement = $connection->execute($query, [':transaction_id' => $transactionId]);
            $result = $statement->fetchAll();

            return TransactionDetailModel::mapRowsToModel(TransactionDetailModel::class, $result);
        }

        public static function getByWallet($walletId) {
            $connection = TransactionDetailModel::connect();

            $selectFields = TransactionDetailModel::getSelectFields();
            $query = 'SELECT ' . implode(', ', $selectFields) . ' FROM `transaction_detail` t WHERE t.`WalletId` = :wallet_id AND t.`Status` = 0;';

            $statement = $connection->execute($query, [':wallet_id' => $walletId]);
            $result = $statement->fetchAll();

            return TransactionDetailModel::mapRowsToModel(TransactionDetailModel::class, $result);
        }

        public static function getByAccount($accountId) {
            $connection = TransactionDetailModel::connect();

            $selectFields = TransactionDetailModel::getSelectFields();
            $query = 'SELECT ' . implode(', ', $selectFields) . ' FROM `transaction_detail` t WHERE t.`AccountId` = :account_id AND t.`Status` = 0;';

            $statement = $connection->execute($query, [':account_id' => $accountId]);
            $result = $statement->fetchAll();

            return TransactionDetailModel::mapRowsToModel(TransactionDetailModel::class, $result);
        }

        public static function create($transaction) {
            $connection = TransactionDetailModel::connect();

            $insertFields = TransactionDetailModel::getInsertFields();
            $insertTokens = TransactionDetailModel::getInsertTokens();

            $query = 'INSERT INTO `transaction_detail` (' . implode(',', $insertFields) . ') VALUES (' . implode(',', $insertTokens) . ')';
            $params = [
                ':transaction_id' => $transaction->transactionId,
                ':wallet_id' => $transaction->walletId,
                ':account_id' => $transaction->accountId,
                ':direction' => $transaction->direction,
                ':amount' => $transaction->amount,
                ':fee' => $transaction->fee,
                ':total' => $transaction->total
            ];

            $connection->execute($query, $params);
        }

        public static function update($id, $transaction) {
            $connection = TransactionDetailModel::connect();

            $query = 'UPDATE `transaction_detail` SET `Amount` = :amount, `Fee` = :fee, `Total` = :total WHERE `Id` = :id';
            $params = [
                ':id' => $id,
                ':amount' => $transaction->amount,
                ':fee' => $transaction->fee,
                ':total' => $transaction->total
            ];

            $connection->execute($query, $params);
        }

        public static function remove($id) {
            $connection = TransactionDetailModel::connect();

            $query = 'UPDATE `transaction_detail` SET `Status` = 1 WHERE Id = :id';
            $params = [':id' => $id];

            $connection->execute($query, $params);
        }

        private static function getSelectFields() {
            return [
                't.Id',
                't.TransactionId',
                't.WalletId',
                't.AccountId',
                't.`Direction`',
                't.`Amount`',
                't.`Fee`',
                't.`Total`',
                't.`Status`'
            ];
        }

        private static function getInsertFields() {
            return [
                't.TransactionId',
                't.WalletId',
                't.AccountId',
                't.`Direction`',
                't.`Amount`',
                't.`Fee`',
                't.`Total`'
            ];
        }

        private static function getInsertTokens() {
            return [
                ':transaction_id',
                ':wallet_id',
                ':account_id',
                ':direction',
                ':amount',
                ':fee',
                ':total'
            ];
        }
    }
?>