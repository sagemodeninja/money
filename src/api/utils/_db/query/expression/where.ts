import { toSnakeCase } from "jsr:@std/text/to-snake-case";
import { IQueryParam } from "@db/query/params.ts";
import { IExpression, IExpressionBuilder } from "@db/query/expression/builder.ts";

export type LogicalOperator = "AND" | "OR";

export interface IOperationExpression {
    build(params: Record<string, number>): IExpression;
}

export class ComparisonOperationExpression<T> implements IOperationExpression {
    private readonly _field: string;
    private readonly _operator: string;
    private readonly _value: T[keyof T];

    public constructor(field: keyof T, operator: string, value: T[keyof T]) {
        this._field = field as string;
        this._operator = operator;
        this._value = value;
    }

    public build(params: Record<string, number>): IExpression {
        const param = this.resolveParam(params, this._field, this._value);
        const clause = [this._field, this._operator, `:${param.name}`].join(" ");
        return { clause, params: [param] };
    }

    // deno-lint-ignore no-explicit-any
    private resolveParam(params: Record<string, number>, field: string, value: any): IQueryParam {
        const count = params[field] ?? 0;
        const name = ["w", toSnakeCase(field), count].join("_");
        
        params[field] = count + 1;

        return {
            name: name,
            value
        };
    }
}

export class LogicalOperationExpression implements IOperationExpression {
    private readonly _operator: LogicalOperator;
    private readonly _left: IOperationExpression;
    private readonly _right: IOperationExpression;

    public constructor(operator: LogicalOperator, left: IOperationExpression, right: IOperationExpression) {
        this._operator = operator;
        this._left = left;
        this._right = right;
    }

    public build(params: Record<string, number>): IExpression {
        const left = this.resolve(this._left, params);
        const right = this.resolve(this._right, params);

        return {
            clause: [left.clause, this._operator, right.clause].join(" "),
            params: [ ...left.params, ...right.params ]
        };
    }

    private resolve(exp: IOperationExpression, params: Record<string, number>): IExpression {
        const result = exp.build(params);
        const isLogical = exp instanceof LogicalOperationExpression;

        return {
            clause: isLogical ? `(${result.clause})` : result.clause,
            params: result.params
        };
    }
}

export class WhereExpressionBuilder<T> implements IExpressionBuilder {
    private readonly _expressions: IOperationExpression[];
    private readonly _params: Record<string, number>;

    public constructor() {
        this._expressions = [];
        this._params = {};
    }

    // Comparison operators
    public eq<K extends keyof T>(left: K, right: T[K]): this {
        const ex = new ComparisonOperationExpression(left, "=", right);
        return this.push(ex);
    }

    public ne<K extends keyof T>(left: K, right: T[K]): this {
        const ex = new ComparisonOperationExpression(left, "!=", right);
        return this.push(ex);
    }

    public gt<K extends keyof T>(left: K, right: T[K]): this {
        const ex = new ComparisonOperationExpression(left, ">", right);
        return this.push(ex);
    }

    public lt<K extends keyof T>(left: K, right: T[K]): this {
        const ex = new ComparisonOperationExpression(left, "<", right);
        return this.push(ex);
    }

    public ge<K extends keyof T>(left: K, right: T[K]): this {
        const ex = new ComparisonOperationExpression(left, ">=", right);
        return this.push(ex);
    }

    public le<K extends keyof T>(left: K, right: T[K]): this {
        const ex = new ComparisonOperationExpression(left, "<=", right);
        return this.push(ex);
    }

    // Logical operators
    public and(builder: WhereExpressionBuilder<T>): this {
        const [left, right] = builder._expressions.splice(-2);
        const ex = new LogicalOperationExpression('AND', left, right);
        return this.push(ex);
    }

    public or(builder: WhereExpressionBuilder<T>): this {
        const [left, right] = builder._expressions.splice(-2);
        const ex = new LogicalOperationExpression('OR', left, right);
        return this.push(ex);
    }

    // Utilities
    public build(): IExpression {
        const [first, ...rest] = this._expressions;
        return rest.reduce((result, exp) => {
            const { clause, params } = exp.build(this._params)

            result.clause += " " + clause;
            result.params.push(...params);

            return result;
        }, first.build(this._params));
    }

    private push(ex: IOperationExpression): this {
        this._expressions.push(ex);
        return this;
    }
}

export type WhereExpressionCallback<T> = (builder: WhereExpressionBuilder<T>) => void;
