type RouteHandler = (request: Request) => Promise<Response>;

export class Router {
    private readonly _routes: Map<string, RouteHandler>;

    public get handler() {
        return this.handle.bind(this);
    }

    public constructor() {
        this._routes = new Map();
    }

    public get(path: string, handler: RouteHandler) {
        this.addRoute('GET', path, handler);
    }

    public post(path: string, handler: RouteHandler) {
        this.addRoute('POST', path, handler);
    }

    public put(path: string, handler: RouteHandler) {
        this.addRoute('PUT', path, handler);
    }

    public patch(path: string, handler: RouteHandler) {
        this.addRoute('PATCH', path, handler);
    }

    public delete(path: string, handler: RouteHandler) {
        this.addRoute('DELETE', path, handler);
    }

    private addRoute(method: string, path: string, handler: RouteHandler) {
        const route = this.buildRouteKey(method, path);
        this._routes.set(route, handler);
    }

    // Normalize the path and prepend the HTTP method to create a unique route key
    private buildRouteKey(method: string, path: string) {
        path = path
            .trim()
            .replace(/[-\/\s]/g, '_')
            .toLowerCase();
        return `${method}:${path}`;
    }

    private async handle(request: Request): Promise<Response> {
        const { pathname } = new URL(request.url);
        const handler = this.resolveRouteHandler(request);

        if (!handler)
            return new Response(`Cannot find route '${pathname}'.`, { status: 404 });

        return await handler(request);
    }

    private resolveRouteHandler(request: Request) {
        const { pathname } = new URL(request.url);
        const route = this.buildRouteKey(request.method, pathname);
        return this._routes.get(route);
    }
}