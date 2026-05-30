import { z } from "zod";
export declare const NegotiationPartyIdentityProofPostureSchema: z.ZodEnum<{
    proof_gap_recorded: "proof_gap_recorded";
    self_attested: "self_attested";
    host_verified_ref: "host_verified_ref";
}>;
export type NegotiationPartyIdentityProofPosture = z.infer<typeof NegotiationPartyIdentityProofPostureSchema>;
export declare const NegotiationPartyBindingSchema: z.ZodObject<{
    partyId: z.ZodString;
    partyRole: z.ZodEnum<{
        initiator: "initiator";
        counterparty: "counterparty";
        observer: "observer";
    }>;
    agentRef: z.ZodString;
    organizationRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    runtimeRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    endpointRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    identityProofPosture: z.ZodEnum<{
        proof_gap_recorded: "proof_gap_recorded";
        self_attested: "self_attested";
        host_verified_ref: "host_verified_ref";
    }>;
    identityEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    identityProofDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type NegotiationPartyBinding = z.infer<typeof NegotiationPartyBindingSchema>;
export declare const ExternalProtocolEvidenceRefSchema: z.ZodObject<{
    protocol: z.ZodEnum<{
        a2a: "a2a";
        acp: "acp";
        anp: "anp";
        ap2: "ap2";
        mcp: "mcp";
        runtime_handoff: "runtime_handoff";
        other: "other";
    }>;
    protocolVersion: z.ZodString;
    objectKind: z.ZodString;
    objectRef: z.ZodString;
    objectDigest: z.ZodString;
    evidencePosture: z.ZodLiteral<"imported_evidence_only">;
    evidenceUse: z.ZodEnum<{
        conversation_context: "conversation_context";
        descriptor_context: "descriptor_context";
        runtime_context: "runtime_context";
        mandate_context_evidence: "mandate_context_evidence";
        tool_context: "tool_context";
        handoff_context: "handoff_context";
        other_context: "other_context";
    }>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type ExternalProtocolEvidenceRef = z.infer<typeof ExternalProtocolEvidenceRefSchema>;
export declare const NegotiationSessionSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    negotiationSessionId: z.ZodString;
    negotiationSessionDigest: z.ZodString;
    subjectResourceRef: z.ZodString;
    subjectProtectedActionContextRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    runtimePosture: z.ZodEnum<{
        proof_gap_recorded: "proof_gap_recorded";
        declared_runtime_context: "declared_runtime_context";
        observed_runtime_evidence: "observed_runtime_evidence";
    }>;
    parties: z.ZodArray<z.ZodObject<{
        partyId: z.ZodString;
        partyRole: z.ZodEnum<{
            initiator: "initiator";
            counterparty: "counterparty";
            observer: "observer";
        }>;
        agentRef: z.ZodString;
        organizationRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        runtimeRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        endpointRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        identityProofPosture: z.ZodEnum<{
            proof_gap_recorded: "proof_gap_recorded";
            self_attested: "self_attested";
            host_verified_ref: "host_verified_ref";
        }>;
        identityEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        identityProofDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
    generatedCodeOrSpecRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    declaredAssumptions: z.ZodDefault<z.ZodArray<z.ZodString>>;
    uncertaintyMarkers: z.ZodDefault<z.ZodArray<z.ZodString>>;
    externalProtocolEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        protocol: z.ZodEnum<{
            a2a: "a2a";
            acp: "acp";
            anp: "anp";
            ap2: "ap2";
            mcp: "mcp";
            runtime_handoff: "runtime_handoff";
            other: "other";
        }>;
        protocolVersion: z.ZodString;
        objectKind: z.ZodString;
        objectRef: z.ZodString;
        objectDigest: z.ZodString;
        evidencePosture: z.ZodLiteral<"imported_evidence_only">;
        evidenceUse: z.ZodEnum<{
            conversation_context: "conversation_context";
            descriptor_context: "descriptor_context";
            runtime_context: "runtime_context";
            mandate_context_evidence: "mandate_context_evidence";
            tool_context: "tool_context";
            handoff_context: "handoff_context";
            other_context: "other_context";
        }>;
        proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
    clearingEvidenceRefs: z.ZodDefault<z.ZodObject<{
        correlationRef: z.ZodOptional<z.ZodString>;
        obligationRef: z.ZodOptional<z.ZodString>;
        counterpartyRef: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type NegotiationSession = z.infer<typeof NegotiationSessionSchema>;
export declare const NegotiationOfferSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    negotiationOfferId: z.ZodString;
    negotiationSessionId: z.ZodString;
    offerVersionId: z.ZodString;
    offerSequence: z.ZodNumber;
    offeredByPartyId: z.ZodString;
    previousOfferVersionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    supersedesOfferVersionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    offerContentDigest: z.ZodString;
    offerObjectRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    offerContentRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    externalProtocolEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        protocol: z.ZodEnum<{
            a2a: "a2a";
            acp: "acp";
            anp: "anp";
            ap2: "ap2";
            mcp: "mcp";
            runtime_handoff: "runtime_handoff";
            other: "other";
        }>;
        protocolVersion: z.ZodString;
        objectKind: z.ZodString;
        objectRef: z.ZodString;
        objectDigest: z.ZodString;
        evidencePosture: z.ZodLiteral<"imported_evidence_only">;
        evidenceUse: z.ZodEnum<{
            conversation_context: "conversation_context";
            descriptor_context: "descriptor_context";
            runtime_context: "runtime_context";
            mandate_context_evidence: "mandate_context_evidence";
            tool_context: "tool_context";
            handoff_context: "handoff_context";
            other_context: "other_context";
        }>;
        proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
    generatedCodeOrSpecRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    declaredAssumptions: z.ZodDefault<z.ZodArray<z.ZodString>>;
    uncertaintyMarkers: z.ZodDefault<z.ZodArray<z.ZodString>>;
    clearingEvidenceRefs: z.ZodDefault<z.ZodObject<{
        correlationRef: z.ZodOptional<z.ZodString>;
        obligationRef: z.ZodOptional<z.ZodString>;
        counterpartyRef: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type NegotiationOffer = z.infer<typeof NegotiationOfferSchema>;
export declare const NegotiationDecisionSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    negotiationDecisionId: z.ZodString;
    negotiationSessionId: z.ZodString;
    decidedOfferVersionId: z.ZodString;
    decidedOfferSequence: z.ZodNumber;
    decidedByPartyId: z.ZodString;
    decision: z.ZodEnum<{
        accept: "accept";
        reject: "reject";
        counter: "counter";
        withdraw: "withdraw";
        expire: "expire";
    }>;
    reasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    counterOfferVersionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    decisionDigest: z.ZodString;
}, z.core.$strict>;
export type NegotiationDecision = z.infer<typeof NegotiationDecisionSchema>;
export declare const LinkedAgreementSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    linkedAgreementId: z.ZodString;
    negotiationSessionId: z.ZodString;
    acceptedNegotiationDecisionId: z.ZodString;
    acceptedOfferVersionId: z.ZodString;
    acceptedOfferSequence: z.ZodNumber;
    acceptedOfferContentDigest: z.ZodString;
    acceptedByPartyId: z.ZodString;
    counterpartyRef: z.ZodString;
    agreementDigest: z.ZodString;
    agreementObjectRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    agreementContentRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    agreementEvidencePosture: z.ZodLiteral<"local_evidence_only">;
    clearingEvidenceRefs: z.ZodDefault<z.ZodObject<{
        correlationRef: z.ZodOptional<z.ZodString>;
        obligationRef: z.ZodOptional<z.ZodString>;
        counterpartyRef: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    externalProtocolEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        protocol: z.ZodEnum<{
            a2a: "a2a";
            acp: "acp";
            anp: "anp";
            ap2: "ap2";
            mcp: "mcp";
            runtime_handoff: "runtime_handoff";
            other: "other";
        }>;
        protocolVersion: z.ZodString;
        objectKind: z.ZodString;
        objectRef: z.ZodString;
        objectDigest: z.ZodString;
        evidencePosture: z.ZodLiteral<"imported_evidence_only">;
        evidenceUse: z.ZodEnum<{
            conversation_context: "conversation_context";
            descriptor_context: "descriptor_context";
            runtime_context: "runtime_context";
            mandate_context_evidence: "mandate_context_evidence";
            tool_context: "tool_context";
            handoff_context: "handoff_context";
            other_context: "other_context";
        }>;
        proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
    expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type LinkedAgreement = z.infer<typeof LinkedAgreementSchema>;
export declare const AgreementObligationBindingSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    agreementObligationBindingId: z.ZodString;
    linkedAgreementId: z.ZodString;
    negotiationSessionId: z.ZodString;
    obligationRef: z.ZodString;
    obligationDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    paramsDigest: z.ZodString;
    actionTypeId: z.ZodString;
    actionClass: z.ZodString;
    resourceRef: z.ZodString;
    counterpartyRef: z.ZodString;
    maxUses: z.ZodDefault<z.ZodLiteral<1>>;
    bindingPosture: z.ZodLiteral<"local_evidence_only">;
    localProtectedActionEvidenceRefs: z.ZodArray<z.ZodObject<{
        refKind: z.ZodEnum<{
            generated_execution_graph: "generated_execution_graph";
            intent_compilation: "intent_compilation";
            action_contract: "action_contract";
            candidate_action: "candidate_action";
        }>;
        ref: z.ZodString;
        digest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type AgreementObligationBinding = z.infer<typeof AgreementObligationBindingSchema>;
export declare const AgreementStatusTransitionSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    agreementStatusTransitionId: z.ZodString;
    linkedAgreementId: z.ZodString;
    negotiationSessionId: z.ZodString;
    fromStatus: z.ZodEnum<{
        active: "active";
        expired: "expired";
        resolved: "resolved";
        proposed: "proposed";
        superseded: "superseded";
        disputed: "disputed";
        withdrawn: "withdrawn";
    }>;
    toStatus: z.ZodEnum<{
        active: "active";
        expired: "expired";
        resolved: "resolved";
        superseded: "superseded";
        disputed: "disputed";
        withdrawn: "withdrawn";
    }>;
    reasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    transitionDigest: z.ZodString;
}, z.core.$strict>;
export type AgreementStatusTransition = z.infer<typeof AgreementStatusTransitionSchema>;
