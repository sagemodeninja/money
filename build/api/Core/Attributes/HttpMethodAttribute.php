<?php
    namespace Core\Attributes;

    class HttpMethodAttribute {
        public $route;

        public function __construct($route = "")
        {
            $this->route = $route;
        }
        
        public function getName() {
            $namespace = 'Core\\Attributes\\';
            $name = str_replace($namespace, '', static::class);

            return $name;
        }

        public function getRoutePattern() {
            $route = str_replace('/', '\\/', $this->route);
            $pattern = preg_replace('/{[\w-]+}/', '(\w+)', $route);

            return "/^$pattern$/";
        }

        public function getBindingPattern() {
            $routePattern = $this->getRoutePattern();
            return str_replace('(\w+)', '{(\w+)}', $routePattern);
        }
    }
?>