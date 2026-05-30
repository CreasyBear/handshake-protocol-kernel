import type { A1VerifyOutcome } from "./types.js";
import { type SignedChainWire } from "./wire-types.js";
export type VerifySignedChainInput = {
    signedChain: SignedChainWire | string | Uint8Array;
    executorPk: Uint8Array | string;
    intentHash: Uint8Array | string;
    merkleProof: {
        siblings: {
            hash: Uint8Array | string;
            isLeft: boolean;
        }[];
    };
    nowUnix?: number | undefined;
    driftToleranceSecs?: number | undefined;
};
export declare function verifySignedChain(input: VerifySignedChainInput): A1VerifyOutcome;
