import type { ActionContract } from "../action-contract";
export declare function protectedPathPostureScopeKeyForContract(contract: ActionContract): string;
export declare function protectedPathPostureScopeKey(input: {
    tenantId: string;
    organizationId: string;
    runtimeAdapterId: string;
    gatewayId: string;
    actionClass: string;
    resourceRef: string;
}): string;
