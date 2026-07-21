import { z } from "zod";
declare const POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DESCRIPTOR_VERSION: "authority-projection-outbox-protocol-record-descriptor-1";
declare const POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DELIVERY_POLICY_VERSION: "authority-projection-outbox-protocol-record-delivery-policy-1";
declare const POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_ROUTE_VERSION: "authority-projection-outbox-protocol-record-route-1";
export declare const PolicyAdmissionConflictObservationSchema: z.ZodObject<{
    conflictClass: z.ZodEnum<{
        aggregate_cas_conflict: "aggregate_cas_conflict";
        aggregate_record_binding_conflict: "aggregate_record_binding_conflict";
        prerequisite_guard_conflict: "prerequisite_guard_conflict";
    }>;
    pointer: z.ZodObject<{
        pointerKind: z.ZodEnum<{
            isolation_state: "isolation_state";
            effect_lineage: "effect_lineage";
            effect_observation: "effect_observation";
            idempotency_claim: "idempotency_claim";
            operation_claim: "operation_claim";
            authority_context: "authority_context";
            configuration_state: "configuration_state";
            aggregate_authority: "aggregate_authority";
            access_lease: "access_lease";
            access_usage: "access_usage";
            projection_delivery: "projection_delivery";
        }>;
        localId: z.ZodString;
    }, z.core.$strict>;
    expected: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absent">;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"exact">;
        witness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            semanticState: z.ZodString;
            version: z.ZodNumber;
            digest: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strict>], "kind">;
    current: z.ZodNullable<z.ZodObject<{
        record: z.ZodObject<{
            recordKind: z.ZodEnum<{
                authority_state: "authority_state";
                authority_evidence: "authority_evidence";
                authority_binding: "authority_binding";
                projection_state: "projection_state";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        semanticState: z.ZodString;
        version: z.ZodNumber;
        digest: z.ZodString;
    }, z.core.$strict>>;
    attempted: z.ZodObject<{
        sourceCommit: z.ZodObject<{
            mutationKind: z.ZodLiteral<"policy_admission">;
            localId: z.ZodString;
        }, z.core.$strict>;
        requestDigest: z.ZodString;
        transactionDigest: z.ZodString;
        attemptDigest: z.ZodString;
        aggregateSnapshotDigest: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type PolicyAdmissionConflictObservation = z.infer<typeof PolicyAdmissionConflictObservationSchema>;
export declare const PolicyAdmissionConflictWitnessSchema: z.ZodObject<{
    conflictClass: z.ZodEnum<{
        aggregate_cas_conflict: "aggregate_cas_conflict";
        aggregate_record_binding_conflict: "aggregate_record_binding_conflict";
        prerequisite_guard_conflict: "prerequisite_guard_conflict";
    }>;
    pointer: z.ZodObject<{
        pointerKind: z.ZodEnum<{
            isolation_state: "isolation_state";
            effect_lineage: "effect_lineage";
            effect_observation: "effect_observation";
            idempotency_claim: "idempotency_claim";
            operation_claim: "operation_claim";
            authority_context: "authority_context";
            configuration_state: "configuration_state";
            aggregate_authority: "aggregate_authority";
            access_lease: "access_lease";
            access_usage: "access_usage";
            projection_delivery: "projection_delivery";
        }>;
        localId: z.ZodString;
    }, z.core.$strict>;
    expected: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absent">;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"exact">;
        witness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            semanticState: z.ZodString;
            version: z.ZodNumber;
            digest: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strict>], "kind">;
    current: z.ZodNullable<z.ZodObject<{
        record: z.ZodObject<{
            recordKind: z.ZodEnum<{
                authority_state: "authority_state";
                authority_evidence: "authority_evidence";
                authority_binding: "authority_binding";
                projection_state: "projection_state";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        semanticState: z.ZodString;
        version: z.ZodNumber;
        digest: z.ZodString;
    }, z.core.$strict>>;
    attempted: z.ZodObject<{
        sourceCommit: z.ZodObject<{
            mutationKind: z.ZodLiteral<"policy_admission">;
            localId: z.ZodString;
        }, z.core.$strict>;
        requestDigest: z.ZodString;
        transactionDigest: z.ZodString;
        attemptDigest: z.ZodString;
        aggregateSnapshotDigest: z.ZodString;
    }, z.core.$strict>;
    ordinal: z.ZodNumber;
}, z.core.$strict>;
export type PolicyAdmissionConflictWitness = z.infer<typeof PolicyAdmissionConflictWitnessSchema>;
export declare const PolicyAdmissionTerminalEvidenceSchema: z.ZodObject<{
    terminalNonauthorityVersion: z.ZodLiteral<"policy-admission-terminal-nonauthority-1">;
    terminalReason: z.ZodEnum<{
        prerequisite_drift: "prerequisite_drift";
        contention_exhausted: "contention_exhausted";
    }>;
    conflicts: z.ZodArray<z.ZodObject<{
        conflictClass: z.ZodEnum<{
            aggregate_cas_conflict: "aggregate_cas_conflict";
            aggregate_record_binding_conflict: "aggregate_record_binding_conflict";
            prerequisite_guard_conflict: "prerequisite_guard_conflict";
        }>;
        pointer: z.ZodObject<{
            pointerKind: z.ZodEnum<{
                isolation_state: "isolation_state";
                effect_lineage: "effect_lineage";
                effect_observation: "effect_observation";
                idempotency_claim: "idempotency_claim";
                operation_claim: "operation_claim";
                authority_context: "authority_context";
                configuration_state: "configuration_state";
                aggregate_authority: "aggregate_authority";
                access_lease: "access_lease";
                access_usage: "access_usage";
                projection_delivery: "projection_delivery";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        expected: z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absent">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"exact">;
            witness: z.ZodObject<{
                record: z.ZodObject<{
                    recordKind: z.ZodEnum<{
                        authority_state: "authority_state";
                        authority_evidence: "authority_evidence";
                        authority_binding: "authority_binding";
                        projection_state: "projection_state";
                    }>;
                    localId: z.ZodString;
                }, z.core.$strict>;
                semanticState: z.ZodString;
                version: z.ZodNumber;
                digest: z.ZodString;
            }, z.core.$strict>;
        }, z.core.$strict>], "kind">;
        current: z.ZodNullable<z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            semanticState: z.ZodString;
            version: z.ZodNumber;
            digest: z.ZodString;
        }, z.core.$strict>>;
        attempted: z.ZodObject<{
            sourceCommit: z.ZodObject<{
                mutationKind: z.ZodLiteral<"policy_admission">;
                localId: z.ZodString;
            }, z.core.$strict>;
            requestDigest: z.ZodString;
            transactionDigest: z.ZodString;
            attemptDigest: z.ZodString;
            aggregateSnapshotDigest: z.ZodString;
        }, z.core.$strict>;
        ordinal: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type PolicyAdmissionTerminalEvidence = z.infer<typeof PolicyAdmissionTerminalEvidenceSchema>;
export declare const PolicyAdmissionAttemptBindingSchema: z.ZodObject<{
    policyAdmissionAttemptVersion: z.ZodLiteral<"policy-admission-attempt-2">;
    sourceScope: z.ZodObject<{
        tenantId: z.ZodString;
        organizationId: z.ZodString;
    }, z.core.$strict>;
    actionContract: z.ZodObject<{
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
        actionContractDigest: z.ZodString;
    }, z.core.$strict>;
    envelope: z.ZodObject<{
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
    }, z.core.$strict>;
    policyEvaluator: z.ZodObject<{
        ref: z.ZodString;
        digest: z.ZodString;
    }, z.core.$strict>;
    request: z.ZodObject<{
        actionContractId: z.ZodString;
        envelopeId: z.ZodString;
        policyEvaluatorVersion: z.ZodString;
        requiredTypedCommitmentRefs: z.ZodArray<z.ZodString>;
        requiredTypedCommitmentSetDigest: z.ZodNullable<z.ZodString>;
        typedCommitments: z.ZodArray<z.ZodObject<{
            typedActionCommitmentId: z.ZodString;
            commitmentDigest: z.ZodString;
            subjectDigest: z.ZodString;
            purpose: z.ZodEnum<{
                external_commitment_evidence: "external_commitment_evidence";
                policy_required_evidence: "policy_required_evidence";
                service_workflow_readback: "service_workflow_readback";
                post_gateway_payment_evidence: "post_gateway_payment_evidence";
                display_binding_evidence: "display_binding_evidence";
            }>;
            profile: z.ZodEnum<{
                handshake_jcs_typed: "handshake_jcs_typed";
                eip712: "eip712";
            }>;
            verificationStatus: z.ZodEnum<{
                unverified: "unverified";
                proof_gap: "proof_gap";
                verified: "verified";
                refused: "refused";
                unsupported: "unsupported";
            }>;
            replayStatus: z.ZodEnum<{
                stale: "stale";
                fresh: "fresh";
                replayed: "replayed";
                missing: "missing";
                not_applicable: "not_applicable";
            }>;
            verifierContextDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            safetyPosture: z.ZodEnum<{
                proof_gap: "proof_gap";
                refused: "refused";
                display_bound: "display_bound";
                digest_bound: "digest_bound";
                verifier_bound: "verifier_bound";
                provider_observed: "provider_observed";
            }>;
        }, z.core.$strict>>;
        reviewDecisionId: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type PolicyAdmissionAttemptBinding = z.infer<typeof PolicyAdmissionAttemptBindingSchema>;
export declare const PolicyAdmissionProjectionProfileV1Schema: z.ZodType<PolicyAdmissionProjectionProfileV1>;
export type PolicyAdmissionProjectionProfileV1 = Readonly<{
    descriptorVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DESCRIPTOR_VERSION;
    deliveryPolicy: Readonly<{
        policyVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DELIVERY_POLICY_VERSION;
        maxAttempts: 16;
        maxLeaseTicks: 10_000;
    }>;
    route: Readonly<{
        routeVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_ROUTE_VERSION;
        authoritySourceNamespace: "handshake-policy-authority-source";
        destinationNamespace: "handshake-protocol-read-model";
        configurationDigest: `sha256:${string}`;
    }>;
}>;
export declare const PolicyAdmissionTransactionBindingV2Schema: z.ZodObject<{
    policyAdmissionTransactionBindingVersion: z.ZodLiteral<"policy-admission-transaction-binding-2">;
    logicalAttempt: z.ZodObject<{
        policyAdmissionAttemptVersion: z.ZodLiteral<"policy-admission-attempt-2">;
        sourceScope: z.ZodObject<{
            tenantId: z.ZodString;
            organizationId: z.ZodString;
        }, z.core.$strict>;
        actionContract: z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
            actionContractDigest: z.ZodString;
        }, z.core.$strict>;
        envelope: z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>;
        policyEvaluator: z.ZodObject<{
            ref: z.ZodString;
            digest: z.ZodString;
        }, z.core.$strict>;
        request: z.ZodObject<{
            actionContractId: z.ZodString;
            envelopeId: z.ZodString;
            policyEvaluatorVersion: z.ZodString;
            requiredTypedCommitmentRefs: z.ZodArray<z.ZodString>;
            requiredTypedCommitmentSetDigest: z.ZodNullable<z.ZodString>;
            typedCommitments: z.ZodArray<z.ZodObject<{
                typedActionCommitmentId: z.ZodString;
                commitmentDigest: z.ZodString;
                subjectDigest: z.ZodString;
                purpose: z.ZodEnum<{
                    external_commitment_evidence: "external_commitment_evidence";
                    policy_required_evidence: "policy_required_evidence";
                    service_workflow_readback: "service_workflow_readback";
                    post_gateway_payment_evidence: "post_gateway_payment_evidence";
                    display_binding_evidence: "display_binding_evidence";
                }>;
                profile: z.ZodEnum<{
                    handshake_jcs_typed: "handshake_jcs_typed";
                    eip712: "eip712";
                }>;
                verificationStatus: z.ZodEnum<{
                    unverified: "unverified";
                    proof_gap: "proof_gap";
                    verified: "verified";
                    refused: "refused";
                    unsupported: "unsupported";
                }>;
                replayStatus: z.ZodEnum<{
                    stale: "stale";
                    fresh: "fresh";
                    replayed: "replayed";
                    missing: "missing";
                    not_applicable: "not_applicable";
                }>;
                verifierContextDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
                safetyPosture: z.ZodEnum<{
                    proof_gap: "proof_gap";
                    refused: "refused";
                    display_bound: "display_bound";
                    digest_bound: "digest_bound";
                    verifier_bound: "verifier_bound";
                    provider_observed: "provider_observed";
                }>;
            }, z.core.$strict>>;
            reviewDecisionId: z.ZodNullable<z.ZodString>;
        }, z.core.$strict>;
    }, z.core.$strict>;
    logicalAttemptDigest: z.ZodString;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyInput: z.ZodType<import("../../types").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../types").JsonValue, unknown>>;
    policyInputDigest: z.ZodString;
    aggregateSnapshot: z.ZodType<import("../snapshot").AggregateAdmissionSnapshot, unknown, z.core.$ZodTypeInternals<import("../snapshot").AggregateAdmissionSnapshot, unknown>>;
    aggregateSnapshotDigest: z.ZodString;
    isolationSnapshotDigest: z.ZodString;
    aggregatePosture: z.ZodEnum<{
        required: "required";
        missing: "missing";
        not_applicable: "not_applicable";
    }>;
    pointerGuardSetDigest: z.ZodString;
    pointerGuards: z.ZodArray<z.ZodObject<{
        pointer: z.ZodObject<{
            pointerKind: z.ZodEnum<{
                isolation_state: "isolation_state";
                effect_lineage: "effect_lineage";
                effect_observation: "effect_observation";
                idempotency_claim: "idempotency_claim";
                operation_claim: "operation_claim";
                authority_context: "authority_context";
                configuration_state: "configuration_state";
                aggregate_authority: "aggregate_authority";
                access_lease: "access_lease";
                access_usage: "access_usage";
                projection_delivery: "projection_delivery";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        expected: z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absent">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"exact">;
            witness: z.ZodObject<{
                record: z.ZodObject<{
                    recordKind: z.ZodEnum<{
                        authority_state: "authority_state";
                        authority_evidence: "authority_evidence";
                        authority_binding: "authority_binding";
                        projection_state: "projection_state";
                    }>;
                    localId: z.ZodString;
                }, z.core.$strict>;
                semanticState: z.ZodString;
                version: z.ZodNumber;
                digest: z.ZodString;
            }, z.core.$strict>;
        }, z.core.$strict>], "kind">;
    }, z.core.$strict>>;
    temporalFence: z.ZodNullable<z.ZodObject<{
        kind: z.ZodLiteral<"store_time_in_half_open_interval">;
        notBefore: z.ZodString;
        notAfter: z.ZodString;
    }, z.core.$strict>>;
    outcome: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    decision: z.ZodObject<{
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
    }, z.core.$strict>;
    greenlight: z.ZodNullable<z.ZodObject<{
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
    }, z.core.$strict>>;
    refusal: z.ZodNullable<z.ZodObject<{
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
    }, z.core.$strict>>;
    proofGap: z.ZodNullable<z.ZodObject<{
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
    }, z.core.$strict>>;
    protocolRecords: z.ZodArray<z.ZodObject<{
        role: z.ZodEnum<{
            refusal: "refusal";
            proof_gap: "proof_gap";
            greenlight: "greenlight";
            policy_decision: "policy_decision";
            request_context: "request_context";
        }>;
        objectType: z.ZodEnum<{
            refusal: "refusal";
            proof_gap: "proof_gap";
            greenlight: "greenlight";
            transition_request_context: "transition_request_context";
            policy_decision: "policy_decision";
        }>;
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
        envelopeDigest: z.ZodString;
    }, z.core.$strict>>;
    eventDescriptorDigests: z.ZodArray<z.ZodString>;
    eventProjectionBindingDigests: z.ZodArray<z.ZodString>;
    protocolRecordProjectionProfile: z.ZodType<Readonly<{
        descriptorVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DESCRIPTOR_VERSION;
        deliveryPolicy: Readonly<{
            policyVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DELIVERY_POLICY_VERSION;
            maxAttempts: 16;
            maxLeaseTicks: 10000;
        }>;
        route: Readonly<{
            routeVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_ROUTE_VERSION;
            authoritySourceNamespace: "handshake-policy-authority-source";
            destinationNamespace: "handshake-protocol-read-model";
            configurationDigest: `sha256:${string}`;
        }>;
    }>, unknown, z.core.$ZodTypeInternals<Readonly<{
        descriptorVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DESCRIPTOR_VERSION;
        deliveryPolicy: Readonly<{
            policyVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DELIVERY_POLICY_VERSION;
            maxAttempts: 16;
            maxLeaseTicks: 10000;
        }>;
        route: Readonly<{
            routeVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_ROUTE_VERSION;
            authoritySourceNamespace: "handshake-policy-authority-source";
            destinationNamespace: "handshake-protocol-read-model";
            configurationDigest: `sha256:${string}`;
        }>;
    }>, unknown>>;
    protocolRecordProjectionProfileDigest: z.ZodString;
}, z.core.$strict>;
export type PolicyAdmissionTransactionBindingV2 = z.infer<typeof PolicyAdmissionTransactionBindingV2Schema>;
export declare const PolicyAdmissionOutcomeSourcePayloadV2Schema: z.ZodObject<{
    policyAdmissionOutcomeSourceVersion: z.ZodLiteral<"policy-admission-outcome-source-2">;
    attemptDigest: z.ZodString;
    transactionDigest: z.ZodString;
    transactionBinding: z.ZodObject<{
        policyAdmissionTransactionBindingVersion: z.ZodLiteral<"policy-admission-transaction-binding-2">;
        logicalAttempt: z.ZodObject<{
            policyAdmissionAttemptVersion: z.ZodLiteral<"policy-admission-attempt-2">;
            sourceScope: z.ZodObject<{
                tenantId: z.ZodString;
                organizationId: z.ZodString;
            }, z.core.$strict>;
            actionContract: z.ZodObject<{
                objectId: z.ZodString;
                canonicalDigest: z.ZodString;
                actionContractDigest: z.ZodString;
            }, z.core.$strict>;
            envelope: z.ZodObject<{
                objectId: z.ZodString;
                canonicalDigest: z.ZodString;
            }, z.core.$strict>;
            policyEvaluator: z.ZodObject<{
                ref: z.ZodString;
                digest: z.ZodString;
            }, z.core.$strict>;
            request: z.ZodObject<{
                actionContractId: z.ZodString;
                envelopeId: z.ZodString;
                policyEvaluatorVersion: z.ZodString;
                requiredTypedCommitmentRefs: z.ZodArray<z.ZodString>;
                requiredTypedCommitmentSetDigest: z.ZodNullable<z.ZodString>;
                typedCommitments: z.ZodArray<z.ZodObject<{
                    typedActionCommitmentId: z.ZodString;
                    commitmentDigest: z.ZodString;
                    subjectDigest: z.ZodString;
                    purpose: z.ZodEnum<{
                        external_commitment_evidence: "external_commitment_evidence";
                        policy_required_evidence: "policy_required_evidence";
                        service_workflow_readback: "service_workflow_readback";
                        post_gateway_payment_evidence: "post_gateway_payment_evidence";
                        display_binding_evidence: "display_binding_evidence";
                    }>;
                    profile: z.ZodEnum<{
                        handshake_jcs_typed: "handshake_jcs_typed";
                        eip712: "eip712";
                    }>;
                    verificationStatus: z.ZodEnum<{
                        unverified: "unverified";
                        proof_gap: "proof_gap";
                        verified: "verified";
                        refused: "refused";
                        unsupported: "unsupported";
                    }>;
                    replayStatus: z.ZodEnum<{
                        stale: "stale";
                        fresh: "fresh";
                        replayed: "replayed";
                        missing: "missing";
                        not_applicable: "not_applicable";
                    }>;
                    verifierContextDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
                    safetyPosture: z.ZodEnum<{
                        proof_gap: "proof_gap";
                        refused: "refused";
                        display_bound: "display_bound";
                        digest_bound: "digest_bound";
                        verifier_bound: "verifier_bound";
                        provider_observed: "provider_observed";
                    }>;
                }, z.core.$strict>>;
                reviewDecisionId: z.ZodNullable<z.ZodString>;
            }, z.core.$strict>;
        }, z.core.$strict>;
        logicalAttemptDigest: z.ZodString;
        actionContractId: z.ZodString;
        actionContractDigest: z.ZodString;
        policyInput: z.ZodType<import("../../types").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../types").JsonValue, unknown>>;
        policyInputDigest: z.ZodString;
        aggregateSnapshot: z.ZodType<import("../snapshot").AggregateAdmissionSnapshot, unknown, z.core.$ZodTypeInternals<import("../snapshot").AggregateAdmissionSnapshot, unknown>>;
        aggregateSnapshotDigest: z.ZodString;
        isolationSnapshotDigest: z.ZodString;
        aggregatePosture: z.ZodEnum<{
            required: "required";
            missing: "missing";
            not_applicable: "not_applicable";
        }>;
        pointerGuardSetDigest: z.ZodString;
        pointerGuards: z.ZodArray<z.ZodObject<{
            pointer: z.ZodObject<{
                pointerKind: z.ZodEnum<{
                    isolation_state: "isolation_state";
                    effect_lineage: "effect_lineage";
                    effect_observation: "effect_observation";
                    idempotency_claim: "idempotency_claim";
                    operation_claim: "operation_claim";
                    authority_context: "authority_context";
                    configuration_state: "configuration_state";
                    aggregate_authority: "aggregate_authority";
                    access_lease: "access_lease";
                    access_usage: "access_usage";
                    projection_delivery: "projection_delivery";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            expected: z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"absent">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"exact">;
                witness: z.ZodObject<{
                    record: z.ZodObject<{
                        recordKind: z.ZodEnum<{
                            authority_state: "authority_state";
                            authority_evidence: "authority_evidence";
                            authority_binding: "authority_binding";
                            projection_state: "projection_state";
                        }>;
                        localId: z.ZodString;
                    }, z.core.$strict>;
                    semanticState: z.ZodString;
                    version: z.ZodNumber;
                    digest: z.ZodString;
                }, z.core.$strict>;
            }, z.core.$strict>], "kind">;
        }, z.core.$strict>>;
        temporalFence: z.ZodNullable<z.ZodObject<{
            kind: z.ZodLiteral<"store_time_in_half_open_interval">;
            notBefore: z.ZodString;
            notAfter: z.ZodString;
        }, z.core.$strict>>;
        outcome: z.ZodEnum<{
            review_required: "review_required";
            proof_gap: "proof_gap";
            refuse: "refuse";
            quarantine: "quarantine";
            greenlight: "greenlight";
            halt: "halt";
        }>;
        decision: z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>;
        greenlight: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        refusal: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        proofGap: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        protocolRecords: z.ZodArray<z.ZodObject<{
            role: z.ZodEnum<{
                refusal: "refusal";
                proof_gap: "proof_gap";
                greenlight: "greenlight";
                policy_decision: "policy_decision";
                request_context: "request_context";
            }>;
            objectType: z.ZodEnum<{
                refusal: "refusal";
                proof_gap: "proof_gap";
                greenlight: "greenlight";
                transition_request_context: "transition_request_context";
                policy_decision: "policy_decision";
            }>;
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
            envelopeDigest: z.ZodString;
        }, z.core.$strict>>;
        eventDescriptorDigests: z.ZodArray<z.ZodString>;
        eventProjectionBindingDigests: z.ZodArray<z.ZodString>;
        protocolRecordProjectionProfile: z.ZodType<Readonly<{
            descriptorVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DESCRIPTOR_VERSION;
            deliveryPolicy: Readonly<{
                policyVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DELIVERY_POLICY_VERSION;
                maxAttempts: 16;
                maxLeaseTicks: 10000;
            }>;
            route: Readonly<{
                routeVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_ROUTE_VERSION;
                authoritySourceNamespace: "handshake-policy-authority-source";
                destinationNamespace: "handshake-protocol-read-model";
                configurationDigest: `sha256:${string}`;
            }>;
        }>, unknown, z.core.$ZodTypeInternals<Readonly<{
            descriptorVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DESCRIPTOR_VERSION;
            deliveryPolicy: Readonly<{
                policyVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DELIVERY_POLICY_VERSION;
                maxAttempts: 16;
                maxLeaseTicks: 10000;
            }>;
            route: Readonly<{
                routeVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_ROUTE_VERSION;
                authoritySourceNamespace: "handshake-policy-authority-source";
                destinationNamespace: "handshake-protocol-read-model";
                configurationDigest: `sha256:${string}`;
            }>;
        }>, unknown>>;
        protocolRecordProjectionProfileDigest: z.ZodString;
    }, z.core.$strict>;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyDecisionId: z.ZodString;
    policyInputDigest: z.ZodString;
    aggregateSnapshotDigest: z.ZodString;
    isolationSnapshotDigest: z.ZodString;
    aggregatePosture: z.ZodEnum<{
        required: "required";
        missing: "missing";
        not_applicable: "not_applicable";
    }>;
    outcome: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    greenlightId: z.ZodNullable<z.ZodString>;
    refusalId: z.ZodNullable<z.ZodString>;
    proofGapId: z.ZodNullable<z.ZodString>;
    protocolRecords: z.ZodArray<z.ZodObject<{
        objectId: z.ZodString;
        objectType: z.ZodEnum<{
            refusal: "refusal";
            proof_gap: "proof_gap";
            greenlight: "greenlight";
            transition_request_context: "transition_request_context";
            policy_decision: "policy_decision";
        }>;
        tenantId: z.ZodString;
        organizationId: z.ZodString;
        schemaVersion: z.ZodString;
        canonicalDigest: z.ZodString;
        payload: z.ZodType<import("../../types").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../types").JsonValue, unknown>>;
        createdAt: z.ZodString;
        sourceEventId: z.ZodNull;
    }, z.core.$strict>>;
}, z.core.$strict>;
export declare const PolicyAdmissionProjectionDispositionV1Schema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    policyAdmissionProjectionDispositionVersion: z.ZodLiteral<"policy-admission-projection-disposition-1">;
    kind: z.ZodLiteral<"none">;
    reason: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        greenlight: "greenlight";
    }>;
    projectionIntentCount: z.ZodLiteral<0>;
    materializationPosture: z.ZodLiteral<"not_requested">;
}, z.core.$strict>, z.ZodObject<{
    policyAdmissionProjectionDispositionVersion: z.ZodLiteral<"policy-admission-projection-disposition-1">;
    kind: z.ZodLiteral<"exact_refusal_protocol_record_v2">;
    projectionIntentCount: z.ZodLiteral<1>;
    materializationPosture: z.ZodLiteral<"intent_only_uncomposed">;
    intentDescriptorBinding: z.ZodObject<{
        descriptorVersion: z.ZodLiteral<"authority-projection-outbox-protocol-record-descriptor-2">;
        route: z.ZodObject<{
            routeVersion: z.ZodLiteral<"authority-projection-outbox-protocol-record-route-2">;
            authoritySourceNamespace: z.ZodLiteral<"handshake-policy-authority-source">;
            destinationNamespace: z.ZodLiteral<"handshake-protocol-read-model">;
            configurationDigest: z.ZodString;
        }, z.core.$strict>;
        destination: z.ZodObject<{
            objectType: z.ZodLiteral<"refusal">;
            objectId: z.ZodString;
            tenantId: z.ZodString;
            organizationId: z.ZodString;
            schemaVersion: z.ZodString;
            canonicalPayloadDigest: z.ZodString;
        }, z.core.$strict>;
        recordEnvelopeDigest: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>], "kind">;
export type PolicyAdmissionProjectionDispositionV1 = z.infer<typeof PolicyAdmissionProjectionDispositionV1Schema>;
export declare const PolicyAdmissionTransactionBindingV3Schema: z.ZodObject<{
    policyAdmissionTransactionBindingVersion: z.ZodLiteral<"policy-admission-transaction-binding-3">;
    logicalAttempt: z.ZodObject<{
        policyAdmissionAttemptVersion: z.ZodLiteral<"policy-admission-attempt-2">;
        sourceScope: z.ZodObject<{
            tenantId: z.ZodString;
            organizationId: z.ZodString;
        }, z.core.$strict>;
        actionContract: z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
            actionContractDigest: z.ZodString;
        }, z.core.$strict>;
        envelope: z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>;
        policyEvaluator: z.ZodObject<{
            ref: z.ZodString;
            digest: z.ZodString;
        }, z.core.$strict>;
        request: z.ZodObject<{
            actionContractId: z.ZodString;
            envelopeId: z.ZodString;
            policyEvaluatorVersion: z.ZodString;
            requiredTypedCommitmentRefs: z.ZodArray<z.ZodString>;
            requiredTypedCommitmentSetDigest: z.ZodNullable<z.ZodString>;
            typedCommitments: z.ZodArray<z.ZodObject<{
                typedActionCommitmentId: z.ZodString;
                commitmentDigest: z.ZodString;
                subjectDigest: z.ZodString;
                purpose: z.ZodEnum<{
                    external_commitment_evidence: "external_commitment_evidence";
                    policy_required_evidence: "policy_required_evidence";
                    service_workflow_readback: "service_workflow_readback";
                    post_gateway_payment_evidence: "post_gateway_payment_evidence";
                    display_binding_evidence: "display_binding_evidence";
                }>;
                profile: z.ZodEnum<{
                    handshake_jcs_typed: "handshake_jcs_typed";
                    eip712: "eip712";
                }>;
                verificationStatus: z.ZodEnum<{
                    unverified: "unverified";
                    proof_gap: "proof_gap";
                    verified: "verified";
                    refused: "refused";
                    unsupported: "unsupported";
                }>;
                replayStatus: z.ZodEnum<{
                    stale: "stale";
                    fresh: "fresh";
                    replayed: "replayed";
                    missing: "missing";
                    not_applicable: "not_applicable";
                }>;
                verifierContextDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
                safetyPosture: z.ZodEnum<{
                    proof_gap: "proof_gap";
                    refused: "refused";
                    display_bound: "display_bound";
                    digest_bound: "digest_bound";
                    verifier_bound: "verifier_bound";
                    provider_observed: "provider_observed";
                }>;
            }, z.core.$strict>>;
            reviewDecisionId: z.ZodNullable<z.ZodString>;
        }, z.core.$strict>;
    }, z.core.$strict>;
    logicalAttemptDigest: z.ZodString;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyInput: z.ZodType<import("../../types").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../types").JsonValue, unknown>>;
    policyInputDigest: z.ZodString;
    aggregateSnapshot: z.ZodType<import("../snapshot").AggregateAdmissionSnapshot, unknown, z.core.$ZodTypeInternals<import("../snapshot").AggregateAdmissionSnapshot, unknown>>;
    aggregateSnapshotDigest: z.ZodString;
    isolationSnapshotDigest: z.ZodString;
    aggregatePosture: z.ZodEnum<{
        required: "required";
        missing: "missing";
        not_applicable: "not_applicable";
    }>;
    pointerGuardSetDigest: z.ZodString;
    pointerGuards: z.ZodArray<z.ZodObject<{
        pointer: z.ZodObject<{
            pointerKind: z.ZodEnum<{
                isolation_state: "isolation_state";
                effect_lineage: "effect_lineage";
                effect_observation: "effect_observation";
                idempotency_claim: "idempotency_claim";
                operation_claim: "operation_claim";
                authority_context: "authority_context";
                configuration_state: "configuration_state";
                aggregate_authority: "aggregate_authority";
                access_lease: "access_lease";
                access_usage: "access_usage";
                projection_delivery: "projection_delivery";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        expected: z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absent">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"exact">;
            witness: z.ZodObject<{
                record: z.ZodObject<{
                    recordKind: z.ZodEnum<{
                        authority_state: "authority_state";
                        authority_evidence: "authority_evidence";
                        authority_binding: "authority_binding";
                        projection_state: "projection_state";
                    }>;
                    localId: z.ZodString;
                }, z.core.$strict>;
                semanticState: z.ZodString;
                version: z.ZodNumber;
                digest: z.ZodString;
            }, z.core.$strict>;
        }, z.core.$strict>], "kind">;
    }, z.core.$strict>>;
    temporalFence: z.ZodNullable<z.ZodObject<{
        kind: z.ZodLiteral<"store_time_in_half_open_interval">;
        notBefore: z.ZodString;
        notAfter: z.ZodString;
    }, z.core.$strict>>;
    outcome: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    decision: z.ZodObject<{
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
    }, z.core.$strict>;
    greenlight: z.ZodNullable<z.ZodObject<{
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
    }, z.core.$strict>>;
    refusal: z.ZodNullable<z.ZodObject<{
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
    }, z.core.$strict>>;
    proofGap: z.ZodNullable<z.ZodObject<{
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
    }, z.core.$strict>>;
    embeddedRecordWitnesses: z.ZodArray<z.ZodObject<{
        role: z.ZodEnum<{
            refusal: "refusal";
            proof_gap: "proof_gap";
            greenlight: "greenlight";
            policy_decision: "policy_decision";
            request_context: "request_context";
        }>;
        objectType: z.ZodEnum<{
            refusal: "refusal";
            proof_gap: "proof_gap";
            greenlight: "greenlight";
            transition_request_context: "transition_request_context";
            policy_decision: "policy_decision";
        }>;
        objectId: z.ZodString;
        canonicalDigest: z.ZodString;
        envelopeDigest: z.ZodString;
    }, z.core.$strict>>;
    projectionDisposition: z.ZodDiscriminatedUnion<[z.ZodObject<{
        policyAdmissionProjectionDispositionVersion: z.ZodLiteral<"policy-admission-projection-disposition-1">;
        kind: z.ZodLiteral<"none">;
        reason: z.ZodEnum<{
            review_required: "review_required";
            proof_gap: "proof_gap";
            greenlight: "greenlight";
        }>;
        projectionIntentCount: z.ZodLiteral<0>;
        materializationPosture: z.ZodLiteral<"not_requested">;
    }, z.core.$strict>, z.ZodObject<{
        policyAdmissionProjectionDispositionVersion: z.ZodLiteral<"policy-admission-projection-disposition-1">;
        kind: z.ZodLiteral<"exact_refusal_protocol_record_v2">;
        projectionIntentCount: z.ZodLiteral<1>;
        materializationPosture: z.ZodLiteral<"intent_only_uncomposed">;
        intentDescriptorBinding: z.ZodObject<{
            descriptorVersion: z.ZodLiteral<"authority-projection-outbox-protocol-record-descriptor-2">;
            route: z.ZodObject<{
                routeVersion: z.ZodLiteral<"authority-projection-outbox-protocol-record-route-2">;
                authoritySourceNamespace: z.ZodLiteral<"handshake-policy-authority-source">;
                destinationNamespace: z.ZodLiteral<"handshake-protocol-read-model">;
                configurationDigest: z.ZodString;
            }, z.core.$strict>;
            destination: z.ZodObject<{
                objectType: z.ZodLiteral<"refusal">;
                objectId: z.ZodString;
                tenantId: z.ZodString;
                organizationId: z.ZodString;
                schemaVersion: z.ZodString;
                canonicalPayloadDigest: z.ZodString;
            }, z.core.$strict>;
            recordEnvelopeDigest: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strict>], "kind">;
}, z.core.$strict>;
export type PolicyAdmissionTransactionBindingV3 = z.infer<typeof PolicyAdmissionTransactionBindingV3Schema>;
export declare const PolicyAdmissionOutcomeSourcePayloadV3Schema: z.ZodObject<{
    policyAdmissionOutcomeSourceVersion: z.ZodLiteral<"policy-admission-outcome-source-3">;
    attemptDigest: z.ZodString;
    transactionDigest: z.ZodString;
    transactionBinding: z.ZodObject<{
        policyAdmissionTransactionBindingVersion: z.ZodLiteral<"policy-admission-transaction-binding-3">;
        logicalAttempt: z.ZodObject<{
            policyAdmissionAttemptVersion: z.ZodLiteral<"policy-admission-attempt-2">;
            sourceScope: z.ZodObject<{
                tenantId: z.ZodString;
                organizationId: z.ZodString;
            }, z.core.$strict>;
            actionContract: z.ZodObject<{
                objectId: z.ZodString;
                canonicalDigest: z.ZodString;
                actionContractDigest: z.ZodString;
            }, z.core.$strict>;
            envelope: z.ZodObject<{
                objectId: z.ZodString;
                canonicalDigest: z.ZodString;
            }, z.core.$strict>;
            policyEvaluator: z.ZodObject<{
                ref: z.ZodString;
                digest: z.ZodString;
            }, z.core.$strict>;
            request: z.ZodObject<{
                actionContractId: z.ZodString;
                envelopeId: z.ZodString;
                policyEvaluatorVersion: z.ZodString;
                requiredTypedCommitmentRefs: z.ZodArray<z.ZodString>;
                requiredTypedCommitmentSetDigest: z.ZodNullable<z.ZodString>;
                typedCommitments: z.ZodArray<z.ZodObject<{
                    typedActionCommitmentId: z.ZodString;
                    commitmentDigest: z.ZodString;
                    subjectDigest: z.ZodString;
                    purpose: z.ZodEnum<{
                        external_commitment_evidence: "external_commitment_evidence";
                        policy_required_evidence: "policy_required_evidence";
                        service_workflow_readback: "service_workflow_readback";
                        post_gateway_payment_evidence: "post_gateway_payment_evidence";
                        display_binding_evidence: "display_binding_evidence";
                    }>;
                    profile: z.ZodEnum<{
                        handshake_jcs_typed: "handshake_jcs_typed";
                        eip712: "eip712";
                    }>;
                    verificationStatus: z.ZodEnum<{
                        unverified: "unverified";
                        proof_gap: "proof_gap";
                        verified: "verified";
                        refused: "refused";
                        unsupported: "unsupported";
                    }>;
                    replayStatus: z.ZodEnum<{
                        stale: "stale";
                        fresh: "fresh";
                        replayed: "replayed";
                        missing: "missing";
                        not_applicable: "not_applicable";
                    }>;
                    verifierContextDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
                    safetyPosture: z.ZodEnum<{
                        proof_gap: "proof_gap";
                        refused: "refused";
                        display_bound: "display_bound";
                        digest_bound: "digest_bound";
                        verifier_bound: "verifier_bound";
                        provider_observed: "provider_observed";
                    }>;
                }, z.core.$strict>>;
                reviewDecisionId: z.ZodNullable<z.ZodString>;
            }, z.core.$strict>;
        }, z.core.$strict>;
        logicalAttemptDigest: z.ZodString;
        actionContractId: z.ZodString;
        actionContractDigest: z.ZodString;
        policyInput: z.ZodType<import("../../types").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../types").JsonValue, unknown>>;
        policyInputDigest: z.ZodString;
        aggregateSnapshot: z.ZodType<import("../snapshot").AggregateAdmissionSnapshot, unknown, z.core.$ZodTypeInternals<import("../snapshot").AggregateAdmissionSnapshot, unknown>>;
        aggregateSnapshotDigest: z.ZodString;
        isolationSnapshotDigest: z.ZodString;
        aggregatePosture: z.ZodEnum<{
            required: "required";
            missing: "missing";
            not_applicable: "not_applicable";
        }>;
        pointerGuardSetDigest: z.ZodString;
        pointerGuards: z.ZodArray<z.ZodObject<{
            pointer: z.ZodObject<{
                pointerKind: z.ZodEnum<{
                    isolation_state: "isolation_state";
                    effect_lineage: "effect_lineage";
                    effect_observation: "effect_observation";
                    idempotency_claim: "idempotency_claim";
                    operation_claim: "operation_claim";
                    authority_context: "authority_context";
                    configuration_state: "configuration_state";
                    aggregate_authority: "aggregate_authority";
                    access_lease: "access_lease";
                    access_usage: "access_usage";
                    projection_delivery: "projection_delivery";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            expected: z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"absent">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"exact">;
                witness: z.ZodObject<{
                    record: z.ZodObject<{
                        recordKind: z.ZodEnum<{
                            authority_state: "authority_state";
                            authority_evidence: "authority_evidence";
                            authority_binding: "authority_binding";
                            projection_state: "projection_state";
                        }>;
                        localId: z.ZodString;
                    }, z.core.$strict>;
                    semanticState: z.ZodString;
                    version: z.ZodNumber;
                    digest: z.ZodString;
                }, z.core.$strict>;
            }, z.core.$strict>], "kind">;
        }, z.core.$strict>>;
        temporalFence: z.ZodNullable<z.ZodObject<{
            kind: z.ZodLiteral<"store_time_in_half_open_interval">;
            notBefore: z.ZodString;
            notAfter: z.ZodString;
        }, z.core.$strict>>;
        outcome: z.ZodEnum<{
            review_required: "review_required";
            proof_gap: "proof_gap";
            refuse: "refuse";
            quarantine: "quarantine";
            greenlight: "greenlight";
            halt: "halt";
        }>;
        decision: z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>;
        greenlight: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        refusal: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        proofGap: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        embeddedRecordWitnesses: z.ZodArray<z.ZodObject<{
            role: z.ZodEnum<{
                refusal: "refusal";
                proof_gap: "proof_gap";
                greenlight: "greenlight";
                policy_decision: "policy_decision";
                request_context: "request_context";
            }>;
            objectType: z.ZodEnum<{
                refusal: "refusal";
                proof_gap: "proof_gap";
                greenlight: "greenlight";
                transition_request_context: "transition_request_context";
                policy_decision: "policy_decision";
            }>;
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
            envelopeDigest: z.ZodString;
        }, z.core.$strict>>;
        projectionDisposition: z.ZodDiscriminatedUnion<[z.ZodObject<{
            policyAdmissionProjectionDispositionVersion: z.ZodLiteral<"policy-admission-projection-disposition-1">;
            kind: z.ZodLiteral<"none">;
            reason: z.ZodEnum<{
                review_required: "review_required";
                proof_gap: "proof_gap";
                greenlight: "greenlight";
            }>;
            projectionIntentCount: z.ZodLiteral<0>;
            materializationPosture: z.ZodLiteral<"not_requested">;
        }, z.core.$strict>, z.ZodObject<{
            policyAdmissionProjectionDispositionVersion: z.ZodLiteral<"policy-admission-projection-disposition-1">;
            kind: z.ZodLiteral<"exact_refusal_protocol_record_v2">;
            projectionIntentCount: z.ZodLiteral<1>;
            materializationPosture: z.ZodLiteral<"intent_only_uncomposed">;
            intentDescriptorBinding: z.ZodObject<{
                descriptorVersion: z.ZodLiteral<"authority-projection-outbox-protocol-record-descriptor-2">;
                route: z.ZodObject<{
                    routeVersion: z.ZodLiteral<"authority-projection-outbox-protocol-record-route-2">;
                    authoritySourceNamespace: z.ZodLiteral<"handshake-policy-authority-source">;
                    destinationNamespace: z.ZodLiteral<"handshake-protocol-read-model">;
                    configurationDigest: z.ZodString;
                }, z.core.$strict>;
                destination: z.ZodObject<{
                    objectType: z.ZodLiteral<"refusal">;
                    objectId: z.ZodString;
                    tenantId: z.ZodString;
                    organizationId: z.ZodString;
                    schemaVersion: z.ZodString;
                    canonicalPayloadDigest: z.ZodString;
                }, z.core.$strict>;
                recordEnvelopeDigest: z.ZodString;
            }, z.core.$strict>;
        }, z.core.$strict>], "kind">;
    }, z.core.$strict>;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyDecisionId: z.ZodString;
    policyInputDigest: z.ZodString;
    aggregateSnapshotDigest: z.ZodString;
    isolationSnapshotDigest: z.ZodString;
    aggregatePosture: z.ZodEnum<{
        required: "required";
        missing: "missing";
        not_applicable: "not_applicable";
    }>;
    outcome: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    greenlightId: z.ZodNullable<z.ZodString>;
    refusalId: z.ZodNullable<z.ZodString>;
    proofGapId: z.ZodNullable<z.ZodString>;
    embeddedProtocolRecords: z.ZodArray<z.ZodObject<{
        objectId: z.ZodString;
        objectType: z.ZodEnum<{
            refusal: "refusal";
            proof_gap: "proof_gap";
            greenlight: "greenlight";
            transition_request_context: "transition_request_context";
            policy_decision: "policy_decision";
        }>;
        tenantId: z.ZodString;
        organizationId: z.ZodString;
        schemaVersion: z.ZodString;
        canonicalDigest: z.ZodString;
        payload: z.ZodType<import("../../types").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../types").JsonValue, unknown>>;
        createdAt: z.ZodString;
        sourceEventId: z.ZodNull;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type PolicyAdmissionOutcomeSourcePayloadV3 = z.infer<typeof PolicyAdmissionOutcomeSourcePayloadV3Schema>;
export declare const PolicyAdmissionOutcomeSourcePayloadDiscriminatorSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    policyAdmissionOutcomeSourceVersion: z.ZodLiteral<"policy-admission-outcome-source-2">;
    attemptDigest: z.ZodString;
    transactionDigest: z.ZodString;
    transactionBinding: z.ZodObject<{
        policyAdmissionTransactionBindingVersion: z.ZodLiteral<"policy-admission-transaction-binding-2">;
        logicalAttempt: z.ZodObject<{
            policyAdmissionAttemptVersion: z.ZodLiteral<"policy-admission-attempt-2">;
            sourceScope: z.ZodObject<{
                tenantId: z.ZodString;
                organizationId: z.ZodString;
            }, z.core.$strict>;
            actionContract: z.ZodObject<{
                objectId: z.ZodString;
                canonicalDigest: z.ZodString;
                actionContractDigest: z.ZodString;
            }, z.core.$strict>;
            envelope: z.ZodObject<{
                objectId: z.ZodString;
                canonicalDigest: z.ZodString;
            }, z.core.$strict>;
            policyEvaluator: z.ZodObject<{
                ref: z.ZodString;
                digest: z.ZodString;
            }, z.core.$strict>;
            request: z.ZodObject<{
                actionContractId: z.ZodString;
                envelopeId: z.ZodString;
                policyEvaluatorVersion: z.ZodString;
                requiredTypedCommitmentRefs: z.ZodArray<z.ZodString>;
                requiredTypedCommitmentSetDigest: z.ZodNullable<z.ZodString>;
                typedCommitments: z.ZodArray<z.ZodObject<{
                    typedActionCommitmentId: z.ZodString;
                    commitmentDigest: z.ZodString;
                    subjectDigest: z.ZodString;
                    purpose: z.ZodEnum<{
                        external_commitment_evidence: "external_commitment_evidence";
                        policy_required_evidence: "policy_required_evidence";
                        service_workflow_readback: "service_workflow_readback";
                        post_gateway_payment_evidence: "post_gateway_payment_evidence";
                        display_binding_evidence: "display_binding_evidence";
                    }>;
                    profile: z.ZodEnum<{
                        handshake_jcs_typed: "handshake_jcs_typed";
                        eip712: "eip712";
                    }>;
                    verificationStatus: z.ZodEnum<{
                        unverified: "unverified";
                        proof_gap: "proof_gap";
                        verified: "verified";
                        refused: "refused";
                        unsupported: "unsupported";
                    }>;
                    replayStatus: z.ZodEnum<{
                        stale: "stale";
                        fresh: "fresh";
                        replayed: "replayed";
                        missing: "missing";
                        not_applicable: "not_applicable";
                    }>;
                    verifierContextDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
                    safetyPosture: z.ZodEnum<{
                        proof_gap: "proof_gap";
                        refused: "refused";
                        display_bound: "display_bound";
                        digest_bound: "digest_bound";
                        verifier_bound: "verifier_bound";
                        provider_observed: "provider_observed";
                    }>;
                }, z.core.$strict>>;
                reviewDecisionId: z.ZodNullable<z.ZodString>;
            }, z.core.$strict>;
        }, z.core.$strict>;
        logicalAttemptDigest: z.ZodString;
        actionContractId: z.ZodString;
        actionContractDigest: z.ZodString;
        policyInput: z.ZodType<import("../../types").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../types").JsonValue, unknown>>;
        policyInputDigest: z.ZodString;
        aggregateSnapshot: z.ZodType<import("../snapshot").AggregateAdmissionSnapshot, unknown, z.core.$ZodTypeInternals<import("../snapshot").AggregateAdmissionSnapshot, unknown>>;
        aggregateSnapshotDigest: z.ZodString;
        isolationSnapshotDigest: z.ZodString;
        aggregatePosture: z.ZodEnum<{
            required: "required";
            missing: "missing";
            not_applicable: "not_applicable";
        }>;
        pointerGuardSetDigest: z.ZodString;
        pointerGuards: z.ZodArray<z.ZodObject<{
            pointer: z.ZodObject<{
                pointerKind: z.ZodEnum<{
                    isolation_state: "isolation_state";
                    effect_lineage: "effect_lineage";
                    effect_observation: "effect_observation";
                    idempotency_claim: "idempotency_claim";
                    operation_claim: "operation_claim";
                    authority_context: "authority_context";
                    configuration_state: "configuration_state";
                    aggregate_authority: "aggregate_authority";
                    access_lease: "access_lease";
                    access_usage: "access_usage";
                    projection_delivery: "projection_delivery";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            expected: z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"absent">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"exact">;
                witness: z.ZodObject<{
                    record: z.ZodObject<{
                        recordKind: z.ZodEnum<{
                            authority_state: "authority_state";
                            authority_evidence: "authority_evidence";
                            authority_binding: "authority_binding";
                            projection_state: "projection_state";
                        }>;
                        localId: z.ZodString;
                    }, z.core.$strict>;
                    semanticState: z.ZodString;
                    version: z.ZodNumber;
                    digest: z.ZodString;
                }, z.core.$strict>;
            }, z.core.$strict>], "kind">;
        }, z.core.$strict>>;
        temporalFence: z.ZodNullable<z.ZodObject<{
            kind: z.ZodLiteral<"store_time_in_half_open_interval">;
            notBefore: z.ZodString;
            notAfter: z.ZodString;
        }, z.core.$strict>>;
        outcome: z.ZodEnum<{
            review_required: "review_required";
            proof_gap: "proof_gap";
            refuse: "refuse";
            quarantine: "quarantine";
            greenlight: "greenlight";
            halt: "halt";
        }>;
        decision: z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>;
        greenlight: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        refusal: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        proofGap: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        protocolRecords: z.ZodArray<z.ZodObject<{
            role: z.ZodEnum<{
                refusal: "refusal";
                proof_gap: "proof_gap";
                greenlight: "greenlight";
                policy_decision: "policy_decision";
                request_context: "request_context";
            }>;
            objectType: z.ZodEnum<{
                refusal: "refusal";
                proof_gap: "proof_gap";
                greenlight: "greenlight";
                transition_request_context: "transition_request_context";
                policy_decision: "policy_decision";
            }>;
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
            envelopeDigest: z.ZodString;
        }, z.core.$strict>>;
        eventDescriptorDigests: z.ZodArray<z.ZodString>;
        eventProjectionBindingDigests: z.ZodArray<z.ZodString>;
        protocolRecordProjectionProfile: z.ZodType<Readonly<{
            descriptorVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DESCRIPTOR_VERSION;
            deliveryPolicy: Readonly<{
                policyVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DELIVERY_POLICY_VERSION;
                maxAttempts: 16;
                maxLeaseTicks: 10000;
            }>;
            route: Readonly<{
                routeVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_ROUTE_VERSION;
                authoritySourceNamespace: "handshake-policy-authority-source";
                destinationNamespace: "handshake-protocol-read-model";
                configurationDigest: `sha256:${string}`;
            }>;
        }>, unknown, z.core.$ZodTypeInternals<Readonly<{
            descriptorVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DESCRIPTOR_VERSION;
            deliveryPolicy: Readonly<{
                policyVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_DELIVERY_POLICY_VERSION;
                maxAttempts: 16;
                maxLeaseTicks: 10000;
            }>;
            route: Readonly<{
                routeVersion: typeof POLICY_ADMISSION_CODEC2_PROTOCOL_RECORD_ROUTE_VERSION;
                authoritySourceNamespace: "handshake-policy-authority-source";
                destinationNamespace: "handshake-protocol-read-model";
                configurationDigest: `sha256:${string}`;
            }>;
        }>, unknown>>;
        protocolRecordProjectionProfileDigest: z.ZodString;
    }, z.core.$strict>;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyDecisionId: z.ZodString;
    policyInputDigest: z.ZodString;
    aggregateSnapshotDigest: z.ZodString;
    isolationSnapshotDigest: z.ZodString;
    aggregatePosture: z.ZodEnum<{
        required: "required";
        missing: "missing";
        not_applicable: "not_applicable";
    }>;
    outcome: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    greenlightId: z.ZodNullable<z.ZodString>;
    refusalId: z.ZodNullable<z.ZodString>;
    proofGapId: z.ZodNullable<z.ZodString>;
    protocolRecords: z.ZodArray<z.ZodObject<{
        objectId: z.ZodString;
        objectType: z.ZodEnum<{
            refusal: "refusal";
            proof_gap: "proof_gap";
            greenlight: "greenlight";
            transition_request_context: "transition_request_context";
            policy_decision: "policy_decision";
        }>;
        tenantId: z.ZodString;
        organizationId: z.ZodString;
        schemaVersion: z.ZodString;
        canonicalDigest: z.ZodString;
        payload: z.ZodType<import("../../types").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../types").JsonValue, unknown>>;
        createdAt: z.ZodString;
        sourceEventId: z.ZodNull;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    policyAdmissionOutcomeSourceVersion: z.ZodLiteral<"policy-admission-outcome-source-3">;
    attemptDigest: z.ZodString;
    transactionDigest: z.ZodString;
    transactionBinding: z.ZodObject<{
        policyAdmissionTransactionBindingVersion: z.ZodLiteral<"policy-admission-transaction-binding-3">;
        logicalAttempt: z.ZodObject<{
            policyAdmissionAttemptVersion: z.ZodLiteral<"policy-admission-attempt-2">;
            sourceScope: z.ZodObject<{
                tenantId: z.ZodString;
                organizationId: z.ZodString;
            }, z.core.$strict>;
            actionContract: z.ZodObject<{
                objectId: z.ZodString;
                canonicalDigest: z.ZodString;
                actionContractDigest: z.ZodString;
            }, z.core.$strict>;
            envelope: z.ZodObject<{
                objectId: z.ZodString;
                canonicalDigest: z.ZodString;
            }, z.core.$strict>;
            policyEvaluator: z.ZodObject<{
                ref: z.ZodString;
                digest: z.ZodString;
            }, z.core.$strict>;
            request: z.ZodObject<{
                actionContractId: z.ZodString;
                envelopeId: z.ZodString;
                policyEvaluatorVersion: z.ZodString;
                requiredTypedCommitmentRefs: z.ZodArray<z.ZodString>;
                requiredTypedCommitmentSetDigest: z.ZodNullable<z.ZodString>;
                typedCommitments: z.ZodArray<z.ZodObject<{
                    typedActionCommitmentId: z.ZodString;
                    commitmentDigest: z.ZodString;
                    subjectDigest: z.ZodString;
                    purpose: z.ZodEnum<{
                        external_commitment_evidence: "external_commitment_evidence";
                        policy_required_evidence: "policy_required_evidence";
                        service_workflow_readback: "service_workflow_readback";
                        post_gateway_payment_evidence: "post_gateway_payment_evidence";
                        display_binding_evidence: "display_binding_evidence";
                    }>;
                    profile: z.ZodEnum<{
                        handshake_jcs_typed: "handshake_jcs_typed";
                        eip712: "eip712";
                    }>;
                    verificationStatus: z.ZodEnum<{
                        unverified: "unverified";
                        proof_gap: "proof_gap";
                        verified: "verified";
                        refused: "refused";
                        unsupported: "unsupported";
                    }>;
                    replayStatus: z.ZodEnum<{
                        stale: "stale";
                        fresh: "fresh";
                        replayed: "replayed";
                        missing: "missing";
                        not_applicable: "not_applicable";
                    }>;
                    verifierContextDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
                    safetyPosture: z.ZodEnum<{
                        proof_gap: "proof_gap";
                        refused: "refused";
                        display_bound: "display_bound";
                        digest_bound: "digest_bound";
                        verifier_bound: "verifier_bound";
                        provider_observed: "provider_observed";
                    }>;
                }, z.core.$strict>>;
                reviewDecisionId: z.ZodNullable<z.ZodString>;
            }, z.core.$strict>;
        }, z.core.$strict>;
        logicalAttemptDigest: z.ZodString;
        actionContractId: z.ZodString;
        actionContractDigest: z.ZodString;
        policyInput: z.ZodType<import("../../types").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../types").JsonValue, unknown>>;
        policyInputDigest: z.ZodString;
        aggregateSnapshot: z.ZodType<import("../snapshot").AggregateAdmissionSnapshot, unknown, z.core.$ZodTypeInternals<import("../snapshot").AggregateAdmissionSnapshot, unknown>>;
        aggregateSnapshotDigest: z.ZodString;
        isolationSnapshotDigest: z.ZodString;
        aggregatePosture: z.ZodEnum<{
            required: "required";
            missing: "missing";
            not_applicable: "not_applicable";
        }>;
        pointerGuardSetDigest: z.ZodString;
        pointerGuards: z.ZodArray<z.ZodObject<{
            pointer: z.ZodObject<{
                pointerKind: z.ZodEnum<{
                    isolation_state: "isolation_state";
                    effect_lineage: "effect_lineage";
                    effect_observation: "effect_observation";
                    idempotency_claim: "idempotency_claim";
                    operation_claim: "operation_claim";
                    authority_context: "authority_context";
                    configuration_state: "configuration_state";
                    aggregate_authority: "aggregate_authority";
                    access_lease: "access_lease";
                    access_usage: "access_usage";
                    projection_delivery: "projection_delivery";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            expected: z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"absent">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"exact">;
                witness: z.ZodObject<{
                    record: z.ZodObject<{
                        recordKind: z.ZodEnum<{
                            authority_state: "authority_state";
                            authority_evidence: "authority_evidence";
                            authority_binding: "authority_binding";
                            projection_state: "projection_state";
                        }>;
                        localId: z.ZodString;
                    }, z.core.$strict>;
                    semanticState: z.ZodString;
                    version: z.ZodNumber;
                    digest: z.ZodString;
                }, z.core.$strict>;
            }, z.core.$strict>], "kind">;
        }, z.core.$strict>>;
        temporalFence: z.ZodNullable<z.ZodObject<{
            kind: z.ZodLiteral<"store_time_in_half_open_interval">;
            notBefore: z.ZodString;
            notAfter: z.ZodString;
        }, z.core.$strict>>;
        outcome: z.ZodEnum<{
            review_required: "review_required";
            proof_gap: "proof_gap";
            refuse: "refuse";
            quarantine: "quarantine";
            greenlight: "greenlight";
            halt: "halt";
        }>;
        decision: z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>;
        greenlight: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        refusal: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        proofGap: z.ZodNullable<z.ZodObject<{
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
        }, z.core.$strict>>;
        embeddedRecordWitnesses: z.ZodArray<z.ZodObject<{
            role: z.ZodEnum<{
                refusal: "refusal";
                proof_gap: "proof_gap";
                greenlight: "greenlight";
                policy_decision: "policy_decision";
                request_context: "request_context";
            }>;
            objectType: z.ZodEnum<{
                refusal: "refusal";
                proof_gap: "proof_gap";
                greenlight: "greenlight";
                transition_request_context: "transition_request_context";
                policy_decision: "policy_decision";
            }>;
            objectId: z.ZodString;
            canonicalDigest: z.ZodString;
            envelopeDigest: z.ZodString;
        }, z.core.$strict>>;
        projectionDisposition: z.ZodDiscriminatedUnion<[z.ZodObject<{
            policyAdmissionProjectionDispositionVersion: z.ZodLiteral<"policy-admission-projection-disposition-1">;
            kind: z.ZodLiteral<"none">;
            reason: z.ZodEnum<{
                review_required: "review_required";
                proof_gap: "proof_gap";
                greenlight: "greenlight";
            }>;
            projectionIntentCount: z.ZodLiteral<0>;
            materializationPosture: z.ZodLiteral<"not_requested">;
        }, z.core.$strict>, z.ZodObject<{
            policyAdmissionProjectionDispositionVersion: z.ZodLiteral<"policy-admission-projection-disposition-1">;
            kind: z.ZodLiteral<"exact_refusal_protocol_record_v2">;
            projectionIntentCount: z.ZodLiteral<1>;
            materializationPosture: z.ZodLiteral<"intent_only_uncomposed">;
            intentDescriptorBinding: z.ZodObject<{
                descriptorVersion: z.ZodLiteral<"authority-projection-outbox-protocol-record-descriptor-2">;
                route: z.ZodObject<{
                    routeVersion: z.ZodLiteral<"authority-projection-outbox-protocol-record-route-2">;
                    authoritySourceNamespace: z.ZodLiteral<"handshake-policy-authority-source">;
                    destinationNamespace: z.ZodLiteral<"handshake-protocol-read-model">;
                    configurationDigest: z.ZodString;
                }, z.core.$strict>;
                destination: z.ZodObject<{
                    objectType: z.ZodLiteral<"refusal">;
                    objectId: z.ZodString;
                    tenantId: z.ZodString;
                    organizationId: z.ZodString;
                    schemaVersion: z.ZodString;
                    canonicalPayloadDigest: z.ZodString;
                }, z.core.$strict>;
                recordEnvelopeDigest: z.ZodString;
            }, z.core.$strict>;
        }, z.core.$strict>], "kind">;
    }, z.core.$strict>;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyDecisionId: z.ZodString;
    policyInputDigest: z.ZodString;
    aggregateSnapshotDigest: z.ZodString;
    isolationSnapshotDigest: z.ZodString;
    aggregatePosture: z.ZodEnum<{
        required: "required";
        missing: "missing";
        not_applicable: "not_applicable";
    }>;
    outcome: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    greenlightId: z.ZodNullable<z.ZodString>;
    refusalId: z.ZodNullable<z.ZodString>;
    proofGapId: z.ZodNullable<z.ZodString>;
    embeddedProtocolRecords: z.ZodArray<z.ZodObject<{
        objectId: z.ZodString;
        objectType: z.ZodEnum<{
            refusal: "refusal";
            proof_gap: "proof_gap";
            greenlight: "greenlight";
            transition_request_context: "transition_request_context";
            policy_decision: "policy_decision";
        }>;
        tenantId: z.ZodString;
        organizationId: z.ZodString;
        schemaVersion: z.ZodString;
        canonicalDigest: z.ZodString;
        payload: z.ZodType<import("../../types").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../types").JsonValue, unknown>>;
        createdAt: z.ZodString;
        sourceEventId: z.ZodNull;
    }, z.core.$strict>>;
}, z.core.$strict>], "policyAdmissionOutcomeSourceVersion">;
export type PolicyAdmissionOutcomeSourcePayload = z.infer<typeof PolicyAdmissionOutcomeSourcePayloadDiscriminatorSchema>;
export declare const GreenlightIssuanceSourcePayloadSchema: z.ZodObject<{
    greenlightIssuanceSourceVersion: z.ZodLiteral<"greenlight-issuance-source-1">;
    attemptDigest: z.ZodString;
    transactionDigest: z.ZodString;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyDecisionId: z.ZodString;
    policyInputDigest: z.ZodString;
    greenlightId: z.ZodString;
    maxUses: z.ZodLiteral<1>;
    expiresAt: z.ZodString;
}, z.core.$strict>;
export declare const PolicyIdempotencyClaimSourcePayloadSchema: z.ZodObject<{
    policyIdempotencyClaimSourceVersion: z.ZodLiteral<"policy-idempotency-claim-source-1">;
    attemptDigest: z.ZodString;
    transactionDigest: z.ZodString;
    ledgerKeyDigest: z.ZodString;
    idempotencyKey: z.ZodString;
    paramsDigest: z.ZodString;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyDecisionId: z.ZodString;
    greenlightId: z.ZodString;
    state: z.ZodLiteral<"authority_reserved">;
}, z.core.$strict>;
export {};
