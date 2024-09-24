<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_model.php';

HttpRequest::handle('POST', function (HttpRequest $request) {
    $model = new LedgerModel();
    $body = $request->body;

    $model->record_date = $body['record_date'];
    $model->record_type = $body['record_type'];
    $model->description = $body['description'];
    
    $connection = new Database('ledger', LedgerModel::class);
    $connection->insert($model);
    
    return new HttpResponse(201, $model);
});
?>