<?php
    namespace Core;

    use ReflectionClass;
    use Exception;

    class ControllerBase {
        // TODO: Dependency injection...
        
        // TODO: Implement case-insensitive search.
        public static function getController(RequestUri $uri): ControllerBase {
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

                if (!isset($method))
                    return $this->NotFound();

                // TODO: Improve parsing/mapping of request body.
                $paramaters = $method->getParameters();
                $args = ParameterBinding::bind($request, $paramaters);

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