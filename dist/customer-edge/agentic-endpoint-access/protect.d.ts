import { type AgenticEndpointAccessClearanceRefs, type AgenticEndpointAccessHandlerContext, type AgenticEndpointAccessMiddlewareOptionsInput, type AgenticEndpointAccessProtectionOutcome } from "./contracts";
import type { AgenticEndpointAccessKernelClient } from "./kernel-client";
import type { AgenticEndpointAccessLocalStore } from "./local-store";
import { type AgenticEndpointAccessIngressInput } from "./ingress";
export type AgenticEndpointAccessProtectionResult = {
    readonly status: "leased";
    readonly outcome: AgenticEndpointAccessProtectionOutcome;
    readonly handlerContext: AgenticEndpointAccessHandlerContext;
    readonly executeHandler: true;
} | {
    readonly status: Exclude<AgenticEndpointAccessProtectionOutcome["status"], "leased">;
    readonly outcome: AgenticEndpointAccessProtectionOutcome;
    readonly handlerContext: null;
    readonly executeHandler: false;
};
export type AgenticEndpointAccessMiddlewareConfig = {
    readonly store: AgenticEndpointAccessLocalStore;
    readonly kernelClient: AgenticEndpointAccessKernelClient;
    readonly options: AgenticEndpointAccessMiddlewareOptionsInput;
};
export type AgenticEndpointAccessProtectionInput = {
    readonly request: Request;
    readonly ingress: AgenticEndpointAccessIngressInput;
    readonly clearanceRefs: AgenticEndpointAccessClearanceRefs;
    readonly nowIso?: string;
};
export type AgenticEndpointAccessProtectedHandler = (request: Request, context: AgenticEndpointAccessHandlerContext) => Response | Promise<Response>;
export declare function createAgenticEndpointAccessMiddleware(configValue: AgenticEndpointAccessMiddlewareConfig): {
    evaluate(input: AgenticEndpointAccessProtectionInput): Promise<AgenticEndpointAccessProtectionResult>;
    protect(handler: AgenticEndpointAccessProtectedHandler): (request: Request, input: Omit<AgenticEndpointAccessProtectionInput, "request">) => Promise<Response>;
};
export declare function protectAgenticEndpointAccess(input: AgenticEndpointAccessMiddlewareConfig & AgenticEndpointAccessProtectionInput): Promise<AgenticEndpointAccessProtectionResult>;
