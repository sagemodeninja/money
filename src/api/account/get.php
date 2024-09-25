<?php
session_start();

include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/account_model.php';

HttpRequest::handle('GET', function (HttpRequest $request) {
    $user_id = @$_SESSION['user_id'];
    $type = @$request->params['type'];

    if (!isset($user_id))
        return new HttpResponse(401, 'Unauthorized');

    if (!isset($type))
        return new HttpResponse(400, 'Account type is required.');

    $connection = new Database('account', AccountModel::class);
    $accounts = $connection->whereAll(
        '`user_id` = :user_id AND `status` = :status',
        ['user_id' => $user_id, 'status' => 1]
    );
    
    return new HttpResponse(200, $accounts);
});
?>