import type { Context } from "hono";
import type { ProtocolObjectType } from "../../protocol/public/schemas";
import type { ProtocolStore, StoredProtocolRecord } from "../../protocol/store/port";
import type { TransitionCallerIdentity } from "../admission/hosted-caller-identity";
import { type TransitionErrorContext } from "../errors/transition-error-envelope";
export type HostedEvidenceScopeIdentity = Pick<TransitionCallerIdentity, "tenantId" | "organizationId" | "projectId" | "workspaceId">;
export type ScopedEvidenceRecordResolution<T> = {
    kind: "found";
    record: StoredProtocolRecord<T>;
} | {
    kind: "not_found";
} | {
    kind: "scope_forbidden";
};
export declare function resolveScopedEvidenceRecord<T>(store: ProtocolStore, objectType: ProtocolObjectType, objectId: string, hostedIdentity: HostedEvidenceScopeIdentity | null): Promise<ScopedEvidenceRecordResolution<T>>;
export declare function evidenceRecordNotFoundResponse(c: Context, context: TransitionErrorContext): Response;
export declare function hostedEvidenceScopeForbiddenResponse(c: Context, context: TransitionErrorContext): Response;
export declare function respondToScopedEvidenceRecordResolution(c: Context, context: TransitionErrorContext, resolution: Exclude<ScopedEvidenceRecordResolution<unknown>, {
    kind: "found";
}>): Response;
