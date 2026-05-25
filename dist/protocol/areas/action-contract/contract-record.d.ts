import type { ActionType, GatewayRegistryEntry, OperatingEnvelope } from "../catalog-envelope";
import type { CandidateAction, IntentCompilationRecord } from "../intent-compilation";
import { type loadRecoveryActionLinkage } from "../recovery";
import type { ProposeActionContractInputSchema } from "./types";
import { type ActionContract, type JsonValue } from "./types";
type ParsedProposeActionContractInput = ReturnType<typeof ProposeActionContractInputSchema.parse>;
export type ActionContractRecordContext = {
    input: ParsedProposeActionContractInput;
    candidate: CandidateAction;
    compilation: IntentCompilationRecord;
    envelope: OperatingEnvelope;
    gateway: GatewayRegistryEntry;
    actionType: ActionType;
    recoveryLinkage: Awaited<ReturnType<typeof loadRecoveryActionLinkage>>;
};
export type ActionContractRecordPlan = {
    createdAt: string;
    contractBinding: {
        [key: string]: JsonValue;
    };
    contract: ActionContract;
};
export declare function buildActionContractRecord(context: ActionContractRecordContext): Promise<ActionContractRecordPlan>;
export {};
