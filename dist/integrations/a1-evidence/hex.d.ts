export declare function parseHex32(value: string, field: string): Uint8Array;
export declare function parseHex64(value: string, field: string): Uint8Array;
export declare function parseHex16(value: string, field: string): Uint8Array;
export declare function toHexLower(bytes: Uint8Array): string;
export declare function writeU64Be(view: DataView, offset: number, value: number | bigint): void;
export declare function writeU64Le(view: DataView, offset: number, value: number | bigint): void;
