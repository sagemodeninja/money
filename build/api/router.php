<?php
    require_once 'autoloader.php';

    use Core\ControllerBase;
    use Core\Http\HttpRequest;
    use Core\Http\HttpResponse;

    header("Access-Control-Allow-Origin: *");
    
    // TODO: Refactor this part!
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, OPTIONS");         
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }

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