import { type CompileIntentInput } from "./types";
import type { ProtocolRecorder } from "../../events/records";
import { type IntentCompilationRecord } from "./types";
import type { ProtocolStore } from "../../store/port";
export declare function compileIntent(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: CompileIntentInput): Promise<IntentCompilationRecord>;
