<?php
    require_once 'autoloader.php';

    use Core\ControllerBase;
    use Core\HttpRequest;
    use Core\HttpResponse;

    class Router {
        public static function handle(): HttpResponse {
            $request = new HttpRequest($_SERVER);
            $controller = ControllerBase::getController($request);

            if (!isset($controller))
                return new HttpResponse(404);
            
            return $controller->handleRequest($request);
        }

        public static function serveResponse(HttpResponse $response): void {
            $content = $response->content;

            http_response_code($response->statusCode);

            if (is_array($content)) {
                header('Content-Type: application/json; charset=utf-8');
                $content = json_encode(array_values($content));
            }

            if (is_object($content)) {
                header('Content-Type: application/json; charset=utf-8');
                $content = json_encode($content);
            }

            die($content);
        }
    }

    $response = Router::handle();
    Router::serveResponse($response);
?>