<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/user_model.php';

HttpRequest::handle('POST', function (HttpRequest $request) {
    $model = new UserModel();
    $body = $request->body;

    $model->given_name = $body['given_name'];
    $model->surname = $body['surname'];
    $model->email = $body['email'];
    
    $connection = new Database('user', UserModel::class);
    $connection->insert($model);
    
    return new HttpResponse(201, $model);
});
?>