<?php
    include_once "../../crud/_db_provider.php";
    
    $result = "";
    $conn = connect();
    
    if($conn) {
        $id = @$_POST["id"];
        # Use this to escape single qoutes.
        $text = str_replace("'", "''", @$_POST["text"]);
        $query = "UPDATE {table} SET {changes} WHERE Id = $id";
        
        if ($conn->query($query) === TRUE) {
            $result = "{'state': true, 'content': '{item} updated!'}";
        } else {
            $error = str_replace("'", "**", $conn->error);
            $result = "{'state': false, 'content': '$error'}";
        }
    } else {
        $result = "{'state': false, 'content': 'An error occured.'}";
    }
    
    echo str_replace("**", "'", str_replace("'", "\"", $result));
?>