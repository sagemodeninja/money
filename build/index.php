<?php
    $uri = $_SERVER['REQUEST_URI'];

    $uri = str_replace('index.php', '', $uri);
    
    if ($uri == '/') {
        $uri = '/home';
    }

    $file = 'app' . $uri . '/index.php';
    $included = @include_once $file;

    if (!$included) {
        http_response_code(404);
        exit;
    }
?>