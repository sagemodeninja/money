<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_line_model.php';

HttpRequest::handle('GET', function () {
    $connection = new Database('ledger_line', LedgerLineModel::class);
    $lines = $connection->whereAll('`status` = :status', ['status' => 1]);
    return new HttpResponse(200, $lines);
});
?>