import { type X402InstallProposal, type X402InstallProposalInput } from "../../adapters/x402-payment/install-proposal";
import type { InstallProposal } from "../../install";
import type { CallerAuthTokens } from "../../http/admission/caller-auth";
import type { InstallSetupResult } from "../../protocol/public/schemas";
import type { ProtocolStore } from "../../protocol/store/port";
export type ServiceBootstrapResult = {
    outcome: InstallSetupResult["outcome"];
    actionFamily: string;
    installProposalId: string;
    installDigest: string;
    reasonCodes: readonly string[];
    recordRefs: InstallSetupResult["recordRefs"];
    policyPackRef: string | null;
    policyPackVersion: string | null;
    authorityBoundary: {
        authorityCreated: false;
        greenlightCreated: false;
        gatewayCheckPerformed: false;
        mutationAttempted: false;
    };
};
type X402BootstrapInstallInputOverrides = Partial<Omit<X402InstallProposalInput, "endpointEvidence" | "walletGatewayProfile" | "spendBounds">> & {
    endpointEvidence?: Partial<X402InstallProposalInput["endpointEvidence"]>;
    walletGatewayProfile?: Partial<X402InstallProposalInput["walletGatewayProfile"]>;
    spendBounds?: Partial<X402InstallProposalInput["spendBounds"]>;
};
export declare function defaultX402BootstrapInstallInput(overrides?: X402BootstrapInstallInputOverrides): X402InstallProposalInput;
export declare function installProposalFromX402(proposal: X402InstallProposal): InstallProposal;
export declare function runServiceBootstrap(input: {
    installInput: unknown;
    store?: ProtocolStore;
    callerAuthTokens?: CallerAuthTokens;
}): Promise<ServiceBootstrapResult>;
export declare function serviceBootstrapCommand(input: {
    installInput?: unknown;
}): Promise<import("..").CliOutputEnvelope<ServiceBootstrapResult>>;
export {};
