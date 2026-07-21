import { z } from "zod";
export declare const A2ATransportThreatPostureSchema: z.ZodEnum<{
    prompt_injection_suspected: "prompt_injection_suspected";
    hidden_terms_suspected: "hidden_terms_suspected";
    spoofed_agent_suspected: "spoofed_agent_suspected";
    rate_abuse_suspected: "rate_abuse_suspected";
}>;
export type A2ATransportThreatPosture = z.infer<typeof A2ATransportThreatPostureSchema>;
export declare const A2ATransportEventSchema: z.ZodObject<{
    transportEventId: z.ZodString;
    transportEventRef: z.ZodString;
    checkpointRef: z.ZodString;
    eventKind: z.ZodEnum<{
        message: "message";
        push: "push";
        status: "status";
        task: "task";
        agent_card: "agent_card";
        artifact: "artifact";
    }>;
    eventTime: z.ZodString;
    eventDigest: z.ZodString;
    replayKeyDigest: z.ZodString;
    protocolVersionPosture: z.ZodEnum<{
        accepted_current: "accepted_current";
        accepted_compatible: "accepted_compatible";
        downgrade_refused: "downgrade_refused";
        unsupported_proof_gap: "unsupported_proof_gap";
    }>;
    authPosture: z.ZodEnum<{
        authenticated_request: "authenticated_request";
        declared_auth_only: "declared_auth_only";
        unauthenticated_proof_gap: "unauthenticated_proof_gap";
        auth_refused: "auth_refused";
    }>;
    rawMaterialPosture: z.ZodEnum<{
        redacted_ref: "redacted_ref";
        raw_transcript: "raw_transcript";
        raw_message_parts: "raw_message_parts";
        raw_artifact_parts: "raw_artifact_parts";
        credential_material: "credential_material";
        payment_material: "payment_material";
        signer_material: "signer_material";
    }>;
    threatPostures: z.ZodDefault<z.ZodArray<z.ZodEnum<{
        prompt_injection_suspected: "prompt_injection_suspected";
        hidden_terms_suspected: "hidden_terms_suspected";
        spoofed_agent_suspected: "spoofed_agent_suspected";
        rate_abuse_suspected: "rate_abuse_suspected";
    }>>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type A2ATransportEvent = z.infer<typeof A2ATransportEventSchema>;
export declare const A2AIngressPressureInputSchema: z.ZodObject<{
    transportWindowRef: z.ZodString;
    checkpointBudget: z.ZodNumber;
    events: z.ZodArray<z.ZodObject<{
        transportEventId: z.ZodString;
        transportEventRef: z.ZodString;
        checkpointRef: z.ZodString;
        eventKind: z.ZodEnum<{
            message: "message";
            push: "push";
            status: "status";
            task: "task";
            agent_card: "agent_card";
            artifact: "artifact";
        }>;
        eventTime: z.ZodString;
        eventDigest: z.ZodString;
        replayKeyDigest: z.ZodString;
        protocolVersionPosture: z.ZodEnum<{
            accepted_current: "accepted_current";
            accepted_compatible: "accepted_compatible";
            downgrade_refused: "downgrade_refused";
            unsupported_proof_gap: "unsupported_proof_gap";
        }>;
        authPosture: z.ZodEnum<{
            authenticated_request: "authenticated_request";
            declared_auth_only: "declared_auth_only";
            unauthenticated_proof_gap: "unauthenticated_proof_gap";
            auth_refused: "auth_refused";
        }>;
        rawMaterialPosture: z.ZodEnum<{
            redacted_ref: "redacted_ref";
            raw_transcript: "raw_transcript";
            raw_message_parts: "raw_message_parts";
            raw_artifact_parts: "raw_artifact_parts";
            credential_material: "credential_material";
            payment_material: "payment_material";
            signer_material: "signer_material";
        }>;
        threatPostures: z.ZodDefault<z.ZodArray<z.ZodEnum<{
            prompt_injection_suspected: "prompt_injection_suspected";
            hidden_terms_suspected: "hidden_terms_suspected";
            spoofed_agent_suspected: "spoofed_agent_suspected";
            rate_abuse_suspected: "rate_abuse_suspected";
        }>>>;
        evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type A2AIngressPressureInput = z.infer<typeof A2AIngressPressureInputSchema>;
export declare const A2AIngressPressurePlanSchema: z.ZodObject<{
    planKind: z.ZodLiteral<"a2a_ingress_pressure_plan">;
    transportWindowRef: z.ZodString;
    observedEventCount: z.ZodNumber;
    uniqueCheckpointCount: z.ZodNumber;
    duplicateReplayKeyCount: z.ZodNumber;
    rawMaterialEventCount: z.ZodNumber;
    threatEventCount: z.ZodNumber;
    checkpointBudget: z.ZodNumber;
    checkpointCandidates: z.ZodArray<z.ZodObject<{
        checkpointRef: z.ZodString;
        sourceEventRefs: z.ZodArray<z.ZodString>;
        proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
    deferredCheckpointRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    refusedEventRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    pressureOutcome: z.ZodEnum<{
        refuse_raw_material: "refuse_raw_material";
        within_budget: "within_budget";
        back_pressure_required: "back_pressure_required";
        proof_gap_required: "proof_gap_required";
    }>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    authorityBoundary: z.ZodObject<{
        recordsPerMessageKernelState: z.ZodLiteral<false>;
        checkpointCandidatesOnly: z.ZodLiteral<true>;
        actionContractCreated: z.ZodLiteral<false>;
        authorityCreated: z.ZodLiteral<false>;
        policyEvaluated: z.ZodLiteral<false>;
        greenlightIssued: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type A2AIngressPressurePlan = z.infer<typeof A2AIngressPressurePlanSchema>;
export declare function planA2AIngressPressure(inputValue: A2AIngressPressureInput): A2AIngressPressurePlan;
