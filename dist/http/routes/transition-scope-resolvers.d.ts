import type { ProtocolObjectType } from "../../protocol/public/schemas";
import type { ProtocolStore } from "../../protocol/store/port";
export type TransitionScope = {
    tenantId: string;
    organizationId: string;
    referenceScopeMissingCode?: string;
};
export type TransitionScopeResolverInput = {
    body: unknown;
    store: () => ProtocolStore;
};
export type TransitionScopeResolver = (input: TransitionScopeResolverInput) => TransitionScope | Promise<TransitionScope>;
export declare function directBodyScope({ body }: TransitionScopeResolverInput): TransitionScope;
export declare function recordScope(objectType: ProtocolObjectType, fieldName: string, missingCode: string): TransitionScopeResolver;
export declare function hideReferenceScopeMismatch(error: unknown, scope: TransitionScope): never;
