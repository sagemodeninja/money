<?php
    namespace Core;

    class RequestUri {
        public string $href;
        public string $path;
        public ?string $query;
        public string $controller;
        public string $route;

        public function __construct(string $uri)
        {
            $href = trim($uri, '/');
            $uriComponents = parse_url($href);

            $path = trim($uriComponents['path'], '/');
            $routeFragments = explode('/', $path);

            $this->href = $href;
            $this->path = $path;
            $this->query = $uriComponents['query'] ?? null;
            
            // NOTE: The assumption is that the path follows the format "api/[controller]/[route]". 
            // The controller is extracted from the second segment (index 1) of the path,
            // and the route is constructed by joining the segments starting from the third segment (index 2)
            // skipping the "api" part.
            $this->controller = ucfirst(strtolower($routeFragments[1]));
            $this->route = implode('/', array_splice($routeFragments, 2));
        }
    }
?>