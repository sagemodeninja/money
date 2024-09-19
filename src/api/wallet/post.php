<?php
include_once '../../database.php';
include_once '../../models/wallet_model.php';

$model = new WalletModel();

$model->user_id = 1;
$model->name = 'Maya';

$connection = new Database('wallet', WalletModel::class);
$connection->insert($model);

http_response_code(200);

// header('Content-Type: application/json; charset=utf-8');
// echo json_encode(array_values($wallets));
?>