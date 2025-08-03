import { IQueryParam } from "@db/query/params.ts";

export interface IExpression {
    clause: string;
    params: IQueryParam[];
}

export interface IExpressionBuilder {
    build(): IExpression;
}
