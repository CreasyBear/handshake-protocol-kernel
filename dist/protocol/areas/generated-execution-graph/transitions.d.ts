import type { ProtocolRecorder } from "../../events/records";
import type { ProtocolStore } from "../../store/port";
import { type CreateGeneratedExecutionGraphInput, type GraphEvidenceIssuerContext } from "./types";
import { type GeneratedExecutionGraph } from "./types";
export declare function createGeneratedExecutionGraph(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: CreateGeneratedExecutionGraphInput, issuerContextValue: GraphEvidenceIssuerContext): Promise<GeneratedExecutionGraph>;
