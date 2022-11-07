<?php
    include_once "../../crud/_db_provider.php";
    
    $result = "";
    $conn = connect();
    
    if($conn) {
        $accountId = @$_POST["AccountId"];
        $date = @$_POST["Date"];
        $description = str_replace("'", "''", @$_POST["Description"]);
        $debit = @$_POST["Debit"];
        $credit = @$_POST["Credit"];
        $query = "INSERT INTO transaction (PeriodId, AccountId, `Date`, `Description`, Debit, Credit) VALUES (0, $accountId, '$date', '$description', $debit, $credit);";
        
        if ($conn->query($query) === TRUE) {
            $result = "{'state': true, 'content': 'Transaction created!'}";
        } else {
            $error = str_replace("'", "**", $conn->error);
            $result = "{'state': false, 'content': '$error'}";
        }
    } else {
        $result = "{'state': false, 'content': 'An error occured.'}";
    }
    
    echo str_replace("**", "'", str_replace("'", "\"", $result));
?>