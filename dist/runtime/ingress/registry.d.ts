export type RuntimeIngressFamilyId = "package_install" | "x402_payment" | "auth_md_protected_api_call";
export type RuntimeIngressFamilyDescriptor = {
    familyId: RuntimeIngressFamilyId;
    configKey: "packageInstall" | "x402Payment" | "authMdProtectedApiCall";
    dispatchKindSuffix: `_${string}`;
    grammarVersion: string;
    authorityPosture: "proposal_only";
    compileInputAuthority: "candidate_only";
    rawBypassPosture: "bypass_evidence_only";
};
export declare const runtimeIngressFamilyRegistry: readonly [{
    readonly familyId: "package_install";
    readonly configKey: "packageInstall";
    readonly dispatchKindSuffix: "_package_install";
    readonly grammarVersion: "runtime-dispatch-package-install-0.1";
    readonly authorityPosture: "proposal_only";
    readonly compileInputAuthority: "candidate_only";
    readonly rawBypassPosture: "bypass_evidence_only";
}, {
    readonly familyId: "x402_payment";
    readonly configKey: "x402Payment";
    readonly dispatchKindSuffix: "_x402_payment";
    readonly grammarVersion: "runtime-dispatch-x402-payment-0.1";
    readonly authorityPosture: "proposal_only";
    readonly compileInputAuthority: "candidate_only";
    readonly rawBypassPosture: "bypass_evidence_only";
}, {
    readonly familyId: "auth_md_protected_api_call";
    readonly configKey: "authMdProtectedApiCall";
    readonly dispatchKindSuffix: "_auth_md_protected_api_call";
    readonly grammarVersion: "runtime-dispatch-auth-md-protected-api-call-0.1";
    readonly authorityPosture: "proposal_only";
    readonly compileInputAuthority: "candidate_only";
    readonly rawBypassPosture: "bypass_evidence_only";
}];
export declare function runtimeIngressFamilyDescriptorForDispatchKind(dispatchKind: string): RuntimeIngressFamilyDescriptor | null;
export declare function runtimeIngressFamilyIdForDispatchKind(dispatchKind: string): RuntimeIngressFamilyId | null;
export declare function runtimeIngressGrammarVersionForFamilySet(families: ReadonlySet<RuntimeIngressFamilyId>): string;
