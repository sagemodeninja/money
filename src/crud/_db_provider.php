<?php
    function connect() {
        $server = "localhost";
        
        # Local...
        # $user = "root";
        # $pass = "msql_M@1n_@dm1n";
        # $db = "money";
        
        # Production...
        $user = "u562775109_admin_finance";
        $pass = "msql_M@1n_@dm1n";
        $db = "u562775109_finance";
        
        return @mysqli_connect($server, $user, $pass, $db);
    }
?>