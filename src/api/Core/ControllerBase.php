<?php
    namespace Core;

    use ReflectionClass;
    use Exception;

    class ControllerBase {
        // TODO: Dependency injection...
        
        // TODO: Implement case-insensitive search.
        public static function getController(RequestUri $uri) {
            $name = ucfirst(strtolower($uri->controller));
            $namespace = 'Controllers\\' . $name . 'Controller';

            $class = new ReflectionClass($namespace);

            return $class->newInstance();
        }

        public function handleRequest(string $method, RequestUri $uri) {
            // FIXME: Does not capture all error!
            try {
                $request = HttpRequest::parse($this, $method, $uri);

                $method = $request->action->method;
                $httpMethod = $request->action->httpMethod;

                if (!isset($method)) {
                    return $this->NotFound();
                }

                // TODO: Auto parse request body to class and provide as arguments to action.
                // TODO: Auto parse query string and provide as arguments to action.
                $paramaters = $method->getParameters();
                $args = [];
                
                // TODO: Handle both body and query as parameters.
                if (!empty($paramaters))
                {
                    preg_match_all("/{([\w-]+)}/", $httpMethod->route, $routeKeys, PREG_SET_ORDER);
                    preg_match($httpMethod->getRoutePattern(), $uri->route, $routeValues);
                    
                    $routeParams = [];

                    for ($i = 0; $i < count($routeKeys); $i++) {
                        $key = $routeKeys[$i][1];
                        $routeParams[$key] = $routeValues[$i + 1];
                    }

                    foreach($paramaters as $paramater) {
                        $name = $paramater->getName();

                        if (array_key_exists($name, $routeParams)) {
                            $args[] = $routeParams[$name];
                        } else {
                            switch($_SERVER['CONTENT_TYPE']) {
                                case 'application/json':
                                    $body = file_get_contents('php://input');
                                    $args[] = json_decode($body);
                                    break;
                            }
                        }
                    }
                }

                $method->invoke($this, ...$args);
            } catch (Exception $ex) {
                $this->InternalServerError($ex->getMessage());
            }
        }

        protected function Ok($content = null) {
            http_response_code(400);

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

        protected function BadRequest($message = null) {
            http_response_code(400);
            echo $message;
        }

        protected function NotFound($message = null) {
            http_response_code(404);
            echo ($message ?? '404 Not Found');
        }

        protected function InternalServerError($message) {
            http_response_code(500);
            echo $message;
        }
    }
?>