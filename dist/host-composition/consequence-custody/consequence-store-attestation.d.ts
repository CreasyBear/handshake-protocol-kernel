import type { AuthoritySourceStore } from "../../protocol/store/authority-source";
import type { ProtocolStore } from "../../protocol/store/port";
export type AttestedGatewayAdmissionSource = Readonly<Pick<AuthoritySourceStore, "commitCurrentGatewayAuthorityMutation" | "commitCurrentConsequenceCutoffAuthorityMutation" | "commitCurrentTerminalObservationAuthorityMutation" | "readAuthorityMutation" | "readAuthorityCurrentRecords" | "listAuthorityProjectionIntents" | "getAuthorityCommit" | "getAuthoritySourceRecord" | "listAuthorityCommitRecordRefs"> & Pick<ProtocolStore, "getRecord">>;
export declare function captureConsequenceStoreAttestationIfComplete(value: object): AttestedGatewayAdmissionSource | null;
export declare function requireAttestedGatewayAdmissionSource(value: object): AttestedGatewayAdmissionSource;
