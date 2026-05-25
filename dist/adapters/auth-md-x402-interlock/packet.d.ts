import { z } from "zod";
export declare const AuthMdX402InterlockAuthorityBoundarySchema: z.ZodObject<{
    createsAuthority: z.ZodLiteral<false>;
    createsPolicyDecision: z.ZodLiteral<false>;
    createsGreenlight: z.ZodLiteral<false>;
    performsGatewayCheck: z.ZodLiteral<false>;
    performsMutation: z.ZodLiteral<false>;
    resolvesCredential: z.ZodLiteral<false>;
    invokesSigner: z.ZodLiteral<false>;
    createsPaymentPayload: z.ZodLiteral<false>;
    createsPaymentSignature: z.ZodLiteral<false>;
    exportsReceipt: z.ZodLiteral<false>;
    mintsTerminalCertificate: z.ZodLiteral<false>;
    claimsSettlement: z.ZodLiteral<false>;
    claimsProviderCustody: z.ZodLiteral<false>;
    claimsHostedOperation: z.ZodLiteral<false>;
    certifiesMarketplace: z.ZodLiteral<false>;
    establishesCrossOrgTrust: z.ZodLiteral<false>;
}, z.core.$strict>;
export type AuthMdX402InterlockAuthorityBoundary = z.infer<typeof AuthMdX402InterlockAuthorityBoundarySchema>;
export declare const authMdX402InterlockAuthorityBoundary: {
    createsAuthority: false;
    createsPolicyDecision: false;
    createsGreenlight: false;
    performsGatewayCheck: false;
    performsMutation: false;
    resolvesCredential: false;
    invokesSigner: false;
    createsPaymentPayload: false;
    createsPaymentSignature: false;
    exportsReceipt: false;
    mintsTerminalCertificate: false;
    claimsSettlement: false;
    claimsProviderCustody: false;
    claimsHostedOperation: false;
    certifiesMarketplace: false;
    establishesCrossOrgTrust: false;
};
export declare const AuthMdX402InterlockNonClaimSchema: z.ZodEnum<{
    not_authority: "not_authority";
    not_policy_decision: "not_policy_decision";
    not_greenlight: "not_greenlight";
    not_gateway_check: "not_gateway_check";
    not_mutation: "not_mutation";
    not_credential_resolution: "not_credential_resolution";
    not_payment_signing: "not_payment_signing";
    not_receipt_export: "not_receipt_export";
    not_downstream_success: "not_downstream_success";
    not_provider_custody: "not_provider_custody";
    not_hosted_operation: "not_hosted_operation";
    not_marketplace_certification: "not_marketplace_certification";
    not_cross_org_trust: "not_cross_org_trust";
}>;
export type AuthMdX402InterlockNonClaim = z.infer<typeof AuthMdX402InterlockNonClaimSchema>;
export declare const AuthMdX402InterlockProofGapSchema: z.ZodObject<{
    reasonCode: z.ZodString;
    evidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type AuthMdX402InterlockProofGap = z.infer<typeof AuthMdX402InterlockProofGapSchema>;
export declare const AuthMdX402GeneratedAttemptSchema: z.ZodObject<{
    principalIntentRef: z.ZodString;
    generatedCodeOrSpecRef: z.ZodString;
    runtimeExecutionId: z.ZodNullable<z.ZodString>;
    generatedExecutionGraphId: z.ZodNullable<z.ZodString>;
    toolCallDraftId: z.ZodNullable<z.ZodString>;
    candidateActionIds: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type AuthMdX402GeneratedAttempt = z.infer<typeof AuthMdX402GeneratedAttemptSchema>;
export declare const AuthMdCredentialResolutionPostureSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    post_gateway_check_evidence: "post_gateway_check_evidence";
    not_present: "not_present";
}>;
export type AuthMdCredentialResolutionPosture = z.infer<typeof AuthMdCredentialResolutionPostureSchema>;
export declare const AuthMdCredentialLifecycleStateSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    active: "active";
    revoked: "revoked";
    expired: "expired";
    quarantined: "quarantined";
}>;
export type AuthMdCredentialLifecycleState = z.infer<typeof AuthMdCredentialLifecycleStateSchema>;
export declare const AuthMdProvenanceEvidenceSchema: z.ZodObject<{
    discoveryEvidenceRefs: z.ZodArray<z.ZodString>;
    registrationEvidenceRefs: z.ZodArray<z.ZodString>;
    identityAssertionEvidenceRefs: z.ZodArray<z.ZodString>;
    claimEvidenceRefs: z.ZodArray<z.ZodString>;
    revocationEvidenceRefs: z.ZodArray<z.ZodString>;
    gatewayCredentialRefId: z.ZodString;
    gatewayCredentialRefDigest: z.ZodString;
    credentialResolutionEvidenceRef: z.ZodNullable<z.ZodString>;
    credentialResolutionPosture: z.ZodEnum<{
        proof_gap: "proof_gap";
        post_gateway_check_evidence: "post_gateway_check_evidence";
        not_present: "not_present";
    }>;
    credentialLifecycleState: z.ZodEnum<{
        proof_gap: "proof_gap";
        active: "active";
        revoked: "revoked";
        expired: "expired";
        quarantined: "quarantined";
    }>;
    providerRegistryRef: z.ZodString;
    providerRegistryDigest: z.ZodNullable<z.ZodString>;
    rawCredentialMaterialObserved: z.ZodBoolean;
}, z.core.$strict>;
export type AuthMdProvenanceEvidence = z.infer<typeof AuthMdProvenanceEvidenceSchema>;
export declare const X402SignerInvocationPostureSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    post_gateway_check_evidence: "post_gateway_check_evidence";
    not_present: "not_present";
}>;
export type X402SignerInvocationPosture = z.infer<typeof X402SignerInvocationPostureSchema>;
export declare const X402ProtectedSpendEvidenceSchema: z.ZodObject<{
    paymentRequiredEvidenceRef: z.ZodString;
    paymentRequirementsDigest: z.ZodString;
    selectedPaymentRequirementDigest: z.ZodNullable<z.ZodString>;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyDecisionRef: z.ZodNullable<z.ZodString>;
    greenlightId: z.ZodNullable<z.ZodString>;
    gatewayCheckRef: z.ZodNullable<z.ZodString>;
    paymentSignatureEvidenceRef: z.ZodNullable<z.ZodString>;
    paymentPayloadDigest: z.ZodNullable<z.ZodString>;
    paymentSignatureDigest: z.ZodNullable<z.ZodString>;
    signerInvocationPosture: z.ZodEnum<{
        proof_gap: "proof_gap";
        post_gateway_check_evidence: "post_gateway_check_evidence";
        not_present: "not_present";
    }>;
    replayRefusalEvidenceRefs: z.ZodArray<z.ZodString>;
    rawPaymentMaterialObserved: z.ZodBoolean;
}, z.core.$strict>;
export type X402ProtectedSpendEvidence = z.infer<typeof X402ProtectedSpendEvidenceSchema>;
export declare const AuthMdX402InterlockPacketInputSchema: z.ZodObject<{
    packetId: z.ZodString;
    profile: z.ZodDefault<z.ZodLiteral<"protected_spend_provenance.v0">>;
    generatedAttempt: z.ZodObject<{
        principalIntentRef: z.ZodString;
        generatedCodeOrSpecRef: z.ZodString;
        runtimeExecutionId: z.ZodNullable<z.ZodString>;
        generatedExecutionGraphId: z.ZodNullable<z.ZodString>;
        toolCallDraftId: z.ZodNullable<z.ZodString>;
        candidateActionIds: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    authMdProvenance: z.ZodObject<{
        discoveryEvidenceRefs: z.ZodArray<z.ZodString>;
        registrationEvidenceRefs: z.ZodArray<z.ZodString>;
        identityAssertionEvidenceRefs: z.ZodArray<z.ZodString>;
        claimEvidenceRefs: z.ZodArray<z.ZodString>;
        revocationEvidenceRefs: z.ZodArray<z.ZodString>;
        gatewayCredentialRefId: z.ZodString;
        gatewayCredentialRefDigest: z.ZodString;
        credentialResolutionEvidenceRef: z.ZodNullable<z.ZodString>;
        credentialResolutionPosture: z.ZodEnum<{
            proof_gap: "proof_gap";
            post_gateway_check_evidence: "post_gateway_check_evidence";
            not_present: "not_present";
        }>;
        credentialLifecycleState: z.ZodEnum<{
            proof_gap: "proof_gap";
            active: "active";
            revoked: "revoked";
            expired: "expired";
            quarantined: "quarantined";
        }>;
        providerRegistryRef: z.ZodString;
        providerRegistryDigest: z.ZodNullable<z.ZodString>;
        rawCredentialMaterialObserved: z.ZodBoolean;
    }, z.core.$strict>;
    x402ProtectedSpend: z.ZodObject<{
        paymentRequiredEvidenceRef: z.ZodString;
        paymentRequirementsDigest: z.ZodString;
        selectedPaymentRequirementDigest: z.ZodNullable<z.ZodString>;
        actionContractId: z.ZodString;
        actionContractDigest: z.ZodString;
        policyDecisionRef: z.ZodNullable<z.ZodString>;
        greenlightId: z.ZodNullable<z.ZodString>;
        gatewayCheckRef: z.ZodNullable<z.ZodString>;
        paymentSignatureEvidenceRef: z.ZodNullable<z.ZodString>;
        paymentPayloadDigest: z.ZodNullable<z.ZodString>;
        paymentSignatureDigest: z.ZodNullable<z.ZodString>;
        signerInvocationPosture: z.ZodEnum<{
            proof_gap: "proof_gap";
            post_gateway_check_evidence: "post_gateway_check_evidence";
            not_present: "not_present";
        }>;
        replayRefusalEvidenceRefs: z.ZodArray<z.ZodString>;
        rawPaymentMaterialObserved: z.ZodBoolean;
    }, z.core.$strict>;
    proofGaps: z.ZodDefault<z.ZodArray<z.ZodObject<{
        reasonCode: z.ZodString;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type AuthMdX402InterlockPacketInput = z.input<typeof AuthMdX402InterlockPacketInputSchema>;
export declare const AuthMdX402RawMaterialPostureSchema: z.ZodEnum<{
    absent: "absent";
}>;
export type AuthMdX402RawMaterialPosture = z.infer<typeof AuthMdX402RawMaterialPostureSchema>;
export declare const AuthMdX402OrderingPostureSchema: z.ZodEnum<{
    post_gate_only: "post_gate_only";
    not_proven: "not_proven";
}>;
export type AuthMdX402OrderingPosture = z.infer<typeof AuthMdX402OrderingPostureSchema>;
export declare const AuthMdX402InterlockPacketSchema: z.ZodObject<{
    packetKind: z.ZodLiteral<"auth_md_x402_interlock_packet">;
    packetVersion: z.ZodLiteral<"v0">;
    packetId: z.ZodString;
    profile: z.ZodLiteral<"protected_spend_provenance.v0">;
    generatedAttempt: z.ZodObject<{
        principalIntentRef: z.ZodString;
        generatedCodeOrSpecRef: z.ZodString;
        runtimeExecutionId: z.ZodNullable<z.ZodString>;
        generatedExecutionGraphId: z.ZodNullable<z.ZodString>;
        toolCallDraftId: z.ZodNullable<z.ZodString>;
        candidateActionIds: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    authMdProvenance: z.ZodObject<{
        discoveryEvidenceRefs: z.ZodArray<z.ZodString>;
        registrationEvidenceRefs: z.ZodArray<z.ZodString>;
        identityAssertionEvidenceRefs: z.ZodArray<z.ZodString>;
        claimEvidenceRefs: z.ZodArray<z.ZodString>;
        revocationEvidenceRefs: z.ZodArray<z.ZodString>;
        gatewayCredentialRefId: z.ZodString;
        gatewayCredentialRefDigest: z.ZodString;
        credentialResolutionEvidenceRef: z.ZodNullable<z.ZodString>;
        credentialResolutionPosture: z.ZodEnum<{
            proof_gap: "proof_gap";
            post_gateway_check_evidence: "post_gateway_check_evidence";
            not_present: "not_present";
        }>;
        credentialLifecycleState: z.ZodEnum<{
            proof_gap: "proof_gap";
            active: "active";
            revoked: "revoked";
            expired: "expired";
            quarantined: "quarantined";
        }>;
        providerRegistryRef: z.ZodString;
        providerRegistryDigest: z.ZodNullable<z.ZodString>;
        rawCredentialMaterialObserved: z.ZodLiteral<false>;
    }, z.core.$strict>;
    x402ProtectedSpend: z.ZodObject<{
        paymentRequiredEvidenceRef: z.ZodString;
        paymentRequirementsDigest: z.ZodString;
        selectedPaymentRequirementDigest: z.ZodNullable<z.ZodString>;
        actionContractId: z.ZodString;
        actionContractDigest: z.ZodString;
        policyDecisionRef: z.ZodNullable<z.ZodString>;
        greenlightId: z.ZodNullable<z.ZodString>;
        gatewayCheckRef: z.ZodNullable<z.ZodString>;
        paymentSignatureEvidenceRef: z.ZodNullable<z.ZodString>;
        paymentPayloadDigest: z.ZodNullable<z.ZodString>;
        paymentSignatureDigest: z.ZodNullable<z.ZodString>;
        signerInvocationPosture: z.ZodEnum<{
            proof_gap: "proof_gap";
            post_gateway_check_evidence: "post_gateway_check_evidence";
            not_present: "not_present";
        }>;
        replayRefusalEvidenceRefs: z.ZodArray<z.ZodString>;
        rawPaymentMaterialObserved: z.ZodLiteral<false>;
    }, z.core.$strict>;
    proofGaps: z.ZodArray<z.ZodObject<{
        reasonCode: z.ZodString;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    blockedChecks: z.ZodArray<z.ZodString>;
    readyForCompositeExecution: z.ZodLiteral<false>;
    rawMaterialPosture: z.ZodEnum<{
        absent: "absent";
    }>;
    credentialAndSignerOrdering: z.ZodEnum<{
        post_gate_only: "post_gate_only";
        not_proven: "not_proven";
    }>;
    nonClaims: z.ZodArray<z.ZodEnum<{
        not_authority: "not_authority";
        not_policy_decision: "not_policy_decision";
        not_greenlight: "not_greenlight";
        not_gateway_check: "not_gateway_check";
        not_mutation: "not_mutation";
        not_credential_resolution: "not_credential_resolution";
        not_payment_signing: "not_payment_signing";
        not_receipt_export: "not_receipt_export";
        not_downstream_success: "not_downstream_success";
        not_provider_custody: "not_provider_custody";
        not_hosted_operation: "not_hosted_operation";
        not_marketplace_certification: "not_marketplace_certification";
        not_cross_org_trust: "not_cross_org_trust";
    }>>;
    authorityBoundary: z.ZodObject<{
        createsAuthority: z.ZodLiteral<false>;
        createsPolicyDecision: z.ZodLiteral<false>;
        createsGreenlight: z.ZodLiteral<false>;
        performsGatewayCheck: z.ZodLiteral<false>;
        performsMutation: z.ZodLiteral<false>;
        resolvesCredential: z.ZodLiteral<false>;
        invokesSigner: z.ZodLiteral<false>;
        createsPaymentPayload: z.ZodLiteral<false>;
        createsPaymentSignature: z.ZodLiteral<false>;
        exportsReceipt: z.ZodLiteral<false>;
        mintsTerminalCertificate: z.ZodLiteral<false>;
        claimsSettlement: z.ZodLiteral<false>;
        claimsProviderCustody: z.ZodLiteral<false>;
        claimsHostedOperation: z.ZodLiteral<false>;
        certifiesMarketplace: z.ZodLiteral<false>;
        establishesCrossOrgTrust: z.ZodLiteral<false>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AuthMdX402InterlockPacket = z.infer<typeof AuthMdX402InterlockPacketSchema>;
export declare function projectAuthMdX402InterlockPacket(inputValue: AuthMdX402InterlockPacketInput): AuthMdX402InterlockPacket;
