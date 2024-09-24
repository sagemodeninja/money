<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_line_model.php';

HttpRequest::handle('POST', function (HttpRequest $request) {
    $model = new LedgerLineModel();
    $body = $request->body;

    $model->ledger_id = $body['ledger_id'];
    $model->wallet_id = $body['wallet_id'];
    $model->account_id = $body['account_id'];
    $model->description = $body['description'];
    $model->debit = $body['debit'];
    $model->credit = $body['credit'];
    
    $connection = new Database('ledger_line', LedgerLineModel::class);
    $connection->insert($model);
    
    return new HttpResponse(201, $model);
});
?>