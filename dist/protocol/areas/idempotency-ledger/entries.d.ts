import type { ActionContract } from "../action-contract";
import type { GatewayCheckAttempt, MutationAttempt } from "../gateway-gate";
import type { SurfaceOperationReconciliation } from "../operation-lifecycle";
import type { Greenlight, PolicyDecision } from "../policy-greenlight";
import { type IdempotencyLedgerEntry } from "./types";
export type IdempotencyLedgerKey = {
    tenantId: string;
    organizationId: string;
    gatewayId: string;
    protectedSurfaceKind: string;
    actionClass: string;
    resourceRef: string;
    idempotencyKey: string;
};
export declare function idempotencyLedgerKey(contract: ActionContract): IdempotencyLedgerKey;
export declare function idempotencyLedgerKeyForEntry(entry: IdempotencyLedgerEntry): IdempotencyLedgerKey;
export declare function idempotencyLedgerKeyDigest(key: IdempotencyLedgerKey): Promise<`sha256:${string}`>;
export declare function buildIdempotencyLedgerReservation(input: {
    contract: ActionContract;
    policyDecision: PolicyDecision;
    greenlight: Greenlight;
    now: string;
}): Promise<IdempotencyLedgerEntry>;
export declare function buildIdempotencyLedgerMutationStarted(input: {
    current: IdempotencyLedgerEntry;
    gateAttempt: GatewayCheckAttempt;
    mutationAttempt: MutationAttempt;
    receiptId: string;
    now: string;
}): Promise<IdempotencyLedgerEntry>;
export declare function buildIdempotencyLedgerTerminal(input: {
    current: IdempotencyLedgerEntry;
    reconciliation: SurfaceOperationReconciliation;
    now: string;
}): Promise<IdempotencyLedgerEntry>;
export declare function idempotencyConflictDecisionValue(contract: ActionContract, existing: IdempotencyLedgerEntry): {
    decision: "refuse";
    reasonCode: string;
    reason: string;
    matchedRuleIds: string[];
};
export declare function idempotencyLedgerIndexEntry(entry: IdempotencyLedgerEntry): {
    ledgerKeyDigest: string;
    idempotencyLedgerEntryId: string;
    tenantId: string;
    organizationId: string;
    paramsDigest: string;
    actionContractId: string;
    policyDecisionId: string;
    greenlightId: string | null;
    ledgerState: "terminal_unknown" | "authority_reserved" | "mutation_started" | "terminal_succeeded" | "terminal_failed" | "terminal_refused";
    updatedAt: string;
};
