<?php
    include_once "../crud/_db_provider.php";
    
    $periodId = @$_GET["PeriodId"];
    $periodInfo;
    $result = "";

    // Period
    $conn = connect();
    if($conn) {
        $query = "SELECT FromDate, ToDate, `Status` FROM period WHERE Id = $periodId;";
        $data = $conn->query($query);

        if($data) {
            if($data->num_rows > 0) {
                $periodInfo = $data->fetch_assoc();
            } else {
                die( json_format("{'state': false, 'content': 'Period not found.'}") );
            }
        } else {
            $error = str_replace("'", "**", $conn->error);
            die( json_format( "{'state': false, 'content': '$error'}" ) );
        }
    } else {
        die( json_format( "{'state': false, 'content': 'An error occured.'}" ) );
    }
    $conn->close();

    // Balancess
    $conn = connect();
    if($conn) {
        $accountId = @$_GET["AccountId"];
        $dateAsOf = $periodInfo["FromDate"];
        $query = "SELECT IFNULL(SUM(IF(`Date` < '$dateAsOf' AND Posted = 1, Debit-Credit, 0)), 0) AS `Beginning`, ";
        $query .= "IFNULL(SUM(IF(Posted = 1";
        if($periodInfo["Status"] == 0) {
            $query .= " AND `Date` < '". $periodInfo["ToDate"] ."'";
        }
        $query .= ", Debit-Credit, 0)), 0) AS `Running`, IFNULL(SUM(Debit-Credit), 0) AS `Projected` ";
        $query .= "FROM transaction WHERE AccountId = $accountId AND `Status` = 1;";
        $data = $conn->query($query);
        
        if($data) {
            $row = $data->fetch_assoc();
            $result = "{'state': true, 'content': { 'Beginning': ".$row["Beginning"].", 'Running': ".$row["Running"].", 'Projected': ".$row["Projected"]." }}";
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