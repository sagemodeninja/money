<?php
    namespace Core;

    use Core\Http\HttpRequest;

    class ParameterBinding {
        // TODO: Handle both body and query as parameters.
        public static function bind(HttpRequest $request, ControllerAction $action): array {
            $args = [];

            $routeParams = ParameterBinding::getRouteParameters($request, $action);
            $requestParams = array_merge($routeParams, $_GET);

            $parameters = $action->method->getParameters();

            foreach($parameters as $parameter) {
                $name = $parameter->getName();

                if (array_key_exists($name, $requestParams)) {
                    $args[] = $requestParams[$name];
                    continue;
                }

                if ($_SERVER['CONTENT_TYPE'] == 'application/json') {
                    $body = file_get_contents('php://input');
                    $args[] = json_decode($body);
                }
            }

            return $args;
        }

        private static function getRouteParameters(HttpRequest $request, ControllerAction $action): array {
            $uri = $request->uri;
            $httpMethod = $action->httpMethod;
            
            preg_match($httpMethod->getBindingPattern(), $httpMethod->route, $keys);
            preg_match($httpMethod->getRoutePattern(), $uri->route, $values);
            
            $params = [];
            
            for ($i = 1; $i < count($keys); $i++) {
                $key = $keys[$i];
                $params[$key] = $values[$i];
            }

            return $params;
        }
    }
?>