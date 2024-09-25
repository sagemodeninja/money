<?php
session_start();

include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_model.php';

HttpRequest::handle('PATCH', function (HttpRequest $request) {
    $user_id = @$_SESSION['user_id'];
    
    if (!isset($user_id))
        return new HttpResponse(401, 'Unauthorized');

    $connection = new Database('ledger', LedgerModel::class);
    
    $id = $request->params['id'];
    $ledger = $connection->where('`id` = :id', [':id' => $id]);

    if (!isset($ledger))
        return new HttpResponse(404, "Ledger with ID: $id not found.");

    if ($ledger->user_id != $user_id)
        return new HttpResponse(403, "Forbidden.");

    $body = $request->body;
    $model = new LedgerModel();

    $model->record_date = $body['record_date'];
    $model->record_type = $body['record_type'];
    $model->description = $body['description'];

    $connection->update($id, $model);
    
    return new HttpResponse(200, $model);
});
?>