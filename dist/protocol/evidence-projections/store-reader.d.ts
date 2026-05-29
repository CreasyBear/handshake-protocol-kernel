import type { ProtocolStore } from "../store/port";
import type { OperationCorrelationIndex, OperationReadbackProjection } from "./schemas";
export type ProtocolStoreEvidenceProjectionReader = {
    getOperationReadbackProjection(actionContractId: string): Promise<OperationReadbackProjection>;
    getOperationCorrelationIndex(actionContractId: string): Promise<OperationCorrelationIndex>;
};
export declare function protocolStoreEvidenceProjectionReader(store: ProtocolStore): ProtocolStoreEvidenceProjectionReader;
