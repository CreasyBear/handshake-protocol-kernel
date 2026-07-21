import type { ActionContract } from "../../action-contract";
import type { IsolationState } from "../types";
export type IsolationScopeRef = Pick<IsolationState, "tenantId" | "organizationId" | "scopeType" | "scopeId">;
export declare function isolationScopeRefsForContract(contract: ActionContract): IsolationScopeRef[];
