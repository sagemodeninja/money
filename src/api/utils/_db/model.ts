import { SelectQueryBuilder } from "@db/query/select-query-builder.ts";
import { WhereExpressionBuilder, WhereExpressionCallback } from "@db/query/expression/where.ts";

export class Model<T> {
    private readonly _queries: SelectQueryBuilder;

    public constructor() {
        this._queries = new SelectQueryBuilder();
    }

    public where(callback: WhereExpressionCallback<T>): Model<T> {
        const builder = new WhereExpressionBuilder<T>();
        this._queries.add('where', builder);
        callback(builder);
        return this;
    }

    // Closures

    public all() {
        return this._queries.build("<table>");
    }
}
