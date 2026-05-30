/**
 * Delegation evidence digests and cert preimages (Handshake-owned domains).
 * Design lineage: MIT-licensed A1 (https://github.com/dyologician/A1) — see THIRD_PARTY_NOTICES.
 */
import { blake3 } from "@noble/hashes/blake3";
import type { SubScopeProofWire, WireDelegationCert } from "../wire-types.js";
export declare function deriveKey(domain: string, version: number): ReturnType<typeof blake3.create>;
export declare function certSignableBytes(cert: WireDelegationCert, extCommitment: Uint8Array): Uint8Array;
export declare function certFingerprint(cert: WireDelegationCert): Uint8Array;
export declare function certExtensionsCommitment(version: number, extensions: Record<string, unknown> | undefined): Uint8Array;
export declare function subscopeProofCommitment(proof: SubScopeProofWire): Uint8Array;
export declare function intentLeafHash(action: string, params: Record<string, string>): Uint8Array;
export declare function normalizeIntentParam(key: string, value: string): {
    key: string;
    value: string;
};
export declare function intentFromAction(action: string, params: Record<string, string>): Uint8Array;
export declare function merkleNode(left: Uint8Array, right: Uint8Array): Uint8Array;
export declare function merkleProofVerify(leaf: Uint8Array, proof: {
    hash: Uint8Array;
    isLeft: boolean;
}[], expectedRoot: Uint8Array): boolean;
export declare function chainFingerprint(input: {
    principalPk: Uint8Array;
    principalScope: Uint8Array;
    namespace?: string | undefined;
    certFingerprints: Uint8Array[];
}): Uint8Array;
export declare function pkFingerprint(pk: Uint8Array): Uint8Array;
