<?php
    require_once 'autoloader.php';

    Core\Router::handleRequest($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
?>