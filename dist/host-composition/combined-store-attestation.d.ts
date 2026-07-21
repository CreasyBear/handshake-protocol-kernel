import type { AuthoritySourceStore } from "../protocol/store/authority-source";
import type { ProtocolStore } from "../protocol/store/port";
export type AttestedCombinedStoreReaders = Readonly<Pick<ProtocolStore, "getRecord"> & Pick<AuthoritySourceStore, "getAuthorityCommit" | "getAuthorityCurrentPointer" | "getAuthoritySourceRecord" | "listAuthorityCommitRecordRefs" | "listAuthorityRecordCommitRefs" | "readAuthorityPointerTransition" | "readAuthorityCurrentRecords">>;
export type AttestedPolicyAdmissionSource = Readonly<Pick<AuthoritySourceStore, "commitCurrentPolicyAuthorityMutation" | "readAuthorityMutation" | "readAuthorityCurrentRecords" | "listAuthorityProjectionIntents" | "getAuthorityCommit" | "getAuthoritySourceRecord" | "listAuthorityCommitRecordRefs">>;
export declare function captureCombinedStoreAttestationIfComplete(value: object): AttestedCombinedStoreReaders | null;
export declare function observeCombinedStoreAttestation(value: object): AttestedCombinedStoreReaders | null;
export declare function requireCombinedStoreAttestation(value: object): AttestedCombinedStoreReaders;
export declare function requireAttestedPolicyAdmissionSource(value: object): AttestedPolicyAdmissionSource;
export declare function assertCompleteCombinedStore(value: object): void;
