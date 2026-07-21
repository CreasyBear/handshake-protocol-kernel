import { type AuthorityPointerGuard, type AuthorityPointerIdentity } from "../../store/authority-record-read";
import type { ActionContract } from "./types";
export type IsolationScopeType = "tenant" | "organization" | "agent" | "run" | "envelope" | "action_class" | "gateway" | "credential_ref" | "authority_ref" | "resource";
export type IsolationScopeRef = Readonly<{
    tenantId: string;
    organizationId: string;
    scopeType: IsolationScopeType;
    scopeId: string;
}>;
export declare function isolationScopeRefsForContract(contract: ActionContract): readonly IsolationScopeRef[];
export declare function isolationAuthorityPointerForScope(scope: IsolationScopeRef): Promise<AuthorityPointerIdentity>;
export declare function isolationAuthorityGuardSetDigest(guards: readonly AuthorityPointerGuard[]): Promise<`sha256:${string}`>;
