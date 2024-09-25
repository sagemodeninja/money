<?php
session_start();

include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_model.php';

HttpRequest::handle('POST', function (HttpRequest $request) {
    $user_id = @$_SESSION['user_id'];
    
    if (!isset($user_id))
        return new HttpResponse(401, 'Unauthorized');

    $body = $request->body;
    $model = new LedgerModel();

    $model->user_id = $user_id;
    $model->record_date = $body['record_date'];
    $model->record_type = $body['record_type'];
    $model->description = $body['description'];
    
    $connection = new Database('ledger', LedgerModel::class);
    $connection->insert($model);
    
    return new HttpResponse(201, $model);
});
?>