import type { AgenticEndpointAccessProtectedHandler, AgenticEndpointAccessProtectionInput, createAgenticEndpointAccessMiddleware } from "../protect";
type AgenticEndpointAccessCoreMiddleware = ReturnType<typeof createAgenticEndpointAccessMiddleware>;
export type HonoLikeEndpointContext = {
    readonly req: {
        readonly raw: Request;
    };
};
export declare function protectHonoAgenticEndpoint(middleware: AgenticEndpointAccessCoreMiddleware, handler: (context: HonoLikeEndpointContext, endpoint: Parameters<AgenticEndpointAccessProtectedHandler>[1]) => Response | Promise<Response>): (context: HonoLikeEndpointContext, input: Omit<AgenticEndpointAccessProtectionInput, "request">) => Promise<Response>;
export {};
