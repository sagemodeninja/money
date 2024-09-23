<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/user_model.php';

HttpRequest::handle('GET', function () {
    $connection = new Database('user', UserModel::class);
    $users = $connection->whereAll('`status` = :status', ['status' => 1]);
    return new HttpResponse(200, $users);
});
?>