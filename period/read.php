<?php
    include_once "../crud/_db_provider.php";
    
    $result = "";
    $conn = connect();
    
    if($conn) {
        $query = "SELECT Id, FromDate, ToDate, IF(`Status` = 1, 'Open', 'Closed') AS `Status` FROM period ORDER BY Id DESC;";
        $data = $conn->query($query);
        
        if($data) {
            if($data->num_rows > 0) {
                $result = "{'state': true, 'content': [";
                while($row = $data->fetch_assoc()) {
                    $id = $row["Id"];
                    $fromDate = $row["FromDate"];
                    $toDate = $row["ToDate"];
                    $status = $row["Status"];
                    
                    $result .= "{ 'Id': $id, 'FromDate': '$fromDate', 'ToDate': '$toDate', 'Status': '$status' },";
                }
                $result = rtrim($result, ",");
                $result .= "]}";
            } else {
                $result = "{'state': false, 'content': '0 rows found.'}";
            }
        } else {
            $error = str_replace("'", "**", $conn->error);
            $result = "{'state': false, 'content': '$error'}";
        }
    } else {
        $result = "{'state': false, 'content': 'An error occured.'}";
    }
    
    echo str_replace("**", "'", str_replace("'", "\"", $result));
?>