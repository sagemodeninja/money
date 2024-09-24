<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_line_model.php';

HttpRequest::handle('PATCH', function (HttpRequest $request) {
    $id = $request->params['id'];
    $body = $request->body;
    
    $model = new LedgerLineModel();
    $model->ledger_id = $body['ledger_id'];
    $model->wallet_id = $body['wallet_id'];
    $model->account_id = $body['account_id'];
    $model->description = $body['description'];
    $model->debit = $body['debit'];
    $model->credit = $body['credit'];
    
    $connection = new Database('ledger_line', LedgerLineModel::class);
    $connection->update($id, $model);
    
    return new HttpResponse(200, $model);
});
?>