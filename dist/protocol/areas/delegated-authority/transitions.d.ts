import type { ActionContract } from "../action-contract";
import type { ProtocolRecorder } from "../../events/records";
import { type IsolationState } from "../isolation-breaker";
import type { ProtocolStore, StoredProtocolRecord } from "../../store/port";
import { type DelegatedAuthorityBinding, type DelegatedAuthorityRef, type DelegatedAuthorityStatusTransition, type RegisterDelegatedAuthorityRefInput, type TransitionDelegatedAuthorityStatusInput } from "./types";
export type DelegatedAuthorityStatusChange = {
    statusTransition: DelegatedAuthorityStatusTransition;
    isolationState: IsolationState;
};
export type DelegatedAuthorityBindingEvaluation = {
    records: StoredProtocolRecord<DelegatedAuthorityRef>[];
    policyInput: DelegatedAuthorityBindingPolicyInput[];
} & ({
    ok: true;
} | {
    ok: false;
    reasonCode: string;
    reason: string;
});
export type DelegatedAuthorityBindingPolicyInput = {
    authorityUseName: string;
    delegatedAuthorityRefId: string;
    delegatedAuthorityRefDigest: string;
    authorityKind: DelegatedAuthorityBinding["authorityKind"];
    grantStatus: DelegatedAuthorityRef["grantStatus"] | null;
    requiredGrantStatus: DelegatedAuthorityBinding["requiredGrantStatus"];
    freshness: "fresh" | "stale" | "missing";
    amountParameterName: string | null;
    maxAtomicAmountPerAction: string | null;
    requestedAtomicAmount: string | null;
};
export declare function registerDelegatedAuthorityRef(recorder: ProtocolRecorder, inputValue: RegisterDelegatedAuthorityRefInput): Promise<DelegatedAuthorityRef>;
export declare function transitionDelegatedAuthorityStatus(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: TransitionDelegatedAuthorityStatusInput): Promise<DelegatedAuthorityStatusTransition>;
export declare function evaluateDelegatedAuthorityBindings(store: ProtocolStore, contract: ActionContract, now: string): Promise<DelegatedAuthorityBindingEvaluation>;
