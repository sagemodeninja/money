<?php
session_start();

include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/wallet_model.php';

HttpRequest::handle('POST', function (HttpRequest $request) {
    $user_id = @$_SESSION['user_id'];

    if (!isset($user_id))
        return new HttpResponse(401, 'Unauthorized');

    $model = new WalletModel();
    $body = $request->body;

    $model->user_id = $user_id;
    $model->name = $body['name'];
    
    $connection = new Database('wallet', WalletModel::class);
    $connection->insert($model);
    
    return new HttpResponse(201, $model);
});
?>