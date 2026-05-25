import { type InstallProposal } from "../../install";
import type { InstallSetupAuthorityBoundary, InstallSetupRefusedResult, InstallSetupRegisteredResult, InstallSetupResult } from "../../protocol/public/schemas";
import type { HandshakeFetch } from "../client";
import { type RoleScopedClientOptions } from "./transport";
export type InstallClientOptions = RoleScopedClientOptions;
export type InstallClientAuthorityBoundary = InstallSetupAuthorityBoundary;
export type InstallClientRegisteredRecordsResult = InstallSetupRegisteredResult;
export type InstallClientRefusedProposalResult = InstallSetupRefusedResult;
export type InstallClientRegisterCompiledRecordsResult = InstallSetupResult;
export declare class InstallClient {
    private readonly transport;
    constructor(baseUrl: string, options: InstallClientOptions, fetchImpl?: HandshakeFetch);
    registerInstallProposalCompiledRecords(input: InstallProposal): Promise<InstallClientRegisterCompiledRecordsResult>;
}
