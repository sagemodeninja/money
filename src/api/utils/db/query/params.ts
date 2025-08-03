import { toSnakeCase } from "jsr:@std/text/to-snake-case";

export interface IQueryParam {
    name: string;
    // deno-lint-ignore no-explicit-any
    value: any;
}

export function resolveParamName(prefix: string, field: string, counter: Record<string, number> = {}): string {
    const count = counter[field] ?? 0;
    const name = prefix + "_" + toSnakeCase(field) + "_" + count;

    counter[field] = count + 1;
    return name;
}

// deno-lint-ignore no-explicit-any
export function resolveParam(prefix: string, field: string, value: any, counter: Record<string, number> = {}): IQueryParam {
    const name = resolveParamName(prefix, field, counter);
    return { name, value };
}
