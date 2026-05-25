import { type CreateRuntimeExecutionInput } from "./types";
import type { ProtocolRecorder } from "../../events/records";
import { type RuntimeExecutionRecord } from "./types";
export declare function createRuntimeExecution(recorder: ProtocolRecorder, inputValue: CreateRuntimeExecutionInput): Promise<RuntimeExecutionRecord>;
