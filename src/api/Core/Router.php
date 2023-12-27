<?php
    namespace Core;

    class Router {
        public static function handleRequest($method, $uri) {
            try
            {
                $uri = new RequestUri($uri);

                $controller = ControllerBase::getController($uri);
                $controller->handleRequest($method, $uri);
            }
            catch (\ReflectionException)
            {
                header("HTTP/1.0 404 Not Found");
                die('404 Not Found');
            }
        }
    }
?>