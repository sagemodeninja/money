<?php
    function GetHost() {
        // TODO: Refactor.
        $isHttps = isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https';
        $protocol = $isHttps ? 'https://' : 'http://';
        
        echo $protocol . $_SERVER['HTTP_HOST'];
    }
?>