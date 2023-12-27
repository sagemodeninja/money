<?php
    namespace Core\Attributes;

    use Attribute;

    #[Attribute(Attribute::TARGET_METHOD)]
    class Patch extends HttpMethodAttribute {}
?>