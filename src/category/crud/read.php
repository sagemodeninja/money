<?php
    include_once "../../includes/db_provider.php";
    
    $result = "";
    $conn = connect();
    
    if($conn) {
        $query = "call spRetrieveCategories();";
        $data = $conn->query($query);
        
        if($data) {
            if($data->num_rows > 0) {
                $result = "{'state': true, 'content': [";
                while($row = $data->fetch_assoc()) {
                    $id = $row["Id"];
                    $title = str_replace("'", "**", $row["Title"]);
                    $color = $row["Color"];
                    $order = $row["Order"];
                    
                    $result .= "{'Id': $id, 'Title': '$title', 'Color': '$color', 'Order': $order},";
                }
                $result = rtrim($result, ",");
                $result .= "]}";
            } else {
                $result = "{'state': false, 'content': '0 rows found.'}";
            }
        }
        else
        {
            $error = str_replace("'", "**", $conn->error);
            $result = "{'state': false, 'content': '$error'}";
        }
    } else {
        $result = "{'state': false, 'content': 'An error occured.'}";
    }
    
    echo str_replace("**", "'", str_replace("'", "\"", $result));
?>