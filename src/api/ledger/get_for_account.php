<?php
session_start();

include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_model.php';

HttpRequest::handle('GET', function (HttpRequest $request) {
    $user_id = @$_SESSION['user_id'];
    $account_id = @$request->params['account_id'];
    
    if (!isset($user_id))
        return new HttpResponse(401, 'Unauthorized');

    if (!isset($account_id))
        return new HttpResponse(400, 'Account is required.');

    $connection = new Database('ledger', LedgerModel::class);

    $ledgers = $connection->query(
        'SELECT * FROM `ledger` l WHERE `user_id` = :user_id AND `status` >= :status AND EXISTS(SELECT 1 FROM `ledger_line` li WHERE li.`ledger_id` = l.`id` AND li.`account_id` = :account_id)',
        ['user_id' => $user_id, 'account_id' => $account_id, 'status' => 1]
    );

    return new HttpResponse(200, $ledgers);
});
?>