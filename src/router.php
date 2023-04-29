<?php
    require_once 'autoloader.php';
    require_once 'vendor/autoload.php';        

    Core\Router::handleRequest($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
?>