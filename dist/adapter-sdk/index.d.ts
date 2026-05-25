import { z } from "zod";
import { type InstallProposal } from "../install/install-proposal";
export declare const AdapterSdkBindingStatusSchema: z.ZodLiteral<"definition_only">;
export type AdapterSdkBindingStatus = z.infer<typeof AdapterSdkBindingStatusSchema>;
export declare const AdapterSdkAuthorityBoundarySchema: z.ZodObject<{
    authorityCreated: z.ZodLiteral<false>;
    authorityCertificateMinted: z.ZodLiteral<false>;
    credentialMaterialIncluded: z.ZodLiteral<false>;
    gatewayCheckPerformed: z.ZodLiteral<false>;
    greenlightCreated: z.ZodLiteral<false>;
    mutationAttempted: z.ZodLiteral<false>;
    mutationCommandIncluded: z.ZodLiteral<false>;
    policyDecisionCreated: z.ZodLiteral<false>;
    rawInternalRecordIncluded: z.ZodLiteral<false>;
    receiptExportCreated: z.ZodLiteral<false>;
    providerCustodyClaimed: z.ZodLiteral<false>;
    marketplaceCertificationClaimed: z.ZodLiteral<false>;
    settlementClaimed: z.ZodLiteral<false>;
}, z.core.$strict>;
export type AdapterSdkAuthorityBoundary = z.infer<typeof AdapterSdkAuthorityBoundarySchema>;
export declare const adapterSdkAuthorityBoundary: AdapterSdkAuthorityBoundary;
export declare const adapterSdkRequiredNonClaims: readonly ["adapter_sdk_does_not_create_authority", "adapter_sdk_does_not_evaluate_policy", "adapter_sdk_does_not_create_greenlights", "adapter_sdk_does_not_perform_gateway_checks", "adapter_sdk_does_not_attempt_mutations", "adapter_sdk_does_not_export_receipts", "adapter_sdk_does_not_hold_provider_custody", "adapter_sdk_does_not_certify_adapters", "adapter_sdk_does_not_register_marketplace_listings", "adapter_sdk_runtime_ingress_binding_is_source_owned"];
export type AdapterSdkRequiredNonClaim = (typeof adapterSdkRequiredNonClaims)[number];
export declare const AdapterSdkInstallCompilerContractSchema: z.ZodObject<{
    installCompilerRef: z.ZodString;
    inputSchemaRef: z.ZodString;
    outputSchemaRef: z.ZodLiteral<"handshake.install_proposal">;
    refusalBoundaryRef: z.ZodString;
    statusIntegrityRequired: z.ZodLiteral<true>;
}, z.core.$strict>;
export type AdapterSdkInstallCompilerContract = z.infer<typeof AdapterSdkInstallCompilerContractSchema>;
export declare const AdapterSdkProtectedPathContractSchema: z.ZodObject<{
    protectedPathContractRef: z.ZodString;
    observedParameterValidatorRef: z.ZodString;
    receiptEvidenceMapperRef: z.ZodString;
    bypassProbeKinds: z.ZodArray<z.ZodEnum<{
        credential_custody: "credential_custody";
        raw_sibling_blocking: "raw_sibling_blocking";
        mcp_direct_call_blocking: "mcp_direct_call_blocking";
        token_passthrough_blocking: "token_passthrough_blocking";
        wrapper_drift: "wrapper_drift";
        failure_closed: "failure_closed";
    }>>;
    bindingStatus: z.ZodDefault<z.ZodLiteral<"definition_only">>;
}, z.core.$strict>;
export type AdapterSdkProtectedPathContract = z.infer<typeof AdapterSdkProtectedPathContractSchema>;
export declare const AdapterSdkConformanceExpectationSchema: z.ZodObject<{
    expectationId: z.ZodString;
    title: z.ZodString;
    evidenceRef: z.ZodString;
    required: z.ZodLiteral<true>;
}, z.core.$strict>;
export type AdapterSdkConformanceExpectation = z.infer<typeof AdapterSdkConformanceExpectationSchema>;
export declare const AdapterSdkDefinitionSchema: z.ZodObject<{
    adapterPack: z.ZodObject<{
        adapterPackId: z.ZodString;
        adapterPackVersion: z.ZodString;
        actionFamily: z.ZodString;
        protectedSurfaceKind: z.ZodString;
        parameterSchemaRef: z.ZodString;
        endpointEvidenceSchemaRef: z.ZodString;
        installCompilerRef: z.ZodString;
        policyRulePackRef: z.ZodString;
        gatewayObservedParameterValidatorRef: z.ZodString;
        receiptEvidenceMapperRef: z.ZodString;
        bypassProbeKinds: z.ZodArray<z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>>;
        hostileFixtureRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    runtimeIngressBindingStatus: z.ZodLiteral<"definition_only">;
    protectedPathBindingStatus: z.ZodLiteral<"definition_only">;
    installCompilerContract: z.ZodObject<{
        installCompilerRef: z.ZodString;
        inputSchemaRef: z.ZodString;
        outputSchemaRef: z.ZodLiteral<"handshake.install_proposal">;
        refusalBoundaryRef: z.ZodString;
        statusIntegrityRequired: z.ZodLiteral<true>;
    }, z.core.$strict>;
    protectedPathContract: z.ZodObject<{
        protectedPathContractRef: z.ZodString;
        observedParameterValidatorRef: z.ZodString;
        receiptEvidenceMapperRef: z.ZodString;
        bypassProbeKinds: z.ZodArray<z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>>;
        bindingStatus: z.ZodDefault<z.ZodLiteral<"definition_only">>;
    }, z.core.$strict>;
    conformanceExpectations: z.ZodArray<z.ZodObject<{
        expectationId: z.ZodString;
        title: z.ZodString;
        evidenceRef: z.ZodString;
        required: z.ZodLiteral<true>;
    }, z.core.$strict>>;
    authorityBoundary: z.ZodObject<{
        authorityCreated: z.ZodLiteral<false>;
        authorityCertificateMinted: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        mutationCommandIncluded: z.ZodLiteral<false>;
        policyDecisionCreated: z.ZodLiteral<false>;
        rawInternalRecordIncluded: z.ZodLiteral<false>;
        receiptExportCreated: z.ZodLiteral<false>;
        providerCustodyClaimed: z.ZodLiteral<false>;
        marketplaceCertificationClaimed: z.ZodLiteral<false>;
        settlementClaimed: z.ZodLiteral<false>;
    }, z.core.$strict>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type AdapterSdkDefinition = z.infer<typeof AdapterSdkDefinitionSchema>;
export declare const AdapterSdkDefinitionInputSchema: z.ZodObject<{
    adapterPack: z.ZodObject<{
        adapterPackId: z.ZodString;
        adapterPackVersion: z.ZodString;
        actionFamily: z.ZodString;
        protectedSurfaceKind: z.ZodString;
        parameterSchemaRef: z.ZodString;
        endpointEvidenceSchemaRef: z.ZodString;
        installCompilerRef: z.ZodString;
        policyRulePackRef: z.ZodString;
        gatewayObservedParameterValidatorRef: z.ZodString;
        receiptEvidenceMapperRef: z.ZodString;
        bypassProbeKinds: z.ZodArray<z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>>;
        hostileFixtureRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    installCompilerContract: z.ZodObject<{
        installCompilerRef: z.ZodString;
        inputSchemaRef: z.ZodString;
        outputSchemaRef: z.ZodLiteral<"handshake.install_proposal">;
        refusalBoundaryRef: z.ZodString;
        statusIntegrityRequired: z.ZodLiteral<true>;
    }, z.core.$strict>;
    protectedPathContract: z.ZodObject<{
        protectedPathContractRef: z.ZodString;
        observedParameterValidatorRef: z.ZodString;
        receiptEvidenceMapperRef: z.ZodString;
        bypassProbeKinds: z.ZodArray<z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>>;
        bindingStatus: z.ZodDefault<z.ZodLiteral<"definition_only">>;
    }, z.core.$strict>;
    conformanceExpectations: z.ZodArray<z.ZodObject<{
        expectationId: z.ZodString;
        title: z.ZodString;
        evidenceRef: z.ZodString;
        required: z.ZodLiteral<true>;
    }, z.core.$strict>>;
    authorityBoundary: z.ZodDefault<z.ZodObject<{
        authorityCreated: z.ZodLiteral<false>;
        authorityCertificateMinted: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        mutationCommandIncluded: z.ZodLiteral<false>;
        policyDecisionCreated: z.ZodLiteral<false>;
        rawInternalRecordIncluded: z.ZodLiteral<false>;
        receiptExportCreated: z.ZodLiteral<false>;
        providerCustodyClaimed: z.ZodLiteral<false>;
        marketplaceCertificationClaimed: z.ZodLiteral<false>;
        settlementClaimed: z.ZodLiteral<false>;
    }, z.core.$strict>>;
    nonClaims: z.ZodDefault<z.ZodArray<z.ZodString>>;
    protectedPathBindingStatus: z.ZodDefault<z.ZodLiteral<"definition_only">>;
    runtimeIngressBindingStatus: z.ZodDefault<z.ZodLiteral<"definition_only">>;
}, z.core.$strict>;
export type AdapterSdkDefinitionInput = z.input<typeof AdapterSdkDefinitionInputSchema>;
declare const adapterSdkDefinitionIssueCodes: readonly ["install_compiler_ref_mismatch", "observed_parameter_validator_ref_mismatch", "receipt_evidence_mapper_ref_mismatch", "bypass_probe_kinds_mismatch"];
export declare const AdapterSdkDefinitionIssueCodeSchema: z.ZodEnum<{
    install_compiler_ref_mismatch: "install_compiler_ref_mismatch";
    observed_parameter_validator_ref_mismatch: "observed_parameter_validator_ref_mismatch";
    receipt_evidence_mapper_ref_mismatch: "receipt_evidence_mapper_ref_mismatch";
    bypass_probe_kinds_mismatch: "bypass_probe_kinds_mismatch";
}>;
export type AdapterSdkDefinitionIssueCode = (typeof adapterSdkDefinitionIssueCodes)[number];
export declare const AdapterSdkDefinitionReportSchema: z.ZodObject<{
    reportKind: z.ZodLiteral<"adapter_sdk_definition_report">;
    adapterPackId: z.ZodString;
    adapterPackVersion: z.ZodString;
    actionFamily: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    status: z.ZodEnum<{
        ready_for_source_review: "ready_for_source_review";
        invalid_definition: "invalid_definition";
    }>;
    issueCodes: z.ZodArray<z.ZodEnum<{
        install_compiler_ref_mismatch: "install_compiler_ref_mismatch";
        observed_parameter_validator_ref_mismatch: "observed_parameter_validator_ref_mismatch";
        receipt_evidence_mapper_ref_mismatch: "receipt_evidence_mapper_ref_mismatch";
        bypass_probe_kinds_mismatch: "bypass_probe_kinds_mismatch";
    }>>;
    runtimeIngressBindingStatus: z.ZodLiteral<"definition_only">;
    protectedPathBindingStatus: z.ZodLiteral<"definition_only">;
    authorityBoundary: z.ZodObject<{
        authorityCreated: z.ZodLiteral<false>;
        authorityCertificateMinted: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        mutationCommandIncluded: z.ZodLiteral<false>;
        policyDecisionCreated: z.ZodLiteral<false>;
        rawInternalRecordIncluded: z.ZodLiteral<false>;
        receiptExportCreated: z.ZodLiteral<false>;
        providerCustodyClaimed: z.ZodLiteral<false>;
        marketplaceCertificationClaimed: z.ZodLiteral<false>;
        settlementClaimed: z.ZodLiteral<false>;
    }, z.core.$strict>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type AdapterSdkDefinitionReport = z.infer<typeof AdapterSdkDefinitionReportSchema>;
declare const adapterSdkInstallProposalIssueCodes: readonly ["adapter_pack_id_mismatch", "adapter_pack_version_mismatch", "action_family_mismatch", "protected_surface_kind_mismatch", "ready_install_requires_compiled_records", "refusal_requires_reason_codes", "refusal_must_not_include_compiled_records"];
export declare const AdapterSdkInstallProposalIssueCodeSchema: z.ZodEnum<{
    protected_surface_kind_mismatch: "protected_surface_kind_mismatch";
    adapter_pack_id_mismatch: "adapter_pack_id_mismatch";
    adapter_pack_version_mismatch: "adapter_pack_version_mismatch";
    action_family_mismatch: "action_family_mismatch";
    ready_install_requires_compiled_records: "ready_install_requires_compiled_records";
    refusal_requires_reason_codes: "refusal_requires_reason_codes";
    refusal_must_not_include_compiled_records: "refusal_must_not_include_compiled_records";
}>;
export type AdapterSdkInstallProposalIssueCode = (typeof adapterSdkInstallProposalIssueCodes)[number];
export declare const AdapterSdkInstallProposalReportSchema: z.ZodObject<{
    reportKind: z.ZodLiteral<"adapter_sdk_install_proposal_report">;
    adapterPackId: z.ZodString;
    adapterPackVersion: z.ZodString;
    installProposalId: z.ZodString;
    status: z.ZodEnum<{
        valid_proposal_shape: "valid_proposal_shape";
        invalid_proposal_shape: "invalid_proposal_shape";
    }>;
    issueCodes: z.ZodArray<z.ZodEnum<{
        protected_surface_kind_mismatch: "protected_surface_kind_mismatch";
        adapter_pack_id_mismatch: "adapter_pack_id_mismatch";
        adapter_pack_version_mismatch: "adapter_pack_version_mismatch";
        action_family_mismatch: "action_family_mismatch";
        ready_install_requires_compiled_records: "ready_install_requires_compiled_records";
        refusal_requires_reason_codes: "refusal_requires_reason_codes";
        refusal_must_not_include_compiled_records: "refusal_must_not_include_compiled_records";
    }>>;
    proposalStatus: z.ZodEnum<{
        refused: "refused";
        ready_to_install: "ready_to_install";
    }>;
    compiledRecordsIncluded: z.ZodBoolean;
    refusalReasonCodes: z.ZodArray<z.ZodString>;
    authorityBoundary: z.ZodObject<{
        authorityCreated: z.ZodLiteral<false>;
        authorityCertificateMinted: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        mutationCommandIncluded: z.ZodLiteral<false>;
        policyDecisionCreated: z.ZodLiteral<false>;
        rawInternalRecordIncluded: z.ZodLiteral<false>;
        receiptExportCreated: z.ZodLiteral<false>;
        providerCustodyClaimed: z.ZodLiteral<false>;
        marketplaceCertificationClaimed: z.ZodLiteral<false>;
        settlementClaimed: z.ZodLiteral<false>;
    }, z.core.$strict>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type AdapterSdkInstallProposalReport = z.infer<typeof AdapterSdkInstallProposalReportSchema>;
export type AdapterInstallCompiler<Input = unknown> = {
    readonly installCompilerRef: string;
    readonly compileInstallProposal: (input: Input) => InstallProposal | Promise<InstallProposal>;
};
export declare function defineAdapterInstallCompiler<Input>(compiler: AdapterInstallCompiler<Input>): AdapterInstallCompiler<Input>;
export declare function defineProtectedActionAdapterPack(input: AdapterSdkDefinitionInput): AdapterSdkDefinition;
export declare function projectAdapterSdkDefinitionReport(input: AdapterSdkDefinitionInput): AdapterSdkDefinitionReport;
export declare function projectAdapterSdkInstallProposalReport(definitionInput: AdapterSdkDefinitionInput, proposalInput: InstallProposal): AdapterSdkInstallProposalReport;
export declare function assertAdapterSdkInstallProposal(definitionInput: AdapterSdkDefinitionInput, proposalInput: InstallProposal): InstallProposal;
export {};
