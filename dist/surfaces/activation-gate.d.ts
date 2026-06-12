import { z } from "zod";
export declare const ActivationGateVerdictSchema: z.ZodEnum<{
    PASS: "PASS";
    PASS_WITH_PROOF_GAPS: "PASS_WITH_PROOF_GAPS";
    BLOCKED: "BLOCKED";
    CUT: "CUT";
}>;
export type ActivationGateVerdict = z.infer<typeof ActivationGateVerdictSchema>;
export declare const ActivationGatePrioritySchema: z.ZodEnum<{
    P0: "P0";
    P1: "P1";
    P2: "P2";
}>;
export type ActivationGatePriority = z.infer<typeof ActivationGatePrioritySchema>;
export declare const ActivationGateStatusSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    blocked: "blocked";
    passed: "passed";
    failed: "failed";
    not_run: "not_run";
    cut: "cut";
}>;
export type ActivationGateStatus = z.infer<typeof ActivationGateStatusSchema>;
export declare const ActivationGateProofGapPolicySchema: z.ZodEnum<{
    block_until_resolved: "block_until_resolved";
    allow_narrowed_pass: "allow_narrowed_pass";
}>;
export type ActivationGateProofGapPolicy = z.infer<typeof ActivationGateProofGapPolicySchema>;
export declare const ActivationGateAuthorityBoundarySchema: z.ZodObject<{
    createsAuthority: z.ZodLiteral<false>;
    createsPolicyDecision: z.ZodLiteral<false>;
    createsGreenlight: z.ZodLiteral<false>;
    performsGatewayCheck: z.ZodLiteral<false>;
    performsMutation: z.ZodLiteral<false>;
    resolvesCredential: z.ZodLiteral<false>;
    invokesSigner: z.ZodLiteral<false>;
    createsPaymentPayload: z.ZodLiteral<false>;
    exportsReceipt: z.ZodLiteral<false>;
    mintsAuthorityCertificate: z.ZodLiteral<false>;
    hostsOperation: z.ZodLiteral<false>;
    establishesProviderCustody: z.ZodLiteral<false>;
    managesSettlement: z.ZodLiteral<false>;
    enforcesAggregateSpend: z.ZodLiteral<false>;
    certifiesMarketplace: z.ZodLiteral<false>;
    establishesCrossOrgTrust: z.ZodLiteral<false>;
    enforcesHostWideContainment: z.ZodLiteral<false>;
}, z.core.$strict>;
export type ActivationGateAuthorityBoundary = z.infer<typeof ActivationGateAuthorityBoundarySchema>;
export declare const activationGateAuthorityBoundary: {
    createsAuthority: false;
    createsPolicyDecision: false;
    createsGreenlight: false;
    performsGatewayCheck: false;
    performsMutation: false;
    resolvesCredential: false;
    invokesSigner: false;
    createsPaymentPayload: false;
    exportsReceipt: false;
    mintsAuthorityCertificate: false;
    hostsOperation: false;
    establishesProviderCustody: false;
    managesSettlement: false;
    enforcesAggregateSpend: false;
    certifiesMarketplace: false;
    establishesCrossOrgTrust: false;
    enforcesHostWideContainment: false;
};
export declare const ActivationGateProofGapSchema: z.ZodObject<{
    reasonCode: z.ZodString;
    affectedRef: z.ZodString;
    owner: z.ZodString;
    nonClaim: z.ZodString;
    nextStageImplication: z.ZodString;
    blocksNextStage: z.ZodBoolean;
    evidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type ActivationGateProofGap = z.infer<typeof ActivationGateProofGapSchema>;
export declare const ActivationGateExternalCheckSchema: z.ZodObject<{
    checkId: z.ZodString;
    status: z.ZodEnum<{
        proof_gap: "proof_gap";
        verified: "verified";
        blocked: "blocked";
        cut: "cut";
    }>;
    owner: z.ZodString;
    evidenceRefs: z.ZodArray<z.ZodString>;
    nonClaim: z.ZodString;
}, z.core.$strict>;
export type ActivationGateExternalCheck = z.infer<typeof ActivationGateExternalCheckSchema>;
export declare const ActivationGateSuccessCriterionSchema: z.ZodObject<{
    criterionId: z.ZodString;
    title: z.ZodString;
    requirement: z.ZodString;
    requiredForTenStar: z.ZodBoolean;
    satisfied: z.ZodBoolean;
    evidenceRefs: z.ZodArray<z.ZodString>;
    commandRefs: z.ZodArray<z.ZodString>;
    antiPatternRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type ActivationGateSuccessCriterion = z.infer<typeof ActivationGateSuccessCriterionSchema>;
export declare const ActivationGateAntiPatternSchema: z.ZodObject<{
    antiPatternId: z.ZodString;
    pattern: z.ZodString;
    failureMode: z.ZodString;
    present: z.ZodBoolean;
    blockedByRefs: z.ZodArray<z.ZodString>;
    evidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type ActivationGateAntiPattern = z.infer<typeof ActivationGateAntiPatternSchema>;
export declare const ActivationGateResultSchema: z.ZodObject<{
    gateId: z.ZodString;
    title: z.ZodString;
    priority: z.ZodEnum<{
        P0: "P0";
        P1: "P1";
        P2: "P2";
    }>;
    status: z.ZodEnum<{
        proof_gap: "proof_gap";
        blocked: "blocked";
        passed: "passed";
        failed: "failed";
        not_run: "not_run";
        cut: "cut";
    }>;
    requiredForNextStage: z.ZodBoolean;
    positiveProofEvidenceRefs: z.ZodArray<z.ZodString>;
    forbiddenAuthorityEvidenceRefs: z.ZodArray<z.ZodString>;
    commandRefs: z.ZodArray<z.ZodString>;
    artifactRefs: z.ZodArray<z.ZodString>;
    proofGaps: z.ZodArray<z.ZodObject<{
        reasonCode: z.ZodString;
        affectedRef: z.ZodString;
        owner: z.ZodString;
        nonClaim: z.ZodString;
        nextStageImplication: z.ZodString;
        blocksNextStage: z.ZodBoolean;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    cutLines: z.ZodArray<z.ZodString>;
    verdictEffect: z.ZodEnum<{
        unblocks: "unblocks";
        blocks: "blocks";
        carries_proof_gap: "carries_proof_gap";
        cuts_scope: "cuts_scope";
    }>;
}, z.core.$strict>;
export type ActivationGateResult = z.infer<typeof ActivationGateResultSchema>;
export declare const ActivationGateReportInputSchema: z.ZodObject<{
    reportId: z.ZodString;
    generatedAt: z.ZodString;
    scope: z.ZodString;
    proofGapPolicy: z.ZodEnum<{
        block_until_resolved: "block_until_resolved";
        allow_narrowed_pass: "allow_narrowed_pass";
    }>;
    gates: z.ZodArray<z.ZodObject<{
        gateId: z.ZodString;
        title: z.ZodString;
        priority: z.ZodEnum<{
            P0: "P0";
            P1: "P1";
            P2: "P2";
        }>;
        status: z.ZodEnum<{
            proof_gap: "proof_gap";
            blocked: "blocked";
            passed: "passed";
            failed: "failed";
            not_run: "not_run";
            cut: "cut";
        }>;
        requiredForNextStage: z.ZodBoolean;
        positiveProofEvidenceRefs: z.ZodArray<z.ZodString>;
        forbiddenAuthorityEvidenceRefs: z.ZodArray<z.ZodString>;
        commandRefs: z.ZodArray<z.ZodString>;
        artifactRefs: z.ZodArray<z.ZodString>;
        proofGaps: z.ZodArray<z.ZodObject<{
            reasonCode: z.ZodString;
            affectedRef: z.ZodString;
            owner: z.ZodString;
            nonClaim: z.ZodString;
            nextStageImplication: z.ZodString;
            blocksNextStage: z.ZodBoolean;
            evidenceRefs: z.ZodArray<z.ZodString>;
        }, z.core.$strict>>;
        cutLines: z.ZodArray<z.ZodString>;
        verdictEffect: z.ZodEnum<{
            unblocks: "unblocks";
            blocks: "blocks";
            carries_proof_gap: "carries_proof_gap";
            cuts_scope: "cuts_scope";
        }>;
    }, z.core.$strict>>;
    externalChecks: z.ZodArray<z.ZodObject<{
        checkId: z.ZodString;
        status: z.ZodEnum<{
            proof_gap: "proof_gap";
            verified: "verified";
            blocked: "blocked";
            cut: "cut";
        }>;
        owner: z.ZodString;
        evidenceRefs: z.ZodArray<z.ZodString>;
        nonClaim: z.ZodString;
    }, z.core.$strict>>;
    successCriteria: z.ZodArray<z.ZodObject<{
        criterionId: z.ZodString;
        title: z.ZodString;
        requirement: z.ZodString;
        requiredForTenStar: z.ZodBoolean;
        satisfied: z.ZodBoolean;
        evidenceRefs: z.ZodArray<z.ZodString>;
        commandRefs: z.ZodArray<z.ZodString>;
        antiPatternRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    antiPatterns: z.ZodArray<z.ZodObject<{
        antiPatternId: z.ZodString;
        pattern: z.ZodString;
        failureMode: z.ZodString;
        present: z.ZodBoolean;
        blockedByRefs: z.ZodArray<z.ZodString>;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    allowedNextStageClaims: z.ZodArray<z.ZodString>;
    forbiddenNextStageClaims: z.ZodArray<z.ZodString>;
    userOwnedDecisions: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type ActivationGateReportInput = z.infer<typeof ActivationGateReportInputSchema>;
export declare const ActivationGateReportSchema: z.ZodObject<{
    reportId: z.ZodString;
    generatedAt: z.ZodString;
    scope: z.ZodString;
    proofGapPolicy: z.ZodEnum<{
        block_until_resolved: "block_until_resolved";
        allow_narrowed_pass: "allow_narrowed_pass";
    }>;
    gates: z.ZodArray<z.ZodObject<{
        gateId: z.ZodString;
        title: z.ZodString;
        priority: z.ZodEnum<{
            P0: "P0";
            P1: "P1";
            P2: "P2";
        }>;
        status: z.ZodEnum<{
            proof_gap: "proof_gap";
            blocked: "blocked";
            passed: "passed";
            failed: "failed";
            not_run: "not_run";
            cut: "cut";
        }>;
        requiredForNextStage: z.ZodBoolean;
        positiveProofEvidenceRefs: z.ZodArray<z.ZodString>;
        forbiddenAuthorityEvidenceRefs: z.ZodArray<z.ZodString>;
        commandRefs: z.ZodArray<z.ZodString>;
        artifactRefs: z.ZodArray<z.ZodString>;
        proofGaps: z.ZodArray<z.ZodObject<{
            reasonCode: z.ZodString;
            affectedRef: z.ZodString;
            owner: z.ZodString;
            nonClaim: z.ZodString;
            nextStageImplication: z.ZodString;
            blocksNextStage: z.ZodBoolean;
            evidenceRefs: z.ZodArray<z.ZodString>;
        }, z.core.$strict>>;
        cutLines: z.ZodArray<z.ZodString>;
        verdictEffect: z.ZodEnum<{
            unblocks: "unblocks";
            blocks: "blocks";
            carries_proof_gap: "carries_proof_gap";
            cuts_scope: "cuts_scope";
        }>;
    }, z.core.$strict>>;
    externalChecks: z.ZodArray<z.ZodObject<{
        checkId: z.ZodString;
        status: z.ZodEnum<{
            proof_gap: "proof_gap";
            verified: "verified";
            blocked: "blocked";
            cut: "cut";
        }>;
        owner: z.ZodString;
        evidenceRefs: z.ZodArray<z.ZodString>;
        nonClaim: z.ZodString;
    }, z.core.$strict>>;
    successCriteria: z.ZodArray<z.ZodObject<{
        criterionId: z.ZodString;
        title: z.ZodString;
        requirement: z.ZodString;
        requiredForTenStar: z.ZodBoolean;
        satisfied: z.ZodBoolean;
        evidenceRefs: z.ZodArray<z.ZodString>;
        commandRefs: z.ZodArray<z.ZodString>;
        antiPatternRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    antiPatterns: z.ZodArray<z.ZodObject<{
        antiPatternId: z.ZodString;
        pattern: z.ZodString;
        failureMode: z.ZodString;
        present: z.ZodBoolean;
        blockedByRefs: z.ZodArray<z.ZodString>;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    allowedNextStageClaims: z.ZodArray<z.ZodString>;
    forbiddenNextStageClaims: z.ZodArray<z.ZodString>;
    userOwnedDecisions: z.ZodArray<z.ZodString>;
    reportKind: z.ZodLiteral<"activation_gate_report">;
    verdict: z.ZodEnum<{
        PASS: "PASS";
        PASS_WITH_PROOF_GAPS: "PASS_WITH_PROOF_GAPS";
        BLOCKED: "BLOCKED";
        CUT: "CUT";
    }>;
    nextStageUnblocked: z.ZodBoolean;
    blockingGateIds: z.ZodArray<z.ZodString>;
    cutGateIds: z.ZodArray<z.ZodString>;
    carriedProofGaps: z.ZodArray<z.ZodObject<{
        reasonCode: z.ZodString;
        affectedRef: z.ZodString;
        owner: z.ZodString;
        nonClaim: z.ZodString;
        nextStageImplication: z.ZodString;
        blocksNextStage: z.ZodBoolean;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    unsatisfiedCriterionIds: z.ZodArray<z.ZodString>;
    triggeredAntiPatternIds: z.ZodArray<z.ZodString>;
    authorityBoundary: z.ZodObject<{
        createsAuthority: z.ZodLiteral<false>;
        createsPolicyDecision: z.ZodLiteral<false>;
        createsGreenlight: z.ZodLiteral<false>;
        performsGatewayCheck: z.ZodLiteral<false>;
        performsMutation: z.ZodLiteral<false>;
        resolvesCredential: z.ZodLiteral<false>;
        invokesSigner: z.ZodLiteral<false>;
        createsPaymentPayload: z.ZodLiteral<false>;
        exportsReceipt: z.ZodLiteral<false>;
        mintsAuthorityCertificate: z.ZodLiteral<false>;
        hostsOperation: z.ZodLiteral<false>;
        establishesProviderCustody: z.ZodLiteral<false>;
        managesSettlement: z.ZodLiteral<false>;
        enforcesAggregateSpend: z.ZodLiteral<false>;
        certifiesMarketplace: z.ZodLiteral<false>;
        establishesCrossOrgTrust: z.ZodLiteral<false>;
        enforcesHostWideContainment: z.ZodLiteral<false>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type ActivationGateReport = z.infer<typeof ActivationGateReportSchema>;
export declare function projectActivationGateReport(inputValue: ActivationGateReportInput): ActivationGateReport;
