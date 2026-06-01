import type { ProtocolRecorder } from "../../events/records";
import type { ProtocolStore } from "../../store/port";
import { type IssueAgenticEndpointAccessLeaseInput, type RecordAgenticEndpointAccessUsageEventInput } from "./types";
import { type AgenticEndpointAccessClearanceBinding, type AgenticEndpointAccessLease, type AgenticEndpointAccessState, type AgenticEndpointAccessUsageEvent, type AgenticEndpointAccessUsageKind } from "./types";
export type AgenticEndpointAccessLeaseIssueResult = {
    status: "leased";
    lease: AgenticEndpointAccessLease;
    clearanceBinding: AgenticEndpointAccessClearanceBinding;
    reasonCode: null;
    refusalRef: null;
    proofGapRef: null;
} | {
    status: "refused";
    lease: null;
    clearanceBinding: AgenticEndpointAccessClearanceBinding;
    reasonCode: string;
    refusalRef: string;
    proofGapRef: null;
} | {
    status: "proof_gap";
    lease: null;
    clearanceBinding: AgenticEndpointAccessClearanceBinding;
    reasonCode: string;
    refusalRef: null;
    proofGapRef: string;
};
export type AgenticEndpointAccessUsageResult = {
    status: "recorded";
    usageEvent: AgenticEndpointAccessUsageEvent;
    counterAfter: number;
    reasonCode: null;
    refusalRef: null;
} | {
    status: "refused" | "exhausted";
    usageEvent: null;
    counterAfter: number | null;
    reasonCode: string;
    refusalRef: string;
    proofGapRef: null;
} | {
    status: "proof_gap";
    usageEvent: null;
    counterAfter: number | null;
    reasonCode: string;
    refusalRef: null;
    proofGapRef: string;
};
export declare function canTransitionAgenticEndpointAccessState(from: AgenticEndpointAccessState, to: AgenticEndpointAccessState): {
    ok: true;
} | {
    ok: false;
    reasonCode: string;
};
export declare function issueAgenticEndpointAccessLease(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: IssueAgenticEndpointAccessLeaseInput): Promise<AgenticEndpointAccessLeaseIssueResult>;
export declare function recordAgenticEndpointAccessUsageEvent(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: RecordAgenticEndpointAccessUsageEventInput): Promise<AgenticEndpointAccessUsageResult>;
export declare function classifyAgenticEndpointAccessLeaseUse(lease: AgenticEndpointAccessLease, now: string, options?: {
    quarantined?: boolean;
}): {
    ok: true;
    state: "leased";
} | {
    ok: false;
    state: AgenticEndpointAccessState;
    reasonCode: string;
};
export declare function projectAgenticEndpointAccessUsageCounter(store: ProtocolStore, lease: AgenticEndpointAccessLease, usageKind: AgenticEndpointAccessUsageKind): Promise<number>;
