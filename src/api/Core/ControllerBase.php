<?php
    namespace Core;

    use ReflectionClass;
    use Exception;
    use Core\Http\HttpRequest;
    use Core\Http\HttpResponse;

    class ControllerBase {
        // TODO: Dependency injection...
        
        // TODO: Implement case-insensitive search.
        public static function getController(HttpRequest $request): ?ControllerBase {
            $name = $request->uri->controller;
            $namespace = 'Controllers\\' . $name . 'Controller';

            if(!class_exists($namespace)) return null;

            $class = new ReflectionClass($namespace);
            return $class->newInstance();
        }

        public function handleRequest(HttpRequest $request): HttpResponse {
            try {
                $action = ControllerAction::getControllerAction($this, $request);
                
                if (!isset($action))
                    return $this->NotFound();
                
                return $action->handle($this, $request);
            } catch (Exception $ex) {
                // FIXME: Does not capture all error!
                return $this->InternalServerError($ex);
            }
        }

        protected function StatusCode(int $statusCode, ?object $content): HttpResponse {
            return new HttpResponse($statusCode, $content);
        }

        protected function Ok($content = null) {
            return new HttpResponse(200, $content);
        }

        protected function Created($content = null) {
            return new HttpResponse(201, $content);
        }

        protected function NoContent() {
            return new HttpResponse(204);
        }

        protected function BadRequest($content = null) {
            return new HttpResponse(400, $content);
        }
        
        protected function NotFound($content = null) {
            return new HttpResponse(404, $content ?? '404 Not Found');
        }
        
        protected function InternalServerError($content = null) {
            return new HttpResponse(500, $content);
        }
    }
?>