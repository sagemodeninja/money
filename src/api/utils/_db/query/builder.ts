export interface IQuery {
    query: string;
    // deno-lint-ignore no-explicit-any
    params: Record<string, any>;
}

export interface IQueryBuilder {
    build(table: string): IQuery;
}
