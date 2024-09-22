<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/account_model.php';

HttpRequest::handle('PATCH', function (HttpRequest $request) {
    $id = $request->params['id'];
    $body = $request->body;
    
    $model = new AccountModel();
    $model->user_id = $body['user_id'];
    $model->name = $body['name'];
    $model->type = $body['type'];
    
    $connection = new Database('account', AccountModel::class);
    $connection->update($id, $model);
    
    return new HttpResponse(200, $model);
});
?>