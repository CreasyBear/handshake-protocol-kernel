import type { ActionContract } from "../areas/action-contract";
import type { ProtocolStore, StoredProtocolRecord } from "../store/port";
import type { AgentTransactionEnvelopeInput } from "./projections";
export type AgentTransactionEnvelopeAssembly = {
    input: AgentTransactionEnvelopeInput;
    supplementalRecords: StoredProtocolRecord[];
};
export declare function assembleAgentTransactionEnvelopeInput(store: ProtocolStore, contract: ActionContract): Promise<AgentTransactionEnvelopeInput>;
export declare function assembleAgentTransactionEnvelope(store: ProtocolStore, contract: ActionContract): Promise<AgentTransactionEnvelopeAssembly>;
