<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . "/secrets.php";

    function connect() {
        return @mysqli_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB);
    }
?>