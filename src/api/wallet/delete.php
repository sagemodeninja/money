<?php
session_start();

include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/wallet_model.php';

HttpRequest::handle('DELETE', function (HttpRequest $request) {
    $user_id = @$_SESSION['user_id'];
    
    if (!isset($user_id))
        return new HttpResponse(401, 'Unauthorized');

    $connection = new Database('wallet', WalletModel::class);

    $id = $request->params['id'];
    $wallet = $connection->where('`id` = :id', [':id' => $id]);

    if (!isset($wallet))
        return new HttpResponse(404, 'No matches found.');

    if ($wallet->user_id != $user_id)
        return new HttpResponse(403, 'Forbidden.');

    $connection->delete($id);
    
    return new HttpResponse(204);
});
?>