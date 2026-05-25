import type { ProtocolRecorder } from "../../events/records";
import type { ProtocolStore } from "../../store/port";
import { type CreateToolCallDraftInput, type TransitionToolCallDraftInput, type ToolCallDraft } from "./types";
export declare function createToolCallDraft(recorder: ProtocolRecorder, inputValue: CreateToolCallDraftInput): Promise<ToolCallDraft>;
export declare function transitionToolCallDraft(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: TransitionToolCallDraftInput): Promise<ToolCallDraft>;
