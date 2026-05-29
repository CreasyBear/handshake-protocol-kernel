export type ProtocolIdSource = {
    createId?: (prefix: string) => string;
    nowIso?: () => string;
};
export declare function withProtocolIdSource<T>(source: ProtocolIdSource, run: () => T): T;
export declare function createId(prefix: string): string;
export declare function nowIso(): string;
