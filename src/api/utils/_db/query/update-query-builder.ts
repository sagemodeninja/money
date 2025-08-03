import { Entity } from "@db/model.ts";
import { resolveParamName } from "@db/query/params.ts";
import { IQuery, IQueryBuilder } from "@db/query/builder.ts";

export class UpdateQueryBuilder<T extends Entity> implements IQueryBuilder {
    private readonly _item: T;

    public constructor(item: T) {
        this._item = item;
    }

    public build(table: string): IQuery {
        const query = ["UPDATE", table];
        const params = this.resolveParams();
        const { id, ...changes } = this._item;
        
        // SET
        const set = Object.keys(changes).map(key => `${key} = :${resolveParamName("u", key)}`);
        query.push("SET", set.join(", "));

        // WHERE
        query.push("WHERE", "id = :u_id_0");

        return {
            query: query.join(" "),
            params
        };
    }

    private resolveParams() {
        return Object.entries(this._item).reduce((params, [key, value]) => {
            const name = resolveParamName("u", key);
            return { ...params, [name]: value };
        }, {});
    }
}