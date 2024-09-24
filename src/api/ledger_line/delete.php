<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_linemodel.php';

HttpRequest::handle('DELETE', function (HttpRequest $request) {
    $id = $request->params['id'];

    $connection = new Database('ledger_line', LedgerLineModel::class);
    $connection->delete($id);
    
    return new HttpResponse(204);
});
?>