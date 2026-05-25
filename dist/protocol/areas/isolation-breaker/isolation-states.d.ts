import { type CreateIsolationInput } from "./types";
import type { ProtocolRecorder } from "../../events/records";
import { type IsolationState } from "./types";
import type { IsolationScopeRef, IsolationStateIndexEntry } from "../../store/port";
export declare function createIsolationState(recorder: ProtocolRecorder, inputValue: CreateIsolationInput): Promise<IsolationState>;
export declare function isolationStateIndexEntry(state: IsolationState): IsolationStateIndexEntry;
export declare function isolationScopeKey(scopeRef: IsolationScopeRef): string;
