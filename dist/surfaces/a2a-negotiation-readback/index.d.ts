import { z } from "zod";
declare const ReadbackStatusSchema: z.ZodEnum<{
    policy_greenlit: "policy_greenlit";
    proof_gap: "proof_gap";
    refused: "refused";
    downstream_succeeded: "downstream_succeeded";
    agreement_evidence_only: "agreement_evidence_only";
    gateway_checked_downstream_unknown: "gateway_checked_downstream_unknown";
    readback_assembly_failed: "readback_assembly_failed";
}>;
declare const NonClaimSchema: z.ZodEnum<{
    marketplace_operation: "marketplace_operation";
    legal_contract_formation: "legal_contract_formation";
    escrow: "escrow";
    settlement_finality: "settlement_finality";
    reputation: "reputation";
    cross_org_trust: "cross_org_trust";
    provider_custody: "provider_custody";
    reusable_authority: "reusable_authority";
    native_host_containment: "native_host_containment";
}>;
export declare const A2ANegotiationReadbackInputSchema: z.ZodObject<{
    packetKind: z.ZodLiteral<"a2a_negotiation_support_packet">;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    paramsDigest: z.ZodString;
    actionClass: z.ZodString;
    resourceRef: z.ZodString;
    agreement: z.ZodNullable<z.ZodObject<{
        linkedAgreementId: z.ZodString;
        agreementDigest: z.ZodString;
        agreementStatus: z.ZodString;
        obligationRef: z.ZodNullable<z.ZodString>;
        counterpartyRef: z.ZodString;
        evidencePosture: z.ZodLiteral<"local_evidence_only">;
    }, z.core.$strict>>;
    obligationBinding: z.ZodNullable<z.ZodObject<{
        agreementObligationBindingId: z.ZodString;
        obligationRef: z.ZodString;
        actionContractDigest: z.ZodString;
        paramsDigest: z.ZodString;
        counterpartyRef: z.ZodString;
    }, z.core.$strict>>;
    negotiation: z.ZodNullable<z.ZodObject<{
        negotiationSessionId: z.ZodString;
        acceptedOfferVersionId: z.ZodString;
        acceptedNegotiationDecisionId: z.ZodString;
        acceptedOfferContentDigest: z.ZodString;
        partyRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    lifecycle: z.ZodObject<{
        assemblyStatus: z.ZodEnum<{
            failed: "failed";
            assembled: "assembled";
        }>;
        assemblyReasonCode: z.ZodNullable<z.ZodString>;
        assemblyReason: z.ZodNullable<z.ZodString>;
        policyDecisionId: z.ZodNullable<z.ZodString>;
        policyDecision: z.ZodNullable<z.ZodString>;
        greenlightId: z.ZodNullable<z.ZodString>;
        gatewayCheckAttemptId: z.ZodNullable<z.ZodString>;
        mutationAttemptId: z.ZodNullable<z.ZodString>;
        receiptId: z.ZodNullable<z.ZodString>;
        downstreamFinalityStatus: z.ZodNullable<z.ZodString>;
        proofGapIds: z.ZodArray<z.ZodString>;
        refusalIds: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    authorityBoundary: z.ZodObject<{
        agreementAcceptanceCreatedAuthority: z.ZodLiteral<false>;
        obligationBindingCreatedAuthority: z.ZodLiteral<false>;
        policyMayCreateOneUseGreenlight: z.ZodBoolean;
        gatewayCheckRemainsFinalEnforcementPoint: z.ZodLiteral<true>;
        downstreamSuccessClaimedByAgreement: z.ZodLiteral<false>;
    }, z.core.$strict>;
    redaction: z.ZodObject<{
        rawTranscriptIncluded: z.ZodLiteral<false>;
        rawOfferTermsIncluded: z.ZodLiteral<false>;
        paymentPayloadIncluded: z.ZodLiteral<false>;
        paymentSignatureIncluded: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
    }, z.core.$strict>;
}, z.core.$strict>;
export declare const A2ANegotiationProductReadbackSchema: z.ZodObject<{
    readbackKind: z.ZodLiteral<"a2a_negotiation_product_readback">;
    schemaVersion: z.ZodLiteral<"a2a.negotiation.readback.v1">;
    status: z.ZodEnum<{
        policy_greenlit: "policy_greenlit";
        proof_gap: "proof_gap";
        refused: "refused";
        downstream_succeeded: "downstream_succeeded";
        agreement_evidence_only: "agreement_evidence_only";
        gateway_checked_downstream_unknown: "gateway_checked_downstream_unknown";
        readback_assembly_failed: "readback_assembly_failed";
    }>;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    paramsDigest: z.ZodString;
    actionClass: z.ZodString;
    resourceRef: z.ZodString;
    negotiatedEvidence: z.ZodObject<{
        linkedAgreementId: z.ZodNullable<z.ZodString>;
        agreementStatus: z.ZodNullable<z.ZodString>;
        obligationRef: z.ZodNullable<z.ZodString>;
        counterpartyRef: z.ZodNullable<z.ZodString>;
        evidencePosture: z.ZodNullable<z.ZodLiteral<"local_evidence_only">>;
    }, z.core.$strict>;
    protectedAction: z.ZodObject<{
        policyDecisionId: z.ZodNullable<z.ZodString>;
        policyDecision: z.ZodNullable<z.ZodString>;
        greenlightId: z.ZodNullable<z.ZodString>;
        gatewayCheckAttemptId: z.ZodNullable<z.ZodString>;
        mutationAttemptId: z.ZodNullable<z.ZodString>;
        receiptId: z.ZodNullable<z.ZodString>;
        downstreamFinalityStatus: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
    developerExperience: z.ZodObject<{
        targetTimeToHelloWorldMinutes: z.ZodLiteral<5>;
        runCommand: z.ZodLiteral<"bun examples/a2a-negotiated-x402-room/generate.ts">;
        expectedOutputFiles: z.ZodTuple<[z.ZodLiteral<"latest.json">, z.ZodLiteral<"latest.md">, z.ZodLiteral<"agent-handoff.md">], null>;
        inspectFirst: z.ZodArray<z.ZodString>;
        failureModes: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    agentExperience: z.ZodObject<{
        runtimeProfiles: z.ZodArray<z.ZodEnum<{
            mcp: "mcp";
            x402: "x402";
            codex: "codex";
            generic: "generic";
        }>>;
        sourceBoundary: z.ZodArray<z.ZodString>;
        toolContract: z.ZodArray<z.ZodString>;
        stopConditions: z.ZodArray<z.ZodString>;
        recoveryPath: z.ZodArray<z.ZodString>;
        evalPath: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    customerExperience: z.ZodObject<{
        headline: z.ZodString;
        verified: z.ZodArray<z.ZodString>;
        unknown: z.ZodArray<z.ZodString>;
        nextActions: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    authorityBoundary: z.ZodObject<{
        agreementAcceptanceCreatedAuthority: z.ZodLiteral<false>;
        obligationBindingCreatedAuthority: z.ZodLiteral<false>;
        policyMayCreateOneUseGreenlight: z.ZodBoolean;
        gatewayCheckRemainsFinalEnforcementPoint: z.ZodLiteral<true>;
        downstreamSuccessClaimedByAgreement: z.ZodLiteral<false>;
    }, z.core.$strict>;
    redaction: z.ZodObject<{
        rawTranscriptIncluded: z.ZodLiteral<false>;
        rawOfferTermsIncluded: z.ZodLiteral<false>;
        paymentPayloadIncluded: z.ZodLiteral<false>;
        paymentSignatureIncluded: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
    }, z.core.$strict>;
    nonClaims: z.ZodArray<z.ZodEnum<{
        marketplace_operation: "marketplace_operation";
        legal_contract_formation: "legal_contract_formation";
        escrow: "escrow";
        settlement_finality: "settlement_finality";
        reputation: "reputation";
        cross_org_trust: "cross_org_trust";
        provider_custody: "provider_custody";
        reusable_authority: "reusable_authority";
        native_host_containment: "native_host_containment";
    }>>;
}, z.core.$strict>;
export type A2ANegotiationReadbackInput = z.infer<typeof A2ANegotiationReadbackInputSchema>;
export type A2ANegotiationProductReadback = z.infer<typeof A2ANegotiationProductReadbackSchema>;
export type A2ANegotiationReadbackStatus = z.infer<typeof ReadbackStatusSchema>;
export type A2ANegotiationNonClaim = z.infer<typeof NonClaimSchema>;
export declare const a2aNegotiationReadbackNonClaims: readonly A2ANegotiationNonClaim[];
export declare function projectA2ANegotiationProductReadback(inputValue: A2ANegotiationReadbackInput): A2ANegotiationProductReadback;
export declare function renderA2ANegotiationCustomerReadback(readback: A2ANegotiationProductReadback): string;
export declare function renderA2ANegotiationAgentHandoff(readback: A2ANegotiationProductReadback): string;
export {};
