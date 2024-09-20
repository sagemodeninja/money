<?php
include_once '../../http/http_response.php';

class HttpRequest
{
    public string $method;
    public array $params;
    public mixed $body;
    public array $files;

    public function __construct() {
        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->params = $_GET;
        $this->body = self::parseBody();
        $this->files = $_FILES; 
    }

    public static function handle(string $method, callable $predicate)
    {
        $request = new HttpRequest();

        $response = $request->method != $method
            ? new HttpResponse(405)
            : $predicate($request);

        $response->serve();
    }

    /* Concatenates request bodies across multiple sources depending on
    its content-type. */
    private static function parseBody()
    {
        $supportedMethods = ['POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'TRACE'];

        if (!in_array($_SERVER['REQUEST_METHOD'], $supportedMethods))
        {
            return null;
        }

        switch(self::getMimeType())
        {
            case 'multipart/form-data':
            case 'application/x-www-form-urlencoded':
                return $_POST;
            case 'application/json':
                $rawBody = self::getRawBody();
                return json_decode($rawBody, true);
            default:
                return self::getRawBody();
        }
    }

    private static function getMimeType()
    {
        $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
        $parts = explode(';', $contentType);
        return trim($parts[0]);
    }

    private static function getRawBody()
    {
        return file_get_contents('php://input');
    }
}
?>