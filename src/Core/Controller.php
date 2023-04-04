<?php
    namespace Core;

    use ReflectionObject;

    class Controller {

        // TODO: Dependency injection...

        public function handleRequest($method, $path) {
            $action = $this->getAction($method, $path);

            if (!isset($action)) $this->NotFound();

            // TODO: Auto parse request body to class and provide as arguments to action.
            // TODO: Auto parse query string and provide as arguments to action.

            $action->invoke($this);
        }

        // TODO: Methods for Ok, BadRequest, etc.

        protected function NotFound($message = null) {
            header("HTTP/1.0 404 Not Found");
            die($message ?? '404 Not Found');
        }

        private function getAction($method, $path) {
            $methodAttribute = Controller::getMethodAttributeName($method);
            $subPath = Controller::getSubPath($path);
            
            $reflection = new ReflectionObject($this);
            $reflectionMethods = $reflection->getMethods();
            
            foreach($reflectionMethods as $reflectionMethod)
            {
                $attributes = $reflectionMethod->getAttributes($methodAttribute);

                if (empty($attributes)) continue;

                $arguments = $attributes[0]->getArguments();
                
                if($arguments[0] ?? '' == $subPath)
                    return $reflectionMethod;
            }

            return null;
        }

        private static function getMethodAttributeName($method) {
            $attribute = ucfirst(strtolower($method));
            return 'Core\\Attributes\\' . $attribute;
        }

        private static function getSubPath($path) {
            $path = ltrim($path, '/');
            $parts = explode('/', $path);
            $controller = $parts[0] . '/';

            if (count($parts) == 1)
                return '';

            return str_replace($controller, '', $path);
        }
    }
?>