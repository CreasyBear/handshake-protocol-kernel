import type { ActionContract } from "../areas/action-contract";
import type { Receipt } from "../areas/receipt-export/schemas";
import { type ReceiptDelegationProvenance } from "../areas/receipt-export";
import type { ProtocolStore, StoredProtocolRecord } from "../store/port";
import type { AgentTransactionEnvelopeInput } from "./projections";
export type AgentTransactionEnvelopeAssembly = {
    input: AgentTransactionEnvelopeInput;
    supplementalRecords: StoredProtocolRecord[];
};
export declare function assembleAgentTransactionEnvelopeInput(store: ProtocolStore, contract: ActionContract): Promise<AgentTransactionEnvelopeInput>;
export declare function assembleAgentTransactionEnvelope(store: ProtocolStore, contract: ActionContract): Promise<AgentTransactionEnvelopeAssembly>;
export declare function resolveReceiptTimelineDelegationProvenance(store: ProtocolStore, receipt: Receipt): Promise<ReceiptDelegationProvenance | null>;
