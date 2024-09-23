<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/user_model.php';

HttpRequest::handle('PATCH', function (HttpRequest $request) {
    $id = $request->params['id'];
    $body = $request->body;
    
    $model = new UserModel();
    $model->given_name = $body['given_name'];
    $model->surname = $body['surname'];
    $model->email = $body['email'];
    
    $connection = new Database('user', UserModel::class);
    $connection->update($id, $model);
    
    return new HttpResponse(200, $model);
});
?>