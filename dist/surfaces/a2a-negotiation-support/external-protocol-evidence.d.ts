import { z } from "zod";
export declare const NegotiationExternalProtocolRawMaterialPostureSchema: z.ZodObject<{
    rawMandateJwtIncluded: z.ZodDefault<z.ZodBoolean>;
    rawPaymentCredentialIncluded: z.ZodDefault<z.ZodBoolean>;
    rawPaymentPayloadIncluded: z.ZodDefault<z.ZodBoolean>;
    rawPaymentSignatureIncluded: z.ZodDefault<z.ZodBoolean>;
    rawCredentialMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
    rawSignerMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
    redactionEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type NegotiationExternalProtocolRawMaterialPosture = z.infer<typeof NegotiationExternalProtocolRawMaterialPostureSchema>;
export declare const A2ANegotiationExternalProtocolEvidenceBoundarySchema: z.ZodObject<{
    normalizerCreatedAuthority: z.ZodLiteral<false>;
    externalProtocolVerifiedByHandshake: z.ZodLiteral<false>;
    mandateAuthorizedAction: z.ZodLiteral<false>;
    paymentAuthorized: z.ZodLiteral<false>;
    settlementProven: z.ZodLiteral<false>;
    protocolRecordsCommitted: z.ZodLiteral<false>;
    actionContractCreated: z.ZodLiteral<false>;
    policyEvaluated: z.ZodLiteral<false>;
    greenlightIssued: z.ZodLiteral<false>;
    gatewayCheckPerformed: z.ZodLiteral<false>;
    mutationAttempted: z.ZodLiteral<false>;
    rawMandateJwtIncluded: z.ZodLiteral<false>;
    rawPaymentCredentialIncluded: z.ZodLiteral<false>;
    rawPaymentPayloadIncluded: z.ZodLiteral<false>;
    rawPaymentSignatureIncluded: z.ZodLiteral<false>;
    rawCredentialMaterialIncluded: z.ZodLiteral<false>;
    rawSignerMaterialIncluded: z.ZodLiteral<false>;
}, z.core.$strict>;
export type A2ANegotiationExternalProtocolEvidenceBoundary = z.infer<typeof A2ANegotiationExternalProtocolEvidenceBoundarySchema>;
export declare const AP2NegotiationEvidenceInputSchema: z.ZodObject<{
    protocol: z.ZodLiteral<"ap2">;
    protocolVersion: z.ZodString;
    objectKind: z.ZodEnum<{
        checkout_mandate: "checkout_mandate";
        payment_mandate: "payment_mandate";
        mandate_receipt: "mandate_receipt";
        checkout_receipt: "checkout_receipt";
    }>;
    objectRef: z.ZodString;
    objectDigest: z.ZodString;
    mandateBindingPosture: z.ZodEnum<{
        closed_transaction_bound: "closed_transaction_bound";
        open_constraints_only: "open_constraints_only";
        missing_transaction_binding_proof_gap: "missing_transaction_binding_proof_gap";
    }>;
    signaturePosture: z.ZodEnum<{
        verified_ref: "verified_ref";
        unverified_proof_gap: "unverified_proof_gap";
        missing_proof_gap: "missing_proof_gap";
    }>;
    constraintPosture: z.ZodEnum<{
        evaluated_ref: "evaluated_ref";
        unknown_constraint_proof_gap: "unknown_constraint_proof_gap";
        missing_constraints_proof_gap: "missing_constraints_proof_gap";
    }>;
    receiptPosture: z.ZodEnum<{
        not_applicable: "not_applicable";
        verifier_signed_success_ref: "verifier_signed_success_ref";
        verifier_signed_error_ref: "verifier_signed_error_ref";
        missing_receipt_proof_gap: "missing_receipt_proof_gap";
    }>;
    counterpartyBindingPosture: z.ZodEnum<{
        bound_to_negotiation_counterparty: "bound_to_negotiation_counterparty";
        counterparty_mismatch_proof_gap: "counterparty_mismatch_proof_gap";
        unverified_counterparty_proof_gap: "unverified_counterparty_proof_gap";
    }>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    rawMaterial: z.ZodObject<{
        rawMandateJwtIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentCredentialIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentPayloadIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentSignatureIncluded: z.ZodDefault<z.ZodBoolean>;
        rawCredentialMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
        rawSignerMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
        redactionEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AP2NegotiationEvidenceInput = z.infer<typeof AP2NegotiationEvidenceInputSchema>;
export declare const X402NegotiationEvidenceInputSchema: z.ZodObject<{
    protocol: z.ZodLiteral<"x402">;
    protocolVersion: z.ZodString;
    objectKind: z.ZodEnum<{
        payment_response: "payment_response";
        payment_required: "payment_required";
        selected_payment_requirement: "selected_payment_requirement";
        payment_identifier: "payment_identifier";
        signed_retry_observation: "signed_retry_observation";
    }>;
    objectRef: z.ZodString;
    objectDigest: z.ZodString;
    scheme: z.ZodEnum<{
        unknown: "unknown";
        exact: "exact";
        upto: "upto";
        batch_settlement: "batch_settlement";
    }>;
    selectedRequirementPosture: z.ZodEnum<{
        selected_exact_requirement_bound: "selected_exact_requirement_bound";
        missing_selected_requirement_proof_gap: "missing_selected_requirement_proof_gap";
        selected_requirement_digest_mismatch: "selected_requirement_digest_mismatch";
        unsupported_scheme_refused: "unsupported_scheme_refused";
    }>;
    requestBindingPosture: z.ZodEnum<{
        bound_to_intended_request: "bound_to_intended_request";
        request_binding_mismatch_proof_gap: "request_binding_mismatch_proof_gap";
        request_binding_missing_proof_gap: "request_binding_missing_proof_gap";
    }>;
    responsePosture: z.ZodEnum<{
        not_applicable: "not_applicable";
        payment_required_ref_only: "payment_required_ref_only";
        payment_response_ref_only: "payment_response_ref_only";
        downstream_response_missing_proof_gap: "downstream_response_missing_proof_gap";
        downstream_error_ref: "downstream_error_ref";
    }>;
    counterpartyBindingPosture: z.ZodEnum<{
        bound_to_negotiation_counterparty: "bound_to_negotiation_counterparty";
        counterparty_mismatch_proof_gap: "counterparty_mismatch_proof_gap";
        unverified_counterparty_proof_gap: "unverified_counterparty_proof_gap";
    }>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    rawMaterial: z.ZodObject<{
        rawMandateJwtIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentCredentialIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentPayloadIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentSignatureIncluded: z.ZodDefault<z.ZodBoolean>;
        rawCredentialMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
        rawSignerMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
        redactionEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type X402NegotiationEvidenceInput = z.infer<typeof X402NegotiationEvidenceInputSchema>;
export declare const NegotiationExternalProtocolEvidenceInputSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    protocol: z.ZodLiteral<"ap2">;
    protocolVersion: z.ZodString;
    objectKind: z.ZodEnum<{
        checkout_mandate: "checkout_mandate";
        payment_mandate: "payment_mandate";
        mandate_receipt: "mandate_receipt";
        checkout_receipt: "checkout_receipt";
    }>;
    objectRef: z.ZodString;
    objectDigest: z.ZodString;
    mandateBindingPosture: z.ZodEnum<{
        closed_transaction_bound: "closed_transaction_bound";
        open_constraints_only: "open_constraints_only";
        missing_transaction_binding_proof_gap: "missing_transaction_binding_proof_gap";
    }>;
    signaturePosture: z.ZodEnum<{
        verified_ref: "verified_ref";
        unverified_proof_gap: "unverified_proof_gap";
        missing_proof_gap: "missing_proof_gap";
    }>;
    constraintPosture: z.ZodEnum<{
        evaluated_ref: "evaluated_ref";
        unknown_constraint_proof_gap: "unknown_constraint_proof_gap";
        missing_constraints_proof_gap: "missing_constraints_proof_gap";
    }>;
    receiptPosture: z.ZodEnum<{
        not_applicable: "not_applicable";
        verifier_signed_success_ref: "verifier_signed_success_ref";
        verifier_signed_error_ref: "verifier_signed_error_ref";
        missing_receipt_proof_gap: "missing_receipt_proof_gap";
    }>;
    counterpartyBindingPosture: z.ZodEnum<{
        bound_to_negotiation_counterparty: "bound_to_negotiation_counterparty";
        counterparty_mismatch_proof_gap: "counterparty_mismatch_proof_gap";
        unverified_counterparty_proof_gap: "unverified_counterparty_proof_gap";
    }>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    rawMaterial: z.ZodObject<{
        rawMandateJwtIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentCredentialIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentPayloadIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentSignatureIncluded: z.ZodDefault<z.ZodBoolean>;
        rawCredentialMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
        rawSignerMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
        redactionEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    protocol: z.ZodLiteral<"x402">;
    protocolVersion: z.ZodString;
    objectKind: z.ZodEnum<{
        payment_response: "payment_response";
        payment_required: "payment_required";
        selected_payment_requirement: "selected_payment_requirement";
        payment_identifier: "payment_identifier";
        signed_retry_observation: "signed_retry_observation";
    }>;
    objectRef: z.ZodString;
    objectDigest: z.ZodString;
    scheme: z.ZodEnum<{
        unknown: "unknown";
        exact: "exact";
        upto: "upto";
        batch_settlement: "batch_settlement";
    }>;
    selectedRequirementPosture: z.ZodEnum<{
        selected_exact_requirement_bound: "selected_exact_requirement_bound";
        missing_selected_requirement_proof_gap: "missing_selected_requirement_proof_gap";
        selected_requirement_digest_mismatch: "selected_requirement_digest_mismatch";
        unsupported_scheme_refused: "unsupported_scheme_refused";
    }>;
    requestBindingPosture: z.ZodEnum<{
        bound_to_intended_request: "bound_to_intended_request";
        request_binding_mismatch_proof_gap: "request_binding_mismatch_proof_gap";
        request_binding_missing_proof_gap: "request_binding_missing_proof_gap";
    }>;
    responsePosture: z.ZodEnum<{
        not_applicable: "not_applicable";
        payment_required_ref_only: "payment_required_ref_only";
        payment_response_ref_only: "payment_response_ref_only";
        downstream_response_missing_proof_gap: "downstream_response_missing_proof_gap";
        downstream_error_ref: "downstream_error_ref";
    }>;
    counterpartyBindingPosture: z.ZodEnum<{
        bound_to_negotiation_counterparty: "bound_to_negotiation_counterparty";
        counterparty_mismatch_proof_gap: "counterparty_mismatch_proof_gap";
        unverified_counterparty_proof_gap: "unverified_counterparty_proof_gap";
    }>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    rawMaterial: z.ZodObject<{
        rawMandateJwtIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentCredentialIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentPayloadIncluded: z.ZodDefault<z.ZodBoolean>;
        rawPaymentSignatureIncluded: z.ZodDefault<z.ZodBoolean>;
        rawCredentialMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
        rawSignerMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
        redactionEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
}, z.core.$strict>], "protocol">;
export type NegotiationExternalProtocolEvidenceInput = z.infer<typeof NegotiationExternalProtocolEvidenceInputSchema>;
export declare const A2ANegotiationExternalProtocolEvidenceNormalizationInputSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    normalizerKind: z.ZodLiteral<"a2a_negotiation_external_protocol_evidence_normalization_input">;
    normalizerId: z.ZodString;
    evidence: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        protocol: z.ZodLiteral<"ap2">;
        protocolVersion: z.ZodString;
        objectKind: z.ZodEnum<{
            checkout_mandate: "checkout_mandate";
            payment_mandate: "payment_mandate";
            mandate_receipt: "mandate_receipt";
            checkout_receipt: "checkout_receipt";
        }>;
        objectRef: z.ZodString;
        objectDigest: z.ZodString;
        mandateBindingPosture: z.ZodEnum<{
            closed_transaction_bound: "closed_transaction_bound";
            open_constraints_only: "open_constraints_only";
            missing_transaction_binding_proof_gap: "missing_transaction_binding_proof_gap";
        }>;
        signaturePosture: z.ZodEnum<{
            verified_ref: "verified_ref";
            unverified_proof_gap: "unverified_proof_gap";
            missing_proof_gap: "missing_proof_gap";
        }>;
        constraintPosture: z.ZodEnum<{
            evaluated_ref: "evaluated_ref";
            unknown_constraint_proof_gap: "unknown_constraint_proof_gap";
            missing_constraints_proof_gap: "missing_constraints_proof_gap";
        }>;
        receiptPosture: z.ZodEnum<{
            not_applicable: "not_applicable";
            verifier_signed_success_ref: "verifier_signed_success_ref";
            verifier_signed_error_ref: "verifier_signed_error_ref";
            missing_receipt_proof_gap: "missing_receipt_proof_gap";
        }>;
        counterpartyBindingPosture: z.ZodEnum<{
            bound_to_negotiation_counterparty: "bound_to_negotiation_counterparty";
            counterparty_mismatch_proof_gap: "counterparty_mismatch_proof_gap";
            unverified_counterparty_proof_gap: "unverified_counterparty_proof_gap";
        }>;
        evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        rawMaterial: z.ZodObject<{
            rawMandateJwtIncluded: z.ZodDefault<z.ZodBoolean>;
            rawPaymentCredentialIncluded: z.ZodDefault<z.ZodBoolean>;
            rawPaymentPayloadIncluded: z.ZodDefault<z.ZodBoolean>;
            rawPaymentSignatureIncluded: z.ZodDefault<z.ZodBoolean>;
            rawCredentialMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
            rawSignerMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
            redactionEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        protocol: z.ZodLiteral<"x402">;
        protocolVersion: z.ZodString;
        objectKind: z.ZodEnum<{
            payment_response: "payment_response";
            payment_required: "payment_required";
            selected_payment_requirement: "selected_payment_requirement";
            payment_identifier: "payment_identifier";
            signed_retry_observation: "signed_retry_observation";
        }>;
        objectRef: z.ZodString;
        objectDigest: z.ZodString;
        scheme: z.ZodEnum<{
            unknown: "unknown";
            exact: "exact";
            upto: "upto";
            batch_settlement: "batch_settlement";
        }>;
        selectedRequirementPosture: z.ZodEnum<{
            selected_exact_requirement_bound: "selected_exact_requirement_bound";
            missing_selected_requirement_proof_gap: "missing_selected_requirement_proof_gap";
            selected_requirement_digest_mismatch: "selected_requirement_digest_mismatch";
            unsupported_scheme_refused: "unsupported_scheme_refused";
        }>;
        requestBindingPosture: z.ZodEnum<{
            bound_to_intended_request: "bound_to_intended_request";
            request_binding_mismatch_proof_gap: "request_binding_mismatch_proof_gap";
            request_binding_missing_proof_gap: "request_binding_missing_proof_gap";
        }>;
        responsePosture: z.ZodEnum<{
            not_applicable: "not_applicable";
            payment_required_ref_only: "payment_required_ref_only";
            payment_response_ref_only: "payment_response_ref_only";
            downstream_response_missing_proof_gap: "downstream_response_missing_proof_gap";
            downstream_error_ref: "downstream_error_ref";
        }>;
        counterpartyBindingPosture: z.ZodEnum<{
            bound_to_negotiation_counterparty: "bound_to_negotiation_counterparty";
            counterparty_mismatch_proof_gap: "counterparty_mismatch_proof_gap";
            unverified_counterparty_proof_gap: "unverified_counterparty_proof_gap";
        }>;
        evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        rawMaterial: z.ZodObject<{
            rawMandateJwtIncluded: z.ZodDefault<z.ZodBoolean>;
            rawPaymentCredentialIncluded: z.ZodDefault<z.ZodBoolean>;
            rawPaymentPayloadIncluded: z.ZodDefault<z.ZodBoolean>;
            rawPaymentSignatureIncluded: z.ZodDefault<z.ZodBoolean>;
            rawCredentialMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
            rawSignerMaterialIncluded: z.ZodDefault<z.ZodBoolean>;
            redactionEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strict>;
    }, z.core.$strict>], "protocol">>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    authorityBoundary: z.ZodObject<{
        normalizerCreatedAuthority: z.ZodLiteral<false>;
        externalProtocolVerifiedByHandshake: z.ZodLiteral<false>;
        mandateAuthorizedAction: z.ZodLiteral<false>;
        paymentAuthorized: z.ZodLiteral<false>;
        settlementProven: z.ZodLiteral<false>;
        protocolRecordsCommitted: z.ZodLiteral<false>;
        actionContractCreated: z.ZodLiteral<false>;
        policyEvaluated: z.ZodLiteral<false>;
        greenlightIssued: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        rawMandateJwtIncluded: z.ZodLiteral<false>;
        rawPaymentCredentialIncluded: z.ZodLiteral<false>;
        rawPaymentPayloadIncluded: z.ZodLiteral<false>;
        rawPaymentSignatureIncluded: z.ZodLiteral<false>;
        rawCredentialMaterialIncluded: z.ZodLiteral<false>;
        rawSignerMaterialIncluded: z.ZodLiteral<false>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type A2ANegotiationExternalProtocolEvidenceNormalizationInput = z.infer<typeof A2ANegotiationExternalProtocolEvidenceNormalizationInputSchema>;
export declare const A2ANegotiationExternalProtocolEvidenceNormalizationResultSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    resultKind: z.ZodLiteral<"a2a_negotiation_external_protocol_evidence_normalization_result">;
    normalizerId: z.ZodString;
    normalizationOutcome: z.ZodEnum<{
        proof_gap: "proof_gap";
        evidence_ready: "evidence_ready";
        refuse_raw_material: "refuse_raw_material";
    }>;
    externalProtocolEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        protocol: z.ZodEnum<{
            mcp: "mcp";
            a2a: "a2a";
            acp: "acp";
            anp: "anp";
            ap2: "ap2";
            ucp: "ucp";
            payment_protocol: "payment_protocol";
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
    stopReasonCode: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    refusedEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    authorityBoundary: z.ZodObject<{
        normalizerCreatedAuthority: z.ZodLiteral<false>;
        externalProtocolVerifiedByHandshake: z.ZodLiteral<false>;
        mandateAuthorizedAction: z.ZodLiteral<false>;
        paymentAuthorized: z.ZodLiteral<false>;
        settlementProven: z.ZodLiteral<false>;
        protocolRecordsCommitted: z.ZodLiteral<false>;
        actionContractCreated: z.ZodLiteral<false>;
        policyEvaluated: z.ZodLiteral<false>;
        greenlightIssued: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        rawMandateJwtIncluded: z.ZodLiteral<false>;
        rawPaymentCredentialIncluded: z.ZodLiteral<false>;
        rawPaymentPayloadIncluded: z.ZodLiteral<false>;
        rawPaymentSignatureIncluded: z.ZodLiteral<false>;
        rawCredentialMaterialIncluded: z.ZodLiteral<false>;
        rawSignerMaterialIncluded: z.ZodLiteral<false>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type A2ANegotiationExternalProtocolEvidenceNormalizationResult = z.infer<typeof A2ANegotiationExternalProtocolEvidenceNormalizationResultSchema>;
export declare function normalizeA2ANegotiationExternalProtocolEvidence(inputValue: A2ANegotiationExternalProtocolEvidenceNormalizationInput): A2ANegotiationExternalProtocolEvidenceNormalizationResult;
