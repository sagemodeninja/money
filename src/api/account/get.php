<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/account_model.php';

HttpRequest::handle('GET', function () {
    $connection = new Database('account', AccountModel::class);
    $accounts = $connection->whereAll('`status` = :status', ['status' => 1]);
    return new HttpResponse(200, $accounts);
});
?>