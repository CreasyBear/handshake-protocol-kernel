export type CodexMcpServerRecord = {
    readonly name: string;
    readonly command: string | null;
    readonly args: readonly string[] | null;
    readonly startupTimeoutSec: number | null;
    readonly envKeys: readonly string[];
};
export declare function parseCodexMcpServerNames(configText: string): string[];
export declare function parseCodexMcpServerRecords(configText: string): CodexMcpServerRecord[];
export declare function buildCodexMcpServerTomlBlock(input: {
    readonly name: string;
    readonly command: string;
    readonly args: readonly string[];
    readonly startupTimeoutSec?: number;
}): string;
export declare function upsertCodexMcpServerToml(input: {
    readonly existingToml: string;
    readonly serverName: string;
    readonly serverBlockToml: string;
}): {
    changed: boolean;
    toml: string;
};
