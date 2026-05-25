import { type CreateRecoveryRecommendationInput } from "./types";
import type { ProtocolRecorder } from "../../events/records";
import { type RecoveryRecommendation } from "./types";
export declare function createRecoveryRecommendation(recorder: ProtocolRecorder, inputValue: CreateRecoveryRecommendationInput): Promise<RecoveryRecommendation>;
