<?php
    include_once "../../crud/_db_provider.php";
    
    $result = "";
    $conn = connect();
    
    if($conn) {
        $id = @$_POST["id"];
        $query = "UPDATE {table} SET Status = 0 WHERE Id = $id;";
        
        if ($conn->query($query) === TRUE) {
            $result = "{'state': true, 'content': '{item} deleted!'}";
        } else {
            $error = str_replace("'", "**", $conn->error);
            $result = "{'state': false, 'content': '$error'}";
        }
    } else {
        $result = "{'state': false, 'content': 'An error occured.'}";
    }
    
    echo str_replace("**", "'", str_replace("'", "\"", $result));
?>