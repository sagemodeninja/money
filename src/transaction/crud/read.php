<?php
    include_once "../../crud/_db_provider.php";
    
    $result = "";
    $conn = connect();
    
    if($conn) {
        $accountId = @$_GET["AccountId"];
        $query = "SELECT Id, `Date`, `Description`, Debit, Credit, Posted FROM transaction WHERE AccountId = $accountId AND Status = 1 ORDER BY Posted DESC, `Date` ASC, Id ASC;";
        $data = $conn->query($query);
        
        if($data) {
            if($data->num_rows > 0) {
                $result = "{'state': true, 'content': [";
                while($row = $data->fetch_assoc()) {
                    $id = $row["Id"];
                    $date = $row["Date"];
                    $description = str_replace("'", "**", $row["Description"]);
                    $debit = $row["Debit"];
                    $credit = $row["Credit"];
                    $posted = $row["Posted"];
                    
                    $result .= "{ 'Id': $id, 'Date': '$date', 'Description': '$description', 'Debit': $debit, 'Credit': $credit, 'Posted': $posted },";
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