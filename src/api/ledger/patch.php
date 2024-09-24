<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_model.php';

HttpRequest::handle('PATCH', function (HttpRequest $request) {
    $id = $request->params['id'];
    $body = $request->body;
    
    $model = new LedgerModel();
    $model->record_date = $body['record_date'];
    $model->record_type = $body['record_type'];
    $model->description = $body['description'];
    
    $connection = new Database('ledger', LedgerModel::class);
    $connection->update($id, $model);
    
    return new HttpResponse(200, $model);
});
?>