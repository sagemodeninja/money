<?php
    namespace Core;

    class HttpResponse {
        public int $statusCode;
        public mixed $content;
        public array $headers;

        public function __construct(int $statusCode, mixed $content = null) {
            $this->statusCode = $statusCode;
            $this->content = $content;
            $this->headers = [];
        }
    }
?>