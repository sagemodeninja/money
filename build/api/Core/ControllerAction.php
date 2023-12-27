<?php
    namespace Core;

use Core\Attributes\HttpMethodAttribute;
use ReflectionAttribute;
use ReflectionObject;
    use ReflectionMethod;

    class ControllerAction {
        public ReflectionMethod $action;
        public ReflectionAttribute $method;
        public array $parameters;

        public function __construct(ReflectionMethod $action, ReflectionAttribute $method, array $parameters)
        {
            $this->action = $action;
            $this->method = $method;
            $this->parameters = $parameters;
        }

        public static function getControllerActions(object $controller): array {
            $controllerObject = new ReflectionObject($controller);
            $methods = $controllerObject->getMethods(ReflectionMethod::IS_PUBLIC);

            $actions = array_map(function (ReflectionMethod $method) {
                $attributes = $method->getAttributes(HttpMethodAttribute::class, ReflectionAttribute::IS_INSTANCEOF);

                if (empty($attributes)) return null;

                $attribute = current($attributes);
                $parameters = ActionParameter::getActionParameters($method, $attribute);

                return new ControllerAction($method, $attribute, $parameters);
            }, $methods);

            return array_filter($actions);
        }
    }
?>