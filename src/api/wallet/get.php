<?php
include_once '../../database.php';
include_once '../../models/wallet_model.php';

$connection = new Database('wallet', WalletModel::class);
$query = 'SELECT * FROM wallet WHERE status = 0';
$wallets = $connection->all($query);

http_response_code(200);
header('Content-Type: application/json; charset=utf-8');
echo json_encode(array_values($wallets));
?>