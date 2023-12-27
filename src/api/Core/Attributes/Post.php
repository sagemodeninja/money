<?php
    namespace Core\Attributes;

    use Attribute;

    #[Attribute(Attribute::TARGET_METHOD)]
    class Post extends HttpMethodAttribute {}
?>