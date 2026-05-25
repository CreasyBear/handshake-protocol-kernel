import type { DelegatedAuthorityRef, DelegatedAuthorityStatusTransition } from "../../protocol/public/schemas";
import type { RegisterDelegatedAuthorityRefInput, TransitionDelegatedAuthorityStatusInput } from "../../protocol/public/inputs";
import type { HandshakeFetch } from "../client";
import { type RoleScopedClientOptions } from "./transport";
export type ControlPlaneClientOptions = RoleScopedClientOptions;
export declare class ControlPlaneClient {
    private readonly transport;
    constructor(baseUrl: string, options: ControlPlaneClientOptions, fetchImpl?: HandshakeFetch);
    registerDelegatedAuthorityRef(input: RegisterDelegatedAuthorityRefInput): Promise<DelegatedAuthorityRef>;
    transitionDelegatedAuthorityStatus(input: TransitionDelegatedAuthorityStatusInput): Promise<DelegatedAuthorityStatusTransition>;
}
