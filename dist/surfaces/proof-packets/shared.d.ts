export declare const PROOF_PACKET_VERSION: "proof-packets.v0.1";
export type ProofGap = {
    readonly reasonCode: string;
    readonly nonClaim: string;
};
export type NonAuthorityBoundary = {
    readonly createsAuthority: false;
    readonly createsPolicyDecision: false;
    readonly createsGreenlight: false;
    readonly performsGatewayCheck: false;
    readonly performsMutation: false;
};
export declare const nonAuthorityBoundary: NonAuthorityBoundary;
export declare function gap(reasonCode: string, nonClaim: string): ProofGap;
export declare function arrayEquals(left: readonly string[], right: readonly string[]): boolean;
export declare function escapeRegExp(value: string): string;
export declare function stableDigest(value: unknown): `sha256:${string}`;
