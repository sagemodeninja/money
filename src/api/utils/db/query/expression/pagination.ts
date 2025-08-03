import { IExpression, IExpressionBuilder } from "@db/query/expression/builder.ts";
import { resolveParam } from "@db/query/params.ts";

export type PaginationType = "LIMIT" | "OFFSET";

export class PaginationExpressionBuilder implements IExpressionBuilder {
    private readonly _type: PaginationType;
    private readonly _value: number;

    public constructor(type: PaginationType, value: number) {
        this._type = type;
        this._value = value;
    }

    public build(): IExpression {
        const param = resolveParam("p", this._type, this._value);
        const clause = `${this._type} :${param.name}`;
        return { clause, params: [param] };
    }
}
