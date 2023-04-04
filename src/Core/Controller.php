<?php
    namespace Core;

    use Exception;
    use ReflectionObject;
    use AutoMapperPlus\AutoMapper;
    use AutoMapperPlus\Configuration\AutoMapperConfig;

    class Controller {

        // TODO: Dependency injection...

        public function handleRequest($method, $path) {
            // FIXME: Does not capture error!
            try {
                $action = $this->getAction($method, $path);

                if (!isset($action)) $this->NotFound();
    
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
                            $data = json_decode($body);

                            $config = new AutoMapperConfig();
                            $class = $paramater->getType()->getName();
                            $config->registerMapping(\stdClass::class, $class);

                            $mapper = new AutoMapper($config);
                            $args[] = $mapper->map($data, $class);
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
            {
                header('Content-Type: application/json; charset=utf-8');
                echo json_encode(array_values($content));
                return;
            }

            if (is_object($content))
            {
                header('Content-Type: application/json; charset=utf-8');
                echo json_encode($content);
                return;
            }

            echo $content;
        }

        protected function NotFound($message = null) {
            http_response_code(404);
            die($message ?? '404 Not Found');
        }

        protected function InternalServerError($message) {
            http_response_code(500);
            die($message);
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
            $controller = $parts[0] . '/';

            if (count($parts) == 1)
                return '';

            return str_replace($controller, '', $path);
        }
    }
?>