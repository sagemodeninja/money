import { IExpression, IExpressionBuilder } from "@db/query/expression/builder.ts";

export type OrderDirection = "ASC" | "DESC";

export class OrderExpressionBuilder implements IExpressionBuilder {
    private readonly _field: string;
    private readonly _direction: OrderDirection;

    public constructor(field: string, direction: OrderDirection) {
        this._field = field;
        this._direction = direction;
    }

    public build(): IExpression {
        const clause = `${this._field} ${this._direction}`;
        return { clause, params: [] };
    }
}
