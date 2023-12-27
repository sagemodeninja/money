<?php
    namespace Core\Attributes;

    class HttpMethodAttribute {
        public $route;

        public function __construct($route = "")
        {
            $this->route = $route;
        }

        public function getRoutePattern() {
            $route = str_replace('/', '\\/', $this->route);
            $pattern = preg_replace('/{[\w-]+}/', '(\w+)', $route);

            return $pattern;
        }
    }
?>