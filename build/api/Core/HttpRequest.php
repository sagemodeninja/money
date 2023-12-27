<?php
    namespace Core;

    use ReflectionObject;
    use ReflectionMethod;

    class HttpRequest {
        public string $method;
        public RequestUri $path;
        public ?ReflectionMethod $action;
        public ?array $parameters;

        public static function parse(object $controller, string $method, RequestUri $path): HttpRequest {
            $method = ucfirst(strtolower($method));
            $attributeName = 'Core\\Attributes\\' . $method;

            $actions = ControllerAction::getControllerActions($controller);
            
            // echo(json_encode($actions));
            die();
            // var_dump($actions);

            $reflection = new ReflectionObject($controller);
            $actions = $reflection->getMethods(ReflectionMethod::IS_PUBLIC);

            $matches = array_filter($actions, function ($action) use ($attributeName, $path) {
                $attributes = $action->getAttributes($attributeName);

                if (empty($attributes)) return false;

                $attribute = $attributes[0]->newInstance();
                $routePattern = $attribute->getRoutePattern();
                
                return @preg_match("/^$routePattern$/", $path->route);
            });

            $action = count($matches) ? current($matches) : null;
            
            $request = new HttpRequest();

            $request->method = $method;
            $request->path = $path;
            $request->action = $action;

            return $request;
        }
    }
?>