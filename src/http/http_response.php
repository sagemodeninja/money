<?php
class HttpResponse
{
    private readonly int $_statusCode;
    private readonly mixed $_content;

    private array $_headers = [];

    public function __construct(int $statusCode, mixed $content = null, string $contentType = null)
    {
        $content = self::resolveContent($content);

        $this->_statusCode = $statusCode;
        $this->_content = $content['content'];
        
        $this->addHeader('Content-Type', $contentType ?? $content['type']);
    }

    public function addHeader(string $name, string $value)
    {
        $this->_headers[$name] = $value;
    }

    public function serve()
    {
        http_response_code($this->_statusCode);

        # Headers
        foreach($this->_headers as $header => $value)
        {
            header("$header: $value");
        }

        echo $this->_content;
    }

    private static function resolveContent(mixed $raw)
    {
        if (is_array($raw)) {
            $type = 'application/json; charset=utf-8';
            $content = json_encode(array_values($raw));
        }
        
        if (is_object($raw)) {
            $type = 'application/json; charset=utf-8';
            $content = json_encode($raw);
        }

        return [
            'type' => $type ?? 'text/html',
            'content' => $content ?? strval($raw)
        ];
    }
}
?>