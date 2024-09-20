<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/wallet_model.php';

HttpRequest::handle('GET', function () {
    $connection = new Database('wallet', WalletModel::class);
    $query = 'SELECT * FROM wallet WHERE status = 1';
    $wallets = $connection->all($query);
    return new HttpResponse(200, $wallets);
});
?>