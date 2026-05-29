import type { StoredProtocolRecord } from "../../protocol/store/port";
import type { TransitionCallerIdentity } from "../admission/hosted-caller-identity";
type HostedRecordScopeIdentity = Pick<TransitionCallerIdentity, "tenantId" | "organizationId" | "projectId" | "workspaceId">;
export declare function hostedIdentityCanReadRecord(hostedIdentity: HostedRecordScopeIdentity | null, record: Pick<StoredProtocolRecord, "tenantId" | "organizationId" | "payload">): boolean;
export {};
