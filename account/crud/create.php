<?php
    include_once "../../includes/db_provider.php";
    
    $result = "";
    $conn = connect();
    
    if($conn) {
        $shortcode = @$_POST["Shortcode"];
        $title = str_replace("'", "''", @$_POST["Title"]);
        $categoryId = @$_POST["CategoryId"];
        $accountNumber = @$_POST["AccountNumber"];
        $bankIcon = @$_POST["BankIcon"];
        
        $accountNumberValue = empty($accountNumber) ? "null" : "'$accountNumber'";
        $bankIconValue = empty($bankIcon) ? "null" : "'$bankIcon'";
        
        $query = "call spInsertAccount('$shortcode', '$title', $categoryId, $accountNumberValue, $bankIconValue)";
        
        if ($conn->query($query) === TRUE) {
            $result = "{'state': true, 'content': 'Account created!'}";
        } else {
            $error = str_replace("'", "**", $conn->error);
            $result = "{'state': false, 'content': '$error'}";
        }
    } else {
        $result = "{'state': false, 'content': 'An error occured.'}";
    }
    
    echo str_replace("**", "'", str_replace("'", "\"", $result));
?>