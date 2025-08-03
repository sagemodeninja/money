import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";
import { SelectQueryBuilder } from "@db/query/select-query-builder.ts";
import { WhereExpressionBuilder, WhereExpressionCallback } from "@db/query/expression/where.ts";
import { PaginationExpressionBuilder } from "./query/expression/pagination.ts";
import { OrderDirection, OrderExpressionBuilder } from "./query/expression/order.ts";
import { InsertQueryBuilder } from "./query/insert-builder.ts";

// deno-lint-ignore ban-types
export class Model<T extends {}> {
    private readonly _db: DB;
    private readonly _selectQueries: SelectQueryBuilder;
    private readonly _insertQueries: InsertQueryBuilder<T>[];

    public constructor(db: DB) {
        this._db = db;
        this._selectQueries = new SelectQueryBuilder();
        this._insertQueries = [];
    }

    public where(callback: WhereExpressionCallback<T>): Model<T> {
        const builder = callback(new WhereExpressionBuilder<T>());
        this._selectQueries.add('where', builder);
        return this;
    }

    public top(n: number): this {
        const builder = new PaginationExpressionBuilder("LIMIT", n);
        this._selectQueries.add("pagination", builder);
        return this;
    }

    public skip(n: number): this {
        const builder = new PaginationExpressionBuilder("OFFSET", n);
        this._selectQueries.add("pagination", builder);
        return this;
    }

    public orderBy(field: keyof T, direction: OrderDirection = "ASC"): this {
        const builder = new OrderExpressionBuilder(field as string, direction);
        this._selectQueries.add("order", builder);
        return this;
    }

    public add(...items: T[]): this {
        const queries = items.map(item => new InsertQueryBuilder(item));
        this._insertQueries.push(...queries);
        return this;
    }

    // Closures

    public all() {
        const { query, params } = this._selectQueries.build(this.table);
        const result = this._db.query(query, params);

        this.clear();
        return result;
    }

    public save() {
        for (const builder of this._insertQueries) {
            const { query, params } = builder.build(this.table);
            this._db.query(query, params);
        }
        return this.clear();
    }

    private clear(): this {
        // this._selectQueries.clear();
        this._insertQueries.length = 0;
        return this;
    }
}

// Define the Model interface to ensure the table property is available.
export interface Model<T> {
    table: string;
}

export function model(table: string) {
    // deno-lint-ignore no-explicit-any
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            public get table() {
                return table;
            }
        };
    }
}
