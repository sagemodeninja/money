import { IQuery, IQueryBuilder } from "@db/query/builder.ts";
import { IExpressionBuilder } from "@db/query/expression/builder.ts";
import { IQueryParam } from "./params.ts";

type SelectQueryTypes = "where" | "order" | "pagination";

interface ExpressionCollection {
    type: SelectQueryTypes;
    builder: IExpressionBuilder;
}

export class SelectQueryBuilder implements IQueryBuilder {
    private _expressions: ExpressionCollection[] = [];

    public add(type: SelectQueryTypes, expression: IExpressionBuilder) {
        this._expressions.push({ type, builder: expression });
    }

    public build(table: string): IQuery {
        const query = ["SELECT * FROM", table];
        const { params, ...expressions } = this.buildExpressions();

        const where = expressions["where"];
        if (where.length > 0) {
            query.push("WHERE", where.join(" "));
        }

        const order = expressions["order"];
        if (order.length > 0) {
            query.push("ORDER BY", order.join(", "));
        }

        const pagination = expressions["pagination"];
        if (pagination.length > 0) {
            pagination.sort(); // Makes sure that LIMIT comes first.
            query.push(...pagination);
        }

        // Clear the expressions after building the query...
        this._expressions.length = 0;

        return {
            query: query.join(" "),
            params: params.reduce(
                (acc, param) => ({ ...acc, [param.name]: param.value }),
                // deno-lint-ignore no-explicit-any
                {} as Record<string, any>
            )
        }
    }

    private buildExpressions() {
        const results = {
            where: Array<string>(),
            order: Array<string>(),
            pagination: Array<string>(),
            params: Array<IQueryParam>(),
        };

        for (const expression of this._expressions) {
            const { type, builder } = expression;
            const { clause, params } = builder.build();

            results[type].push(clause);
            results.params.push(...params);
        }

        return results;
    }
}
