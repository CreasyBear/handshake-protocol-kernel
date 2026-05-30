import { computeA1VerifyOutcomeDigest } from "./verify-outcome-digest.js";
export type EvidenceBindingDigestInput = {
    a1ChainFingerprint: Uint8Array;
    a1VerifierVersion: string;
    a1VerifyOutcomeDigest: Uint8Array;
    candidateDigest: Uint8Array;
    actionContractDigest: Uint8Array;
    actionTypeId: string;
    paramsDigest: Uint8Array;
    principalId: string;
    agentId: string;
    presentedAtUnix: number;
};
export declare function computeEvidenceBindingDigest(input: EvidenceBindingDigestInput): Uint8Array;
export { computeA1VerifyOutcomeDigest };
