import type { JsonValue } from "./schema-core";
export declare const CANONICALIZER_VERSION = "handshake-jcs-lite-0.2";
export declare function canonicalize(value: JsonValue): string;
export declare function digestCanonical(value: JsonValue): Promise<`sha256:${string}`>;
export declare function snapshotPlainJsonValue(value: unknown): JsonValue;
export type ProtectedActionParamsDigestInput = {
    parameters: Record<string, unknown>;
    secretRefs?: Record<string, string> | undefined;
    gatewayCredentialRefs?: unknown[] | undefined;
    delegatedAuthorityRefs?: unknown[] | undefined;
};
export declare function protectedActionParamsDigest(input: ProtectedActionParamsDigestInput): Promise<`sha256:${string}`>;
export declare function signCanonicalHmac(value: JsonValue, secret: string): Promise<`hmac-sha256:${string}`>;
export declare function verifyCanonicalHmac(value: JsonValue, secret: string, expected: string): Promise<boolean>;
