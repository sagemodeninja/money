<?php
    namespace Core;

    use Core\Attributes\HttpMethodAttribute;
    use ReflectionAttribute;
    use ReflectionObject;
    use ReflectionMethod;

    class ControllerAction {
        public ReflectionMethod $method;
        public HttpMethodAttribute $httpMethod;

        public function __construct(ReflectionMethod $method, HttpMethodAttribute $httpMethod)
        {
            $this->method = $method;
            $this->httpMethod = $httpMethod;
        }

        public static function getControllerActions(ReflectionObject $controller): array {
            $methods = $controller->getMethods(ReflectionMethod::IS_PUBLIC);
            $actions = [];

            foreach ($methods as $method) {
                $attributes = $method->getAttributes(HttpMethodAttribute::class, ReflectionAttribute::IS_INSTANCEOF);

                if (empty($attributes)) continue;

                $attribute = current($attributes);
                $httpMethod = $attribute->newInstance();

                $actions[] = new ControllerAction($method, $httpMethod);
            }

            return $actions;
        }
    }
?>