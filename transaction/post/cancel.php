<?php
    include_once "../../crud/_db_provider.php";
    
    $result = "";
    $conn = connect();
    
    if($conn) {
        $json = file_get_contents('php://input');
        $data = json_decode($json);

        $id = $data->Id;
        $query = "UPDATE transaction SET Posted = 0 WHERE Id = $id;";
        
        if ($conn->query($query) === TRUE) {
            $result = "{'state': true, 'content': 'Transaction cancelled!'}";
        } else {
            $error = str_replace("'", "**", $conn->error);
            $result = "{'state': false, 'content': '$error'}";
        }
    } else {
        $result = "{'state': false, 'content': 'An error occured.'}";
    }
    
    header('Content-Type: application/json; charset=utf-8');
    echo str_replace("**", "'", str_replace("'", "\"", $result));
?>