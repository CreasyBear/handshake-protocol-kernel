import { z } from "zod";
export declare const GatewayAdmissionStatusSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    refused: "refused";
    replayed: "replayed";
    not_requested: "not_requested";
    admitted: "admitted";
}>;
export type GatewayAdmissionStatus = z.infer<typeof GatewayAdmissionStatusSchema>;
export declare const DownstreamOutcomeStatusSchema: z.ZodEnum<{
    unknown: "unknown";
    refused: "refused";
    failed: "failed";
    succeeded: "succeeded";
    pending: "pending";
    not_started: "not_started";
}>;
export type DownstreamOutcomeStatus = z.infer<typeof DownstreamOutcomeStatusSchema>;
export declare const ReceiptStreamReferenceSchema: z.ZodObject<{
    streamId: z.ZodString;
    streamScope: z.ZodEnum<{
        tenant: "tenant";
        organization: "organization";
        run: "run";
        protected_surface_resource: "protected_surface_resource";
    }>;
    partitionKey: z.ZodString;
    offsetStart: z.ZodNumber;
    offsetEnd: z.ZodNumber;
    terminalEventDigest: z.ZodString;
}, z.core.$strict>;
export type ReceiptStreamReference = z.infer<typeof ReceiptStreamReferenceSchema>;
export declare const ReceiptSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    receiptId: z.ZodString;
    actionContractId: z.ZodString;
    policyDecisionId: z.ZodString;
    greenlightId: z.ZodNullable<z.ZodString>;
    gateAttemptId: z.ZodNullable<z.ZodString>;
    mutationAttemptId: z.ZodNullable<z.ZodString>;
    gatewayId: z.ZodString;
    policyDecisionStatus: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    gatewayCheckStatus: z.ZodNullable<z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        passed: "passed";
    }>>;
    gatewayAdmissionStatus: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        replayed: "replayed";
        not_requested: "not_requested";
        admitted: "admitted";
    }>;
    greenlightConsumptionStatus: z.ZodEnum<{
        replayed: "replayed";
        not_applicable: "not_applicable";
        not_consumed: "not_consumed";
        consumed: "consumed";
    }>;
    mutationAttemptStatus: z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        not_attempted: "not_attempted";
        submitted: "submitted";
        succeeded: "succeeded";
        downstream_refused: "downstream_refused";
    }>;
    downstreamExecutionStatus: z.ZodEnum<{
        unknown: "unknown";
        refused: "refused";
        failed: "failed";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>;
    downstreamOutcomeStatus: z.ZodEnum<{
        unknown: "unknown";
        refused: "refused";
        failed: "failed";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>;
    proofGapIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    streamEventIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    streamOffsets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        streamId: z.ZodString;
        streamScope: z.ZodEnum<{
            tenant: "tenant";
            organization: "organization";
            run: "run";
            protected_surface_resource: "protected_surface_resource";
        }>;
        partitionKey: z.ZodString;
        offsetStart: z.ZodNumber;
        offsetEnd: z.ZodNumber;
        terminalEventDigest: z.ZodString;
    }, z.core.$strict>>>;
    receiptDigest: z.ZodNullable<z.ZodString>;
    auditChainDigest: z.ZodNullable<z.ZodString>;
    finalityStatus: z.ZodEnum<{
        unknown: "unknown";
        pending: "pending";
        final: "final";
        suspect: "suspect";
    }>;
    emittedAt: z.ZodString;
}, z.core.$strict>;
export type Receipt = z.infer<typeof ReceiptSchema>;
export declare const ReceiptExportSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    receiptExportId: z.ZodString;
    receiptId: z.ZodString;
    actionContractId: z.ZodString;
    policyDecisionId: z.ZodString;
    greenlightId: z.ZodNullable<z.ZodString>;
    gateAttemptId: z.ZodNullable<z.ZodString>;
    mutationAttemptId: z.ZodNullable<z.ZodString>;
    gatewayId: z.ZodString;
    principalId: z.ZodString;
    agentId: z.ZodString;
    runId: z.ZodString;
    gatewayPolicyVersion: z.ZodString;
    policyDecisionStatus: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    gatewayCheckStatus: z.ZodNullable<z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        passed: "passed";
    }>>;
    gatewayAdmissionStatus: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        replayed: "replayed";
        not_requested: "not_requested";
        admitted: "admitted";
    }>;
    gatewayCheckedAt: z.ZodNullable<z.ZodString>;
    greenlightConsumptionStatus: z.ZodEnum<{
        replayed: "replayed";
        not_applicable: "not_applicable";
        not_consumed: "not_consumed";
        consumed: "consumed";
    }>;
    mutationAttemptStatus: z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        not_attempted: "not_attempted";
        submitted: "submitted";
        succeeded: "succeeded";
        downstream_refused: "downstream_refused";
    }>;
    downstreamExecutionStatus: z.ZodEnum<{
        unknown: "unknown";
        refused: "refused";
        failed: "failed";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>;
    downstreamOutcomeStatus: z.ZodEnum<{
        unknown: "unknown";
        refused: "refused";
        failed: "failed";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>;
    proofGapStatus: z.ZodEnum<{
        none: "none";
        present: "present";
    }>;
    proofGapIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    finalityStatus: z.ZodEnum<{
        unknown: "unknown";
        pending: "pending";
        final: "final";
        suspect: "suspect";
    }>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    streamOffsets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        streamId: z.ZodString;
        streamScope: z.ZodEnum<{
            tenant: "tenant";
            organization: "organization";
            run: "run";
            protected_surface_resource: "protected_surface_resource";
        }>;
        partitionKey: z.ZodString;
        offsetStart: z.ZodNumber;
        offsetEnd: z.ZodNumber;
        terminalEventDigest: z.ZodString;
    }, z.core.$strict>>>;
    receiptDigest: z.ZodString;
    auditChainDigest: z.ZodString;
    signaturePosture: z.ZodEnum<{
        unsigned: "unsigned";
        local_hmac: "local_hmac";
        external_signature: "external_signature";
        unverified: "unverified";
    }>;
    keyIdentityRef: z.ZodNullable<z.ZodString>;
    verificationPolicyRef: z.ZodNullable<z.ZodString>;
    exportFormat: z.ZodEnum<{
        json: "json";
        redacted_json: "redacted_json";
    }>;
    redactionProfileRef: z.ZodString;
    exportPurposeCode: z.ZodString;
    requestedByRef: z.ZodString;
    evidenceRetentionUntil: z.ZodNullable<z.ZodString>;
    exportedAt: z.ZodString;
    exportDigest: z.ZodString;
    delegationProvenance: z.ZodOptional<z.ZodObject<{
        a1ChainFingerprint: z.ZodString;
        chainDepth: z.ZodNumber;
        principalPkFingerprint: z.ZodString;
        terminalDelegatePkFingerprint: z.ZodString;
        verifyOutcome: z.ZodEnum<{
            valid: "valid";
            invalid: "invalid";
        }>;
        reasonCodes: z.ZodArray<z.ZodString>;
        evidenceBindingDigest: z.ZodString;
        a1VerifierVersion: z.ZodString;
        mutationAuthorityCreated: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type ReceiptExport = z.infer<typeof ReceiptExportSchema>;
