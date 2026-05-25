import type { ActionContract } from "../action-contract";
import type { GatewayRegistryEntry } from "../catalog-envelope";
import { type CreateProtectedPathPostureInput } from "./types";
import type { ProtocolRecorder } from "../../events/records";
import { type JsonValue, type ProtectedPathPosture } from "./types";
import type { ProtocolStore, StoredProtocolRecord } from "../../store/port";
export type ProtectedPathPostureEvaluation = {
    ok: true;
    posture: StoredProtocolRecord<ProtectedPathPosture> | null;
} | {
    ok: false;
    posture: StoredProtocolRecord<ProtectedPathPosture> | null;
    reasonCode: string;
    reason: string;
};
export declare function createProtectedPathPosture(recorder: ProtocolRecorder, inputValue: CreateProtectedPathPostureInput): Promise<ProtectedPathPosture>;
export declare function loadCurrentPostureForContract(store: ProtocolStore, contract: ActionContract): Promise<StoredProtocolRecord<ProtectedPathPosture> | null>;
export { protectedPathPostureScopeKey, protectedPathPostureScopeKeyForContract } from "./scope";
export declare function evaluateRequiredProtectedPathPosture(input: {
    contract: ActionContract;
    gateway: Pick<GatewayRegistryEntry, "credentialCustodyStatus" | "enforcementMode">;
    posture: StoredProtocolRecord<ProtectedPathPosture> | null;
    now: string;
}): ProtectedPathPostureEvaluation;
export declare function protectedPathPolicyInput(posture: StoredProtocolRecord<ProtectedPathPosture> | null, now: string): JsonValue;
