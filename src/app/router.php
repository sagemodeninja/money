<?php
    $uri = $_SERVER['REQUEST_URI'];

    $uri = str_replace('index.php', '', $uri);
    
    if ($uri == '/') {
        $uri = '/home';
    }

    $file = __DIR__ . '/' . $uri . '/index.php';

    if (!file_exists($file)) {
        http_response_code(404);
        exit;
    }

    include_once $file;
?>