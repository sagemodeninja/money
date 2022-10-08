<?php
    include_once "../crud/_db_provider.php";
    
    $result = "";
    $conn = connect();
    
    if($conn) {
        $query = "SELECT act.Id, Shortcode, Title, ";
        $query .= "IFNULL(SUM(IF(Posted = 1 AND trn.`Status` = 1, Debit-Credit, 0)), 0) AS `Running`, IFNULL(IF(trn.`Status` = 1, SUM(Debit-Credit), 0), 0) AS `Projected` ";
        $query .= "FROM account act LEFT JOIN transaction trn ON trn.AccountId = act.Id WHERE act.`Status` = 1 GROUP BY act.Id;";
        $data = $conn->query($query);
        
        if($data) {
            if($data->num_rows > 0) {
                $result = "{'state': true, 'content': [";
                while($row = $data->fetch_assoc()) {
                    $id = $row["Id"];
                    $shortcode = $row["Shortcode"];
                    $title = str_replace("'", "**", $row["Title"]);
                    $running = $row["Running"];
                    $projected = $row["Projected"];
                    
                    $result .= "{'Id': $id, 'Shortcode': '$shortcode', 'Title': '$title', 'Running': $running, 'Projected': $projected},";
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