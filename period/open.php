<?php
    include_once "../crud/_db_provider.php";
    
    $result = "";
    $fromDate = @$_POST["FromDate"];
    
    // Close previous
    $conn = connect();
    if($conn) {
        $query = "UPDATE period SET ToDate = '$fromDate', `Status` = 0 WHERE `Status` = 1;";
        if($conn->query($query) !== TRUE) {
            $error = str_replace("'", "**", $conn->error);
            die( json_format( "{'state': false, 'content': '$error'}" ) );
        }

        $conn->close();
    } else {
        die( json_format( "{'state': false, 'content': 'An error occured.'}" ) );
    }

    // Open
    $conn = connect();
    if($conn) {
        $query = "INSERT INTO period (FromDate) VALUES ('$fromDate')";
        
        if ($conn->query($query) === FALSE) {
            $error = str_replace("'", "**", $conn->error);
            die( json_format("{'state': false, 'content': '$error'}") );
        }

        $conn->close();
    } else {
        die( json_format("{'state': false, 'content': 'An error occured.'}") );
    }

    // Get Id
    $newPeriodId = "";
    $conn = connect();
    if($conn) {
        $query = "SELECT Id FROM period WHERE `Status` = 1 LIMIT 1;";
        $data = $conn->query($query);
        
        if($data) {
            if($data->num_rows > 0) {
                $newPeriodId = $data->fetch_assoc()["Id"];
                $conn->close();
            }
            else
            {
                die( json_format("{'state': false, 'content': 'An error occured.'}") );
            }
        } else {
            $error = str_replace("'", "**", $conn->error);
            die( json_format("{'state': false, 'content': '$error'}") );
        }
    } else {
        die( json_format("{'state': false, 'content': 'An error occured.'}") );
    }

    // Switch periods
    $conn = connect();
    if($conn) {
        $query = "UPDATE transaction SET PeriodId = $newPeriodId WHERE Posted = 0 AND `Status` = 1;";
        
        if ($conn->query($query) === TRUE) {
            $result = "{'state': true, 'content': 'Period opened!'}";
        } else {
            $error = str_replace("'", "**", $conn->error);
            $result = "{'state': false, 'content': '$error'}";
        }
    } else {
        $result = "{'state': false, 'content': 'An error occured.'}";
    }
    
    echo json_format($result);
    $conn->close();

    function json_format($json) {
        return str_replace("**", "'", str_replace("'", "\"", $json));
    }
?>