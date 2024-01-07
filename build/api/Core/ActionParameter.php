<?php
    namespace Core;

use ReflectionAttribute;
use ReflectionMethod;

    class ActionParameter {
        public static int $Route = 0;
        public static int $Query = 1;
        public static int $Body = 2;

        public int $type;
        public string $name;

        public function __construct(int $type, string $name)
        {
            $this->type = $type;
            $this->name = $name;
        }

        public static function getActionParameters(ReflectionMethod $action, ReflectionAttribute $method): array {
            $routeParams = ActionParameter::getRouteParameters($method);
            $queryParams = ActionParameter::getQueryParameters();

            // $methodAttribute = $method->newInstance();
            // $routePattern = $methodAttribute->getRoutePattern();

            // preg_match_all("/{([\w-]+)}/", $methodAttribute->path, $routeKeys, PREG_SET_ORDER);
            // preg_match("/$routePattern/", $uri->route, $routeValues);
            
            // $routeParams = [];

            // for ($i = 0; $i < count($routeKeys); $i++) {
            //     $key = $routeKeys[$i][1];
            //     $routeParams[$key] = $routeValues[$i + 1];
            // }

            return array_merge($routeParams, $queryParams);
        }

        private static function getRouteParameters(ReflectionAttribute $method): array {
            $attribute = $method->newInstance();

            $route = str_replace('/', '\\/', $attribute->route);
            $pattern = preg_replace('/{[\w-]+}/', '{(\w+)}', $route);

            $match = preg_match("/^$pattern$/", $attribute->route, $keys);

            if ($match != 1) return [];

            // TODO: Way too complicated here!
            return array_map(fn($match) => new ActionParameter(ActionParameter::$Route, $match), array_splice($keys, 1));
        }

        private static function getQueryParameters(): array {
            // var_dump($_GET);
            return [];
        }
    }
?>