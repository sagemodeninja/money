<?php
include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/wallet_model.php';

HttpRequest::handle('DELETE', function (HttpRequest $request) {
    $id = $request->params['id'];

    $connection = new Database('wallet', WalletModel::class);
    $connection->delete($id);
    
    return new HttpResponse(204);
});
?>