import type { PolicyEvaluationResult } from "./policy";
import type { ActionContract } from "../action-contract";
import type { Receipt } from "../receipt-export";
import type { PolicyDecision } from "./types";
import type { ProtocolStore } from "../../store/port";
export type SequenceDependencyStatus = "greenlit" | "missing" | "refused" | "not_greenlit";
export type GatewayCheckSequenceDependencyStatus = "ready" | "missing" | "refused" | "not_greenlit" | "not_receipted" | "gate_refused" | "not_final";
export type SequenceDependencyState = {
    requiredPriorActionContractId: string;
    status: SequenceDependencyStatus;
    policyDecisionId: string | null;
    policyDecisionValue: PolicyDecision["decision"] | null;
    greenlightId: string | null;
};
export type GatewayCheckSequenceDependencyState = Omit<SequenceDependencyState, "status"> & {
    status: GatewayCheckSequenceDependencyStatus;
    receiptId: string | null;
    gatewayCheckStatus: Receipt["gatewayCheckStatus"] | null;
    finalityStatus: Receipt["finalityStatus"] | null;
};
export declare function loadSequenceDependencyStates(store: ProtocolStore, contract: ActionContract): Promise<SequenceDependencyState[]>;
export declare function evaluateSequenceDependencies(states: SequenceDependencyState[]): PolicyEvaluationResult | null;
export declare function loadGatewayCheckSequenceDependencyStates(store: ProtocolStore, contract: ActionContract): Promise<GatewayCheckSequenceDependencyState[]>;
export declare function gatewayCheckSequenceDependencyRefusalReason(states: GatewayCheckSequenceDependencyState[]): string | null;
