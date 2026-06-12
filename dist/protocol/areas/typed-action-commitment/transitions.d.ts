import type { ProtocolRecorder } from "../../events/records";
import { type RecordTypedActionCommitmentInput, type TypedActionCommitmentRecord } from "./types";
export declare function recordTypedActionCommitment(recorder: ProtocolRecorder, inputValue: RecordTypedActionCommitmentInput): Promise<TypedActionCommitmentRecord>;
