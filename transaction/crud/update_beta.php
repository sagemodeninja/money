<?php
    include_once "../../crud/_db_provider.php";
    
    $result = "";
    $conn = connect();
    
    if($conn) {
        $id = @$_POST["Id"];
        $date = @$_POST["Date"];
        $description = str_replace("'", "''", @$_POST["Description"]);
        $debit = @$_POST["Debit"];
        $credit = @$_POST["Credit"];
        $query = "UPDATE transaction SET `Date` = '$date', `Description` = '$description', Debit = $debit, Credit = $credit WHERE Id = $id";
        
        if ($conn->query($query) === TRUE) {
            $result = "{'state': true, 'content': 'Transaction updated!'}";
        } else {
            $error = str_replace("'", "**", $conn->error);
            $result = "{'state': false, 'content': '$error'}";
        }
    } else {
        $result = "{'state': false, 'content': 'An error occured.'}";
    }
    
    echo str_replace("**", "'", str_replace("'", "\"", $result));
?>