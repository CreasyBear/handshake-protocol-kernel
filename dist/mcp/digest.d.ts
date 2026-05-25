export type McpJsonValue = null | boolean | number | string | McpJsonValue[] | {
    [key: string]: McpJsonValue;
};
export declare function canonicalizeMcp(value: McpJsonValue): string;
export declare function digestMcp(value: McpJsonValue): Promise<`sha256:${string}`>;
