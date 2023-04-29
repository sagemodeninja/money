<?php
    namespace Core;

    class Router {
        public static function handleRequest($method, $uri) {
            try
            {
                $path = Router::getPath($uri);
                $controllerName = Router::getControllerName($path);

                $reflection = new \ReflectionClass($controllerName);
                $controller = $reflection->newInstance();
    
                $controller->handleRequest($method, $path);
            } catch (\ReflectionException) {
                header("HTTP/1.0 404 Not Found");
                die('404 Not Found');
            }
        }

        private static function getPath($uri) {
            $uri = trim($uri, '/');
            $uri = str_replace('api', '', $uri);

            return $uri;
        }

        private static function getControllerName($path) {
            $path = ltrim($path, '/');
            $path = explode('/', $path)[0];
            $path = ucfirst($path);
            
            return 'Controllers\\' . $path . 'Controller';
        }
    }
?>