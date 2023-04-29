<?php
    namespace Core\Attributes;

    use Attribute;

    #[Attribute(Attribute::TARGET_METHOD)]
    class Post extends HttpMethodAttribute {
        public $path;

        public function __construct($path)
        {
            $this->path = $path;
        }
    }
?>