<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_model.php';

HttpRequest::handle('DELETE', function (HttpRequest $request) {
    $id = $request->params['id'];

    $connection = new Database('ledger', LedgerModel::class);
    $connection->delete($id);
    
    return new HttpResponse(204);
});
?>