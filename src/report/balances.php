<?php
    include_once "../crud/_db_provider.php";

    $result = "";

    $conn = connect();
    if($conn) {
        $accountId = @$_GET["AccountId"];
        $query = "SELECT IFNULL(SUM(IF(Posted = 1, Debit-Credit, 0)), 0) AS `Running`, IFNULL(SUM(Debit-Credit), 0) AS `Projected` FROM transaction WHERE AccountId = $accountId AND `Status` = 1;";
        $data = $conn->query($query);
        
        if($data) {
            $row = $data->fetch_assoc();
            $result = "{'state': true, 'content': { 'Running': ".$row["Running"].", 'Projected': ".$row["Projected"]." }}";
        } else {
            $error = str_replace("'", "**", $conn->error);
            $result = "{'state': false, 'content': '$error'}";
        }
    } else {
        $result = "{'state': false, 'content': 'An error occured.'}";
    }
    
    $conn->close();
    echo json_format($result);

    function json_format($json) {
        return str_replace("**", "'", str_replace("'", "\"", $json));
    }
?>