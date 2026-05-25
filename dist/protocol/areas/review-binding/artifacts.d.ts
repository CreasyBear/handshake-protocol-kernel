import { type CreateReviewArtifactInput } from "./types";
import type { ProtocolRecorder } from "../../events/records";
import { type ReviewArtifactRecord } from "./types";
export declare function createReviewArtifact(recorder: ProtocolRecorder, inputValue: CreateReviewArtifactInput): Promise<ReviewArtifactRecord>;
