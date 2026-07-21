export type ProtectedActionParamsDigestInput = {
    parameters: Record<string, unknown>;
    secretRefs?: Record<string, string> | undefined;
    gatewayCredentialRefs?: unknown[] | undefined;
};
export declare function protectedActionParamsDigest(input: ProtectedActionParamsDigestInput): Promise<`sha256:${string}`>;
