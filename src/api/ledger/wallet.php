<?php
session_start();

include_once '../../database.php';
include_once '../../http/http_request.php';
include_once '../../models/ledger_model.php';
include_once '../../models/ledger_line_model.php';

HttpRequest::handle('GET', function (HttpRequest $request) {
    $user_id = @$_SESSION['user_id'];
    $wallet_id = @$request->params['id'];
    
    if (!isset($user_id))
        return new HttpResponse(401, 'Unauthorized');

    if (!isset($wallet_id))
        return new HttpResponse(400, 'Wallet is required.');

    $connection = new Database('ledger', LedgerModel::class);

    $results = $connection->query(
        "
        SELECT
            l.*,
            li.`id` AS `line_id`,
            li.`wallet_id`,
            li.`account_id`,
            li.`description` AS `line_description`,
            li.`debit`,
            li.`credit`
        FROM
            `ledger` l
            JOIN `ledger_line` li
            ON li.`ledger_id` = l.`id`
        WHERE
            l.`user_id` = :user_id AND
            l.`status` >= :status AND
            li.`wallet_id` = :wallet_id
        ",
        ['user_id' => $user_id, 'wallet_id' => $wallet_id, 'status' => 1]
    );

    $ledgers = [];
    $current_id = 0;
    $current_ledger = null;

    foreach ($results as $result)
    {
        $id = $result['id'];

        if ($id != $current_id)
        {
            $current_id = $id;
            $current_ledger = new LedgerModel();

            $current_ledger->id = $result['id'];
            $current_ledger->user_id = $result['user_id'];
            $current_ledger->record_date = $result['record_date'];
            $current_ledger->record_type = $result['record_type'];
            $current_ledger->description = $result['description'];
            $current_ledger->lines = [];
            $current_ledger->status = $result['status'];

            $ledgers[] = $current_ledger;
        }

        $line = new LedgerLineModel();

        $line->id = $result['line_id'];
        $line->wallet_id = $result['wallet_id'];
        $line->account_id = $result['account_id'];
        $line->description = $result['line_description'];
        $line->debit = $result['debit'];
        $line->credit = $result['credit'];

        $current_ledger->lines[] = $line;
    }

    return new HttpResponse(200, $ledgers);
});
?>