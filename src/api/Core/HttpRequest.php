<?php
    namespace Core;

    class HttpRequest {
        public string $method;
        public RequestUri $uri;

        public function __construct(array $server) {
            $this->uri = new RequestUri($server['REQUEST_URI']);
            $this->method = ucfirst(strtolower($server['REQUEST_METHOD']));
        }
    }
?>