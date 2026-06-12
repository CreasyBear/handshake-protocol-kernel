import type { ProtocolRecorder } from "../../events/records";
import type { StoredProtocolRecord } from "../../store/port";
import { type RawRecordReadAudit } from "./types";
export type RawRecordReadAuditCallerIdentity = {
    readonly callerIdentityRef: string;
    readonly callerSubjectDigest: string;
    readonly authProviderRef: string;
    readonly authSessionDigest: string | null;
    readonly serviceCredentialDigest: string | null;
    readonly projectId: string | null;
    readonly workspaceId: string | null;
    readonly custodyRoles: readonly string[];
    readonly hostedRoles: readonly string[];
    readonly hostedScopes: readonly string[];
};
export type RecordRawRecordReadAuditInput = {
    readonly targetRecord: StoredProtocolRecord;
    readonly callerIdentity: RawRecordReadAuditCallerIdentity;
    readonly rawReadPurpose: string;
    readonly rawReadExpiresAt: string;
};
export declare function recordRawRecordReadAudit(recorder: ProtocolRecorder, input: RecordRawRecordReadAuditInput): Promise<RawRecordReadAudit>;
