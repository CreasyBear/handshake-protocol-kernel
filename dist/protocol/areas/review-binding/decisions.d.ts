import { type CreateReviewDecisionInput } from "./types";
import type { ProtocolRecorder } from "../../events/records";
import { type ReviewDecision } from "./types";
export declare function createReviewDecision(recorder: ProtocolRecorder, inputValue: CreateReviewDecisionInput): Promise<ReviewDecision>;
