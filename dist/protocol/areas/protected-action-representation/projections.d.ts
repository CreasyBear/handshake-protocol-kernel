import type { ActionType, GatewayRegistryEntry, OperatingEnvelope, ToolCapability } from "../catalog-envelope";
import type { ProtectedPathPosture } from "../protected-path-posture";
import type { Refusal } from "../refusal";
import { type ProtectedActionChallenge, type ProtectedActionMetadata } from "./types";
export declare function projectProtectedActionMetadata(input: {
    tool: ToolCapability;
    actionType: ActionType;
    gateway: GatewayRegistryEntry;
    envelope: OperatingEnvelope;
    protectedPathPosture?: ProtectedPathPosture | null;
    metadataId?: string;
    createdAt?: string;
}): ProtectedActionMetadata;
export declare function projectProtectedActionChallengeFromRefusal(input: {
    refusal: Refusal;
    challengeId?: string;
    retryability?: ProtectedActionChallenge["retryability"];
    commitState?: ProtectedActionChallenge["commitState"];
    nextStepKind?: ProtectedActionChallenge["nextStepKind"];
}): ProtectedActionChallenge;
