import { resolveParamName } from "@db/query/params.ts";
import { IQuery, IQueryBuilder } from "@db/query/builder.ts";

// deno-lint-ignore ban-types
export class InsertQueryBuilder<T extends {}> implements IQueryBuilder {
    private readonly _item: T;

    public constructor(item: T) {
        this._item = item;
    }

    public build(table: string): IQuery {
        const query = ["INSERT INTO", table];
        const params = this.resolveParams();
        
        // Columns
        const keys = Object.keys(this._item);
        query.push(this.group(keys.join(", ")));

        // VALUES
        query.push("VALUES");

        // Values
        const names = Object.keys(params).map(param => `:${param}`);
        query.push(this.group(names.join(", ")));

        return {
            query: query.join(" "),
            params
        };
    }

    private resolveParams() {
        return Object.entries(this._item).reduce((params, [key, value]) => {
            const name = resolveParamName("i", key);
            return { ...params, [name]: value };
        }, {});
    }

    private group(clause: string) {
        return "(" + clause + ")";
    }
}
