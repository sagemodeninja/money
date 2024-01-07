<?php
    require_once 'autoloader.php';

    use Core\RequestUri;
    use Core\ControllerBase;

    class Router {
        public static function handle() {
            try
            {
                $method = ucfirst(strtolower($_SERVER['REQUEST_METHOD']));
                $uri = new RequestUri($_SERVER['REQUEST_URI']);

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

    Router::handle();
?>