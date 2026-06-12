import type { AgenticEndpointAccessProtectedHandler, AgenticEndpointAccessProtectionInput, createAgenticEndpointAccessMiddleware } from "../protect";
type AgenticEndpointAccessCoreMiddleware = ReturnType<typeof createAgenticEndpointAccessMiddleware>;
export declare function protectCloudflareWorkerAgenticEndpoint<Env = unknown, ExecutionContextValue = unknown>(middleware: AgenticEndpointAccessCoreMiddleware, handler: (request: Request, env: Env, executionContext: ExecutionContextValue, endpoint: Parameters<AgenticEndpointAccessProtectedHandler>[1]) => Response | Promise<Response>): (request: Request, env: Env, executionContext: ExecutionContextValue, input: Omit<AgenticEndpointAccessProtectionInput, "request">) => Promise<Response>;
export {};
