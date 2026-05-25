import type { ActionContract } from "../../action-contract";
import type { Greenlight } from "../../policy-greenlight";
import type { IsolationState } from "../../isolation-breaker";
import { type GatewayCheckResult } from "../artifacts";
import type { ProtocolRecorder } from "../../../events/records";
import type { GatewayPolicyDriftCheck } from "../gateway-policy";
import type { ProtectedPathPosture } from "../../protected-path-posture";
import { type Receipt } from "../../receipt-export";
import type { ProtocolStore, StoredProtocolRecord } from "../../../store/port";
export declare function commitReplayRefusal(store: ProtocolStore, recorder: ProtocolRecorder, contract: ActionContract, greenlight: Greenlight, context: {
    observedParamsDigest: `sha256:${string}`;
    isolationStates: IsolationState[];
    gatewayPolicyDrift: GatewayPolicyDriftCheck;
    protectedPathPosture?: StoredProtocolRecord<ProtectedPathPosture> | null;
    refusalReasonCode?: string;
    greenlightConsumptionStatus?: Receipt["greenlightConsumptionStatus"];
}): Promise<GatewayCheckResult>;
