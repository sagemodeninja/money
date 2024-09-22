<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/account_model.php';

HttpRequest::handle('POST', function (HttpRequest $request) {
    $model = new AccountModel();
    $body = $request->body;

    $model->user_id = $body['user_id'];
    $model->name = $body['name'];
    $model->type = $body['type'];
    
    $connection = new Database('account', AccountModel::class);
    $connection->insert($model);
    
    return new HttpResponse(201, $model);
});
?>