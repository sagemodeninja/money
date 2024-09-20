<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/wallet_model.php';

HttpRequest::handle('PATCH', function (HttpRequest $request) {
    $id = $request->params['id'];
    $body = $request->body;
    
    $model = new WalletModel();
    $model->user_id = $body['user_id'];
    $model->name = $body['name'];
    
    $connection = new Database('wallet', WalletModel::class);
    $connection->update($id, $model);
    
    return new HttpResponse(200, $model);
});
?>