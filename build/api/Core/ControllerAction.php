<?php
    namespace Core;

    use ReflectionAttribute;
    use ReflectionObject;
    use ReflectionMethod;
    use Core\Attributes\HttpMethodAttribute;
    use Core\Http\HttpRequest;
    use Core\Http\HttpResponse;

    class ControllerAction {
        public ReflectionMethod $method;
        public HttpMethodAttribute $httpMethod;

        public function __construct(ReflectionMethod $method, HttpMethodAttribute $httpMethod)
        {
            $this->method = $method;
            $this->httpMethod = $httpMethod;
        }

        public static function getControllerAction(object $controller, HttpRequest $request): ?ControllerAction {
            $reflection = new ReflectionObject($controller);
            $actions = ControllerAction::getControllerActions($reflection);

            $matches = array_filter($actions, function (ControllerAction $action) use ($request) {
                return $action->requestMatch($request);
            });

            $match = current($matches);
            return $match ? $match : null;
        }
        
        private static function getControllerActions(ReflectionObject $controller): array {
            $actions = [];
            
            $methods = $controller->getMethods(ReflectionMethod::IS_PUBLIC);
            
            foreach ($methods as $method) {
                $attributes = $method->getAttributes(HttpMethodAttribute::class, ReflectionAttribute::IS_INSTANCEOF);
                
                if (empty($attributes)) continue;
                
                $attribute = current($attributes);
                $httpMethod = $attribute->newInstance();
                
                $actions[] = new ControllerAction($method, $httpMethod);
            }
            
            return $actions;
        }

        public function handle(ControllerBase $controller, HttpRequest $request): HttpResponse {
            // TODO: Improve parsing/mapping of request body.
            $args = ParameterBinding::bind($request, $this);
            return $this->method->invoke($controller, ...$args);
        }

        private function requestMatch(HttpRequest $request): bool {
            $uri = $request->uri;
            $method = $request->method;
            $httpMethod = $this->httpMethod;

            return $httpMethod->getName() == $method && @preg_match($httpMethod->getRoutePattern(), $uri->route);
        }
    }
?>