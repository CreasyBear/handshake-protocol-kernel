export type A1VerifyOutcomeDigestInput = {
    valid: boolean;
    reasonCodes: string[];
    chainDepth: number;
    principalPkFingerprint: Uint8Array;
    terminalPkFingerprint: Uint8Array;
    verifiedScopeRoot: Uint8Array;
    verifiedAtUnix: number;
};
export declare function computeA1VerifyOutcomeDigest(input: A1VerifyOutcomeDigestInput): Uint8Array;
export declare function verifyOutcomeDigestHex(digest: Uint8Array): string;
