<?php
    namespace Core;

    use Exception;
    use ReflectionObject;

    class Controller {
        // TODO: Dependency injection...

        public function handleRequest($method, $path) {
            // FIXME: Does not capture all error!
            try {
                $action = $this->getAction($method, $path);

                if (!isset($action))
                    return $this->NotFound();
    
                // TODO: Auto parse request body to class and provide as arguments to action.
                // TODO: Auto parse query string and provide as arguments to action.
                $args = [];
                
                // TODO: Handle both body and query as parameters.
                if (!empty($action->getParameters()))
                {
                    $paramater = $action->getParameters()[0];

                    switch($_SERVER['CONTENT_TYPE']) {
                        case 'application/json':
                            $body = file_get_contents('php://input');
                            $args[] = json_decode($body);
                            break;
                    }
                }

                $action->invoke($this, ...$args);
            } catch (Exception $ex) {
                $this->InternalServerError($ex->getMessage());
            }
        }

        // TODO: Methods for Ok, BadRequest, etc.

        protected function Ok($content = null) {
            if (is_array($content))
                return $this->Json(array_values($content));

            if (is_object($content))
                return $this->Json($content);

            echo $content;
        }

        protected function Json($content) {
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($content);
        }

        protected function NotFound($message = null) {
            http_response_code(404);
            echo ($message ?? '404 Not Found');
        }

        protected function InternalServerError($message) {
            http_response_code(500);
            echo $message;
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

                $argument = $attributes[0]->getArguments()[0] ?? '';

                if($argument == $subPath)
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

            if (count($parts) == 1)
                return '';

            $controller = $parts[0] . '/';
            return str_replace($controller, '', $path);
        }
    }
?>