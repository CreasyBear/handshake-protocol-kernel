import type { TransitionCallerRole } from "../../http/admission/caller-auth";
import { type HandshakeFetch } from "../client";
export type RoleScopedTransportRole = Extract<TransitionCallerRole, "control_plane" | "gateway_custody" | "review_custody" | "runtime_evidence">;
export type RoleScopedClientOptions = {
    roleCredential: string;
    protocolVersion?: string;
    requestIdentityFactory?: () => string;
    originatingIdentity?: string;
};
export type RoleScopedTransportOptions = RoleScopedClientOptions & {
    role: RoleScopedTransportRole;
};
export declare class RoleScopedTransport {
    private readonly baseUrl;
    private readonly options;
    private readonly fetchImpl;
    constructor(baseUrl: string, options: RoleScopedTransportOptions, fetchImpl?: HandshakeFetch);
    post<T>(path: string, body: unknown): Promise<T>;
    get<T>(path: string): Promise<T>;
    private request;
    private nextRequestIdentity;
    private errorEnvelopeForResponse;
}
