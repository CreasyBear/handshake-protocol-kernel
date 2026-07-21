import { type CreateBreakerDecisionInput } from "../types";
import type { ProtocolRecorder } from "../../../events/records";
import { type BreakerDecision, type IsolationState } from "../types";
import type { ProtocolStore } from "../../../store/port";
export type BreakerDecisionResult = {
    breakerDecision: BreakerDecision;
    isolationState: IsolationState;
};
export declare function createBreakerDecision(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: CreateBreakerDecisionInput): Promise<BreakerDecisionResult>;
