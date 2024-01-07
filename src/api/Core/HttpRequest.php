<?php
    namespace Core;

    use ReflectionObject;

    class HttpRequest {
        public string $method;
        public RequestUri $uri;
        public ?ControllerAction $action;
        public ?array $parameters;

        public function __construct(string $method, RequestUri $uri, ?ControllerAction $action) {
            $this->method = $method;
            $this->uri = $uri;
            $this->action = $action;
        }

        public static function parse(object $controller, string $method, RequestUri $uri): HttpRequest {
            $method = ucfirst(strtolower($method));
            $reflection = new ReflectionObject($controller);
            $actions = ControllerAction::getControllerActions($reflection);

            $matches = array_filter($actions, function (ControllerAction $action) use ($method, $uri) {
                $httpMethod = $action->httpMethod;
                return $httpMethod->getName() == $method && @preg_match($httpMethod->getRoutePattern(), $uri->route);
            });

            $action = current($matches) ?? null;
            
            return new HttpRequest($method, $uri, $action);
        }
    }
?>