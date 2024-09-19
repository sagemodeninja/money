<?php
include_once '../../database.php';
include_once '../../models/wallet_model.php';

$connection = new Database('wallet', WalletModel::class);
$connection->delete(4);

http_response_code(200);
?>