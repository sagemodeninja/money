<?php
session_start();

include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/wallet_model.php';

HttpRequest::handle('GET', function () {
    $user_id = @$_SESSION['user_id'];

    if (!isset($user_id))
        return new HttpResponse(401, 'Unauthorized');

    $connection = new Database('wallet', WalletModel::class);
    $wallets = $connection->whereAll(
        '`user_id` = :user_id AND `status` = :status',
        ['user_id' => $user_id, 'status' => 1]
    );

    #378231

    return new HttpResponse(200, $wallets);
});
?>