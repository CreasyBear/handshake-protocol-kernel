import type { CompileIntentInput } from "../../protocol/areas/intent-compilation";
import { type AuthMdProtectedApiCallRuntimeConfig } from "../../adapters/auth-md/action-proposal";
import { type X402PaymentRuntimeConfig } from "../../adapters/x402-payment/action-proposal";
import { type PackageInstallRuntimeConfig } from "../package-install/action-proposal";
import type { ParsedRuntimeIngressDispatchBlock, ParsedRuntimeIngressObservedDispatch, RuntimeIngressDispatchBlockRefs } from "./schemas";
export type RuntimeIngressFamilyConfig = PackageInstallRuntimeConfig | X402PaymentRuntimeConfig | AuthMdProtectedApiCallRuntimeConfig;
export type RuntimeIngressConfig = {
    packageInstall?: PackageInstallRuntimeConfig;
    x402Payment?: X402PaymentRuntimeConfig;
    authMdProtectedApiCall?: AuthMdProtectedApiCallRuntimeConfig;
};
type RuntimeIngressGraphRefs = {
    runtimeExecutionId: string;
    generatedExecutionGraphId: string;
};
export declare function buildCompileIntentInputForDispatch(config: RuntimeIngressConfig, block: ParsedRuntimeIngressDispatchBlock, dispatch: ParsedRuntimeIngressObservedDispatch, sequenceNumber: number, graphRefs: RuntimeIngressGraphRefs, requiredPriorActionContractIds?: string[]): Promise<CompileIntentInput>;
export declare function dispatchGeneratedCodeOrSpecRef(block: RuntimeIngressDispatchBlockRefs, dispatch: ParsedRuntimeIngressObservedDispatch, sequenceNumber: number): string;
export declare function dispatchSpecificRefusalReasonCodes(dispatch: ParsedRuntimeIngressObservedDispatch): string[];
export declare function runtimeIngressEvidenceRefs(block: ParsedRuntimeIngressDispatchBlock): string[];
export declare function runtimeConfigForDispatch(config: RuntimeIngressConfig, dispatch: ParsedRuntimeIngressObservedDispatch): RuntimeIngressFamilyConfig;
export declare function signingSecretForDispatch(config: RuntimeIngressConfig, dispatch: ParsedRuntimeIngressObservedDispatch): string | undefined;
export declare function supportedGrammarVersionForBlock(block: ParsedRuntimeIngressDispatchBlock): string;
export declare function isRawSiblingDispatch(dispatch: ParsedRuntimeIngressObservedDispatch): dispatch is Extract<ParsedRuntimeIngressObservedDispatch, {
    rawCommandRef: string;
    rawCommandSummary: string[];
}>;
export declare function isAmbiguousDispatch(dispatch: ParsedRuntimeIngressObservedDispatch): dispatch is Extract<ParsedRuntimeIngressObservedDispatch, {
    ambiguousReasonCodes: string[];
}>;
export {};
