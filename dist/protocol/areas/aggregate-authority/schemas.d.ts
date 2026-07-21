import { z } from "zod";
import type { AuthorityPointerMutation, AuthoritySourceRecord, AuthoritySourceScope } from "../../store/authority-source";
export declare const ACTION_COUNT_QUANTITY_MAX_DIGITS = 1000;
export declare const AGGREGATE_RESERVATION_ANALYSIS_MAX_ITEMS = 1000;
export declare const AggregateAuthorityReferenceSchema: z.ZodString;
export type AggregateAuthorityReference = z.infer<typeof AggregateAuthorityReferenceSchema>;
export declare const ActionCountQuantitySchema: z.ZodString;
export type ActionCountQuantity = z.infer<typeof ActionCountQuantitySchema>;
export declare const ActionFamilyAggregatePostureSchema: z.ZodEnum<{
    required: "required";
    not_applicable: "not_applicable";
}>;
export type ActionFamilyAggregatePosture = z.infer<typeof ActionFamilyAggregatePostureSchema>;
export declare const AggregateActionFamilyIdentitySchema: z.ZodObject<{
    actionTypeRef: z.ZodString;
}, z.core.$strict>;
export type AggregateActionFamilyIdentity = z.infer<typeof AggregateActionFamilyIdentitySchema>;
export declare const AggregateActionFamilyArtifactSchema: z.ZodObject<{
    identity: z.ZodObject<{
        actionTypeRef: z.ZodString;
    }, z.core.$strict>;
    familyDigest: z.ZodString;
}, z.core.$strict>;
export type AggregateActionFamilyArtifact = z.infer<typeof AggregateActionFamilyArtifactSchema>;
export declare const AggregateAuthorityLocatorSchema: z.ZodObject<{
    aggregateProfileAuthorityRef: z.ZodString;
    tenantAuthorityRef: z.ZodString;
    organizationAuthorityRef: z.ZodString;
    aggregateScopeAuthorityRef: z.ZodString;
}, z.core.$strict>;
export type AggregateAuthorityLocator = z.infer<typeof AggregateAuthorityLocatorSchema>;
export declare const CanonicalUtcMillisecondInstantSchema: z.ZodString;
export type CanonicalUtcMillisecondInstant = z.infer<typeof CanonicalUtcMillisecondInstantSchema>;
export declare const AggregateAuthorityWindowSchema: z.ZodObject<{
    startsAt: z.ZodString;
    endsAt: z.ZodString;
}, z.core.$strict>;
export type AggregateAuthorityWindow = z.infer<typeof AggregateAuthorityWindowSchema>;
export declare const AggregateAuthorityWindowRelationSchema: z.ZodEnum<{
    before_start: "before_start";
    inside_window: "inside_window";
    at_or_after_end: "at_or_after_end";
}>;
export type AggregateAuthorityWindowRelation = z.infer<typeof AggregateAuthorityWindowRelationSchema>;
export declare const AggregateAllowedGatewaySchema: z.ZodObject<{
    gatewayAuthorityRef: z.ZodString;
    gatewayVersion: z.ZodString;
}, z.core.$strict>;
export type AggregateAllowedGateway = z.infer<typeof AggregateAllowedGatewaySchema>;
export declare const AggregateAuthorityBindingInputSchema: z.ZodObject<{
    principalAuthorityRef: z.ZodString;
    aggregateScopeDigest: z.ZodString;
    actionTypeRef: z.ZodString;
    actionTypeDigest: z.ZodString;
    actionClass: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    canonicalProtectedResourceScope: z.ZodString;
    allowedGateways: z.ZodArray<z.ZodObject<{
        gatewayAuthorityRef: z.ZodString;
        gatewayVersion: z.ZodString;
    }, z.core.$strict>>;
    exposureUnit: z.ZodLiteral<"action_count">;
    limitQuantity: z.ZodString;
    window: z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
    }, z.core.$strict>;
    policyAuthorityRef: z.ZodString;
    policyDigest: z.ZodString;
    policyEvaluatorRef: z.ZodString;
    policyEvaluatorDigest: z.ZodString;
    policyVersionRef: z.ZodString;
    policyVersionDigest: z.ZodString;
    readinessRef: z.ZodString;
    readinessDigest: z.ZodString;
    handlerAuthorityRef: z.ZodString;
    handlerVersion: z.ZodString;
    canonicalizerAuthorityRef: z.ZodString;
    canonicalizerVersion: z.ZodString;
}, z.core.$strict>;
export type AggregateAuthorityBindingInput = z.infer<typeof AggregateAuthorityBindingInputSchema>;
export declare const AggregateAuthorityBindingSchema: z.ZodObject<{
    principalAuthorityRef: z.ZodString;
    aggregateScopeDigest: z.ZodString;
    actionTypeRef: z.ZodString;
    actionTypeDigest: z.ZodString;
    actionClass: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    canonicalProtectedResourceScope: z.ZodString;
    allowedGateways: z.ZodArray<z.ZodObject<{
        gatewayAuthorityRef: z.ZodString;
        gatewayVersion: z.ZodString;
    }, z.core.$strict>>;
    exposureUnit: z.ZodLiteral<"action_count">;
    limitQuantity: z.ZodString;
    window: z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
    }, z.core.$strict>;
    policyAuthorityRef: z.ZodString;
    policyDigest: z.ZodString;
    policyEvaluatorRef: z.ZodString;
    policyEvaluatorDigest: z.ZodString;
    policyVersionRef: z.ZodString;
    policyVersionDigest: z.ZodString;
    readinessRef: z.ZodString;
    readinessDigest: z.ZodString;
    handlerAuthorityRef: z.ZodString;
    handlerVersion: z.ZodString;
    canonicalizerAuthorityRef: z.ZodString;
    canonicalizerVersion: z.ZodString;
    locatorDigest: z.ZodString;
}, z.core.$strict>;
export type AggregateAuthorityBinding = z.infer<typeof AggregateAuthorityBindingSchema>;
export declare const AggregateAuthorityBindingBuildInputSchema: z.ZodObject<{
    locator: z.ZodObject<{
        aggregateProfileAuthorityRef: z.ZodString;
        tenantAuthorityRef: z.ZodString;
        organizationAuthorityRef: z.ZodString;
        aggregateScopeAuthorityRef: z.ZodString;
    }, z.core.$strict>;
    binding: z.ZodObject<{
        principalAuthorityRef: z.ZodString;
        aggregateScopeDigest: z.ZodString;
        actionTypeRef: z.ZodString;
        actionTypeDigest: z.ZodString;
        actionClass: z.ZodString;
        protectedSurfaceKind: z.ZodString;
        canonicalProtectedResourceScope: z.ZodString;
        allowedGateways: z.ZodArray<z.ZodObject<{
            gatewayAuthorityRef: z.ZodString;
            gatewayVersion: z.ZodString;
        }, z.core.$strict>>;
        exposureUnit: z.ZodLiteral<"action_count">;
        limitQuantity: z.ZodString;
        window: z.ZodObject<{
            startsAt: z.ZodString;
            endsAt: z.ZodString;
        }, z.core.$strict>;
        policyAuthorityRef: z.ZodString;
        policyDigest: z.ZodString;
        policyEvaluatorRef: z.ZodString;
        policyEvaluatorDigest: z.ZodString;
        policyVersionRef: z.ZodString;
        policyVersionDigest: z.ZodString;
        readinessRef: z.ZodString;
        readinessDigest: z.ZodString;
        handlerAuthorityRef: z.ZodString;
        handlerVersion: z.ZodString;
        canonicalizerAuthorityRef: z.ZodString;
        canonicalizerVersion: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AggregateAuthorityBindingBuildInput = z.infer<typeof AggregateAuthorityBindingBuildInputSchema>;
export declare const AggregateAuthorityLocatorArtifactSchema: z.ZodObject<{
    locator: z.ZodObject<{
        aggregateProfileAuthorityRef: z.ZodString;
        tenantAuthorityRef: z.ZodString;
        organizationAuthorityRef: z.ZodString;
        aggregateScopeAuthorityRef: z.ZodString;
    }, z.core.$strict>;
    locatorDigest: z.ZodString;
}, z.core.$strict>;
export type AggregateAuthorityLocatorArtifact = z.infer<typeof AggregateAuthorityLocatorArtifactSchema>;
export declare const AggregateAuthorityDomainBuildInputSchema: z.ZodObject<{
    locatorDigest: z.ZodString;
    family: z.ZodObject<{
        actionTypeRef: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AggregateAuthorityDomainBuildInput = z.infer<typeof AggregateAuthorityDomainBuildInputSchema>;
export declare const AggregateAuthorityDomainArtifactSchema: z.ZodObject<{
    locatorDigest: z.ZodString;
    family: z.ZodObject<{
        actionTypeRef: z.ZodString;
    }, z.core.$strict>;
    familyDigest: z.ZodString;
    domainDigest: z.ZodString;
}, z.core.$strict>;
export type AggregateAuthorityDomainArtifact = z.infer<typeof AggregateAuthorityDomainArtifactSchema>;
export declare const AggregateAuthorityBindingArtifactSchema: z.ZodObject<{
    locator: z.ZodObject<{
        aggregateProfileAuthorityRef: z.ZodString;
        tenantAuthorityRef: z.ZodString;
        organizationAuthorityRef: z.ZodString;
        aggregateScopeAuthorityRef: z.ZodString;
    }, z.core.$strict>;
    locatorDigest: z.ZodString;
    binding: z.ZodObject<{
        principalAuthorityRef: z.ZodString;
        aggregateScopeDigest: z.ZodString;
        actionTypeRef: z.ZodString;
        actionTypeDigest: z.ZodString;
        actionClass: z.ZodString;
        protectedSurfaceKind: z.ZodString;
        canonicalProtectedResourceScope: z.ZodString;
        allowedGateways: z.ZodArray<z.ZodObject<{
            gatewayAuthorityRef: z.ZodString;
            gatewayVersion: z.ZodString;
        }, z.core.$strict>>;
        exposureUnit: z.ZodLiteral<"action_count">;
        limitQuantity: z.ZodString;
        window: z.ZodObject<{
            startsAt: z.ZodString;
            endsAt: z.ZodString;
        }, z.core.$strict>;
        policyAuthorityRef: z.ZodString;
        policyDigest: z.ZodString;
        policyEvaluatorRef: z.ZodString;
        policyEvaluatorDigest: z.ZodString;
        policyVersionRef: z.ZodString;
        policyVersionDigest: z.ZodString;
        readinessRef: z.ZodString;
        readinessDigest: z.ZodString;
        handlerAuthorityRef: z.ZodString;
        handlerVersion: z.ZodString;
        canonicalizerAuthorityRef: z.ZodString;
        canonicalizerVersion: z.ZodString;
        locatorDigest: z.ZodString;
    }, z.core.$strict>;
    bindingDigest: z.ZodString;
}, z.core.$strict>;
export type AggregateAuthorityBindingArtifact = z.infer<typeof AggregateAuthorityBindingArtifactSchema>;
export declare const AggregateExposureReservationStateSchema: z.ZodEnum<{
    authority_reserved: "authority_reserved";
    blocked_unknown: "blocked_unknown";
    effect_in_flight: "effect_in_flight";
    released_confirmed_not_committed: "released_confirmed_not_committed";
    terminal_committed: "terminal_committed";
}>;
export type AggregateExposureReservationState = z.infer<typeof AggregateExposureReservationStateSchema>;
export declare const AggregateReservationStateEdgeClassificationSchema: z.ZodObject<{
    classification: z.ZodEnum<{
        same_state_only: "same_state_only";
        non_restorative_edge: "non_restorative_edge";
        restorative_edge_requires_authenticated_noncommitment: "restorative_edge_requires_authenticated_noncommitment";
    }>;
    authority: z.ZodLiteral<"none">;
}, z.core.$strict>;
export type AggregateReservationStateEdgeClassification = z.infer<typeof AggregateReservationStateEdgeClassificationSchema>;
export declare const AggregateReservationLineageOriginSchema: z.ZodObject<{
    locatorDigest: z.ZodString;
    bindingDigest: z.ZodString;
    quantity: z.ZodLiteral<"1">;
    actionContractDigest: z.ZodString;
    owningGreenlightRef: z.ZodString;
    originMutationRef: z.ZodString;
}, z.core.$strict>;
export type AggregateReservationLineageOrigin = z.infer<typeof AggregateReservationLineageOriginSchema>;
export declare const AggregateReservationLineageCandidateSchema: z.ZodObject<{
    origin: z.ZodObject<{
        locatorDigest: z.ZodString;
        bindingDigest: z.ZodString;
        quantity: z.ZodLiteral<"1">;
        actionContractDigest: z.ZodString;
        owningGreenlightRef: z.ZodString;
        originMutationRef: z.ZodString;
    }, z.core.$strict>;
    lineageDigest: z.ZodString;
    reservationRef: z.ZodString;
    authority: z.ZodLiteral<"none">;
}, z.core.$strict>;
export type AggregateReservationLineageCandidate = z.infer<typeof AggregateReservationLineageCandidateSchema>;
export declare const AggregateAuthoritySourceWitnessSchema: z.ZodObject<{
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
export type AggregateAuthoritySourceWitness = z.infer<typeof AggregateAuthoritySourceWitnessSchema>;
export declare const AggregateReservationPredecessorWitnessSchema: z.ZodObject<{
    record: z.ZodObject<{
        recordKind: z.ZodEnum<{
            authority_state: "authority_state";
            authority_evidence: "authority_evidence";
            authority_binding: "authority_binding";
            projection_state: "projection_state";
        }>;
        localId: z.ZodString;
    }, z.core.$strict>;
    version: z.ZodNumber;
    digest: z.ZodString;
    semanticState: z.ZodEnum<{
        authority_reserved: "authority_reserved";
        blocked_unknown: "blocked_unknown";
        effect_in_flight: "effect_in_flight";
        released_confirmed_not_committed: "released_confirmed_not_committed";
        terminal_committed: "terminal_committed";
    }>;
}, z.core.$strict>;
export type AggregateReservationPredecessorWitness = z.infer<typeof AggregateReservationPredecessorWitnessSchema>;
export declare const AggregateNonRestorativeStateCandidateInputSchema: z.ZodObject<{
    lineage: z.ZodObject<{
        origin: z.ZodObject<{
            locatorDigest: z.ZodString;
            bindingDigest: z.ZodString;
            quantity: z.ZodLiteral<"1">;
            actionContractDigest: z.ZodString;
            owningGreenlightRef: z.ZodString;
            originMutationRef: z.ZodString;
        }, z.core.$strict>;
        lineageDigest: z.ZodString;
        reservationRef: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
    state: z.ZodEnum<{
        authority_reserved: "authority_reserved";
        blocked_unknown: "blocked_unknown";
        effect_in_flight: "effect_in_flight";
        released_confirmed_not_committed: "released_confirmed_not_committed";
        terminal_committed: "terminal_committed";
    }>;
    predecessor: z.ZodNullable<z.ZodObject<{
        record: z.ZodObject<{
            recordKind: z.ZodEnum<{
                authority_state: "authority_state";
                authority_evidence: "authority_evidence";
                authority_binding: "authority_binding";
                projection_state: "projection_state";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        version: z.ZodNumber;
        digest: z.ZodString;
        semanticState: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
    }, z.core.$strict>>;
    transitionMutationRef: z.ZodString;
}, z.core.$strict>;
export type AggregateNonRestorativeStateCandidateInput = z.infer<typeof AggregateNonRestorativeStateCandidateInputSchema>;
export declare const AggregateNonRestorativeStateCandidateSchema: z.ZodObject<{
    lineage: z.ZodObject<{
        origin: z.ZodObject<{
            locatorDigest: z.ZodString;
            bindingDigest: z.ZodString;
            quantity: z.ZodLiteral<"1">;
            actionContractDigest: z.ZodString;
            owningGreenlightRef: z.ZodString;
            originMutationRef: z.ZodString;
        }, z.core.$strict>;
        lineageDigest: z.ZodString;
        reservationRef: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
    state: z.ZodEnum<{
        authority_reserved: "authority_reserved";
        blocked_unknown: "blocked_unknown";
        effect_in_flight: "effect_in_flight";
        released_confirmed_not_committed: "released_confirmed_not_committed";
        terminal_committed: "terminal_committed";
    }>;
    predecessor: z.ZodNullable<z.ZodObject<{
        record: z.ZodObject<{
            recordKind: z.ZodEnum<{
                authority_state: "authority_state";
                authority_evidence: "authority_evidence";
                authority_binding: "authority_binding";
                projection_state: "projection_state";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        version: z.ZodNumber;
        digest: z.ZodString;
        semanticState: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
    }, z.core.$strict>>;
    transitionMutationRef: z.ZodString;
    candidateDigest: z.ZodString;
    authority: z.ZodLiteral<"none">;
}, z.core.$strict>;
export type AggregateNonRestorativeStateCandidate = z.infer<typeof AggregateNonRestorativeStateCandidateSchema>;
export declare const AggregateReservationStateSourcePayloadSchema: z.ZodObject<{
    aggregateReservationStateSourceVersion: z.ZodLiteral<"aggregate-reservation-state-source-1">;
    stateCandidate: z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
        predecessor: z.ZodNullable<z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>>;
        transitionMutationRef: z.ZodString;
        candidateDigest: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AggregateReservationStateSourcePayload = z.infer<typeof AggregateReservationStateSourcePayloadSchema>;
export declare const AggregateExposureReservationSnapshotSchema: z.ZodObject<{
    lineage: z.ZodObject<{
        origin: z.ZodObject<{
            locatorDigest: z.ZodString;
            bindingDigest: z.ZodString;
            quantity: z.ZodLiteral<"1">;
            actionContractDigest: z.ZodString;
            owningGreenlightRef: z.ZodString;
            originMutationRef: z.ZodString;
        }, z.core.$strict>;
        lineageDigest: z.ZodString;
        reservationRef: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
    state: z.ZodEnum<{
        authority_reserved: "authority_reserved";
        blocked_unknown: "blocked_unknown";
        effect_in_flight: "effect_in_flight";
        released_confirmed_not_committed: "released_confirmed_not_committed";
        terminal_committed: "terminal_committed";
    }>;
    sourceWitness: z.ZodObject<{
        record: z.ZodObject<{
            recordKind: z.ZodEnum<{
                authority_state: "authority_state";
                authority_evidence: "authority_evidence";
                authority_binding: "authority_binding";
                projection_state: "projection_state";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        version: z.ZodNumber;
        digest: z.ZodString;
        semanticState: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AggregateExposureReservationSnapshot = z.infer<typeof AggregateExposureReservationSnapshotSchema>;
export declare const AggregateConservationDerivationInputSchema: z.ZodObject<{
    locatorDigest: z.ZodString;
    bindingDigest: z.ZodString;
    limitQuantity: z.ZodString;
    reservations: z.ZodArray<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>>;
    predecessorEncumbrances: z.ZodArray<z.ZodLazy<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
        quantity: z.ZodLiteral<"1">;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type AggregateConservationDerivationInput = z.infer<typeof AggregateConservationDerivationInputSchema>;
export declare const AggregateReservationStateQuantitiesSchema: z.ZodObject<{
    authority_reserved: z.ZodString;
    effect_in_flight: z.ZodString;
    blocked_unknown: z.ZodString;
    released_confirmed_not_committed: z.ZodString;
    terminal_committed: z.ZodString;
}, z.core.$strict>;
export type AggregateReservationStateQuantities = z.infer<typeof AggregateReservationStateQuantitiesSchema>;
export declare const AggregateAvailabilitySchema: z.ZodEnum<{
    none: "none";
    available: "available";
    blocked_over_limit: "blocked_over_limit";
}>;
export type AggregateAvailability = z.infer<typeof AggregateAvailabilitySchema>;
export declare const AggregateConservationSnapshotSchema: z.ZodObject<{
    locatorDigest: z.ZodString;
    bindingDigest: z.ZodString;
    limitQuantity: z.ZodString;
    reservationLineageDigests: z.ZodArray<z.ZodString>;
    predecessorEncumbranceLineageDigests: z.ZodArray<z.ZodString>;
    stateQuantities: z.ZodObject<{
        authority_reserved: z.ZodString;
        effect_in_flight: z.ZodString;
        blocked_unknown: z.ZodString;
        released_confirmed_not_committed: z.ZodString;
        terminal_committed: z.ZodString;
    }, z.core.$strict>;
    encumberedQuantity: z.ZodString;
    releasedQuantity: z.ZodString;
    availableQuantity: z.ZodString;
    overLimitQuantity: z.ZodString;
    availability: z.ZodEnum<{
        none: "none";
        available: "available";
        blocked_over_limit: "blocked_over_limit";
    }>;
    lineageSetDigest: z.ZodString;
    snapshotDigest: z.ZodString;
    authority: z.ZodLiteral<"none">;
}, z.core.$strict>;
export type AggregateConservationSnapshot = z.infer<typeof AggregateConservationSnapshotSchema>;
export declare const AggregateConservationValidationInputSchema: z.ZodObject<{
    snapshot: z.ZodObject<{
        locatorDigest: z.ZodString;
        bindingDigest: z.ZodString;
        limitQuantity: z.ZodString;
        reservationLineageDigests: z.ZodArray<z.ZodString>;
        predecessorEncumbranceLineageDigests: z.ZodArray<z.ZodString>;
        stateQuantities: z.ZodObject<{
            authority_reserved: z.ZodString;
            effect_in_flight: z.ZodString;
            blocked_unknown: z.ZodString;
            released_confirmed_not_committed: z.ZodString;
            terminal_committed: z.ZodString;
        }, z.core.$strict>;
        encumberedQuantity: z.ZodString;
        releasedQuantity: z.ZodString;
        availableQuantity: z.ZodString;
        overLimitQuantity: z.ZodString;
        availability: z.ZodEnum<{
            none: "none";
            available: "available";
            blocked_over_limit: "blocked_over_limit";
        }>;
        lineageSetDigest: z.ZodString;
        snapshotDigest: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
    reservations: z.ZodArray<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>>;
    predecessorEncumbrances: z.ZodArray<z.ZodLazy<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
        quantity: z.ZodLiteral<"1">;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type AggregateConservationValidationInput = z.infer<typeof AggregateConservationValidationInputSchema>;
export declare const AggregateConservationValidationSchema: z.ZodObject<{
    matches: z.ZodLiteral<true>;
    authority: z.ZodLiteral<"none">;
}, z.core.$strict>;
export type AggregateConservationValidation = z.infer<typeof AggregateConservationValidationSchema>;
export declare const AggregateRolloverCarryStateSchema: z.ZodEnum<{
    authority_reserved: "authority_reserved";
    blocked_unknown: "blocked_unknown";
    effect_in_flight: "effect_in_flight";
}>;
export type AggregateRolloverCarryState = z.infer<typeof AggregateRolloverCarryStateSchema>;
export declare const AggregateRolloverCarryEntrySchema: z.ZodObject<{
    lineage: z.ZodObject<{
        origin: z.ZodObject<{
            locatorDigest: z.ZodString;
            bindingDigest: z.ZodString;
            quantity: z.ZodLiteral<"1">;
            actionContractDigest: z.ZodString;
            owningGreenlightRef: z.ZodString;
            originMutationRef: z.ZodString;
        }, z.core.$strict>;
        lineageDigest: z.ZodString;
        reservationRef: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
    state: z.ZodEnum<{
        authority_reserved: "authority_reserved";
        blocked_unknown: "blocked_unknown";
        effect_in_flight: "effect_in_flight";
    }>;
    sourceWitness: z.ZodObject<{
        record: z.ZodObject<{
            recordKind: z.ZodEnum<{
                authority_state: "authority_state";
                authority_evidence: "authority_evidence";
                authority_binding: "authority_binding";
                projection_state: "projection_state";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        version: z.ZodNumber;
        digest: z.ZodString;
        semanticState: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
    }, z.core.$strict>;
    quantity: z.ZodLiteral<"1">;
}, z.core.$strict>;
export type AggregateRolloverCarryEntry = z.infer<typeof AggregateRolloverCarryEntrySchema>;
export declare const AggregateRolloverNonCarryDispositionSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    lineage: z.ZodObject<{
        origin: z.ZodObject<{
            locatorDigest: z.ZodString;
            bindingDigest: z.ZodString;
            quantity: z.ZodLiteral<"1">;
            actionContractDigest: z.ZodString;
            owningGreenlightRef: z.ZodString;
            originMutationRef: z.ZodString;
        }, z.core.$strict>;
        lineageDigest: z.ZodString;
        reservationRef: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
    state: z.ZodLiteral<"released_confirmed_not_committed">;
    sourceWitness: z.ZodObject<{
        record: z.ZodObject<{
            recordKind: z.ZodEnum<{
                authority_state: "authority_state";
                authority_evidence: "authority_evidence";
                authority_binding: "authority_binding";
                projection_state: "projection_state";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        version: z.ZodNumber;
        digest: z.ZodString;
        semanticState: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
    }, z.core.$strict>;
    disposition: z.ZodLiteral<"released_no_carry">;
}, z.core.$strict>, z.ZodObject<{
    lineage: z.ZodObject<{
        origin: z.ZodObject<{
            locatorDigest: z.ZodString;
            bindingDigest: z.ZodString;
            quantity: z.ZodLiteral<"1">;
            actionContractDigest: z.ZodString;
            owningGreenlightRef: z.ZodString;
            originMutationRef: z.ZodString;
        }, z.core.$strict>;
        lineageDigest: z.ZodString;
        reservationRef: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
    state: z.ZodLiteral<"terminal_committed">;
    sourceWitness: z.ZodObject<{
        record: z.ZodObject<{
            recordKind: z.ZodEnum<{
                authority_state: "authority_state";
                authority_evidence: "authority_evidence";
                authority_binding: "authority_binding";
                projection_state: "projection_state";
            }>;
            localId: z.ZodString;
        }, z.core.$strict>;
        version: z.ZodNumber;
        digest: z.ZodString;
        semanticState: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
    }, z.core.$strict>;
    disposition: z.ZodLiteral<"closed_window_commitment_retained_not_charged_to_successor">;
}, z.core.$strict>], "disposition">;
export type AggregateRolloverNonCarryDisposition = z.infer<typeof AggregateRolloverNonCarryDispositionSchema>;
export declare const AggregateRolloverCandidateInputSchema: z.ZodObject<{
    locatorDigest: z.ZodString;
    predecessorBindingDigest: z.ZodString;
    successorBindingDigest: z.ZodString;
    predecessorWindow: z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
    }, z.core.$strict>;
    successorWindow: z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
    }, z.core.$strict>;
    expectedCurrentFence: z.ZodNullable<z.ZodObject<{
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
    predecessorSnapshot: z.ZodObject<{
        locatorDigest: z.ZodString;
        bindingDigest: z.ZodString;
        limitQuantity: z.ZodString;
        reservationLineageDigests: z.ZodArray<z.ZodString>;
        predecessorEncumbranceLineageDigests: z.ZodArray<z.ZodString>;
        stateQuantities: z.ZodObject<{
            authority_reserved: z.ZodString;
            effect_in_flight: z.ZodString;
            blocked_unknown: z.ZodString;
            released_confirmed_not_committed: z.ZodString;
            terminal_committed: z.ZodString;
        }, z.core.$strict>;
        encumberedQuantity: z.ZodString;
        releasedQuantity: z.ZodString;
        availableQuantity: z.ZodString;
        overLimitQuantity: z.ZodString;
        availability: z.ZodEnum<{
            none: "none";
            available: "available";
            blocked_over_limit: "blocked_over_limit";
        }>;
        lineageSetDigest: z.ZodString;
        snapshotDigest: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
    reservations: z.ZodArray<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>>;
    predecessorEncumbrances: z.ZodArray<z.ZodLazy<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
        quantity: z.ZodLiteral<"1">;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type AggregateRolloverCandidateInput = z.infer<typeof AggregateRolloverCandidateInputSchema>;
export declare const AggregateRolloverCandidateSchema: z.ZodObject<{
    kind: z.ZodLiteral<"non_authoritative_rollover_candidate">;
    authority: z.ZodLiteral<"none">;
    locatorDigest: z.ZodString;
    predecessorBindingDigest: z.ZodString;
    successorBindingDigest: z.ZodString;
    predecessorWindow: z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
    }, z.core.$strict>;
    successorWindow: z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
    }, z.core.$strict>;
    predecessorSnapshotDigest: z.ZodString;
    expectedCurrentFence: z.ZodNullable<z.ZodObject<{
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
    carried: z.ZodArray<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
        quantity: z.ZodLiteral<"1">;
    }, z.core.$strict>>;
    nonCarryDispositions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodLiteral<"released_confirmed_not_committed">;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
        disposition: z.ZodLiteral<"released_no_carry">;
    }, z.core.$strict>, z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodLiteral<"terminal_committed">;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
        disposition: z.ZodLiteral<"closed_window_commitment_retained_not_charged_to_successor">;
    }, z.core.$strict>], "disposition">>;
    carryQuantity: z.ZodString;
    candidateDigest: z.ZodString;
}, z.core.$strict>;
export type AggregateRolloverCandidate = z.infer<typeof AggregateRolloverCandidateSchema>;
export declare const AggregateExposureBucketStateInputSchema: z.ZodObject<{
    bindingArtifact: z.ZodObject<{
        locator: z.ZodObject<{
            aggregateProfileAuthorityRef: z.ZodString;
            tenantAuthorityRef: z.ZodString;
            organizationAuthorityRef: z.ZodString;
            aggregateScopeAuthorityRef: z.ZodString;
        }, z.core.$strict>;
        locatorDigest: z.ZodString;
        binding: z.ZodObject<{
            principalAuthorityRef: z.ZodString;
            aggregateScopeDigest: z.ZodString;
            actionTypeRef: z.ZodString;
            actionTypeDigest: z.ZodString;
            actionClass: z.ZodString;
            protectedSurfaceKind: z.ZodString;
            canonicalProtectedResourceScope: z.ZodString;
            allowedGateways: z.ZodArray<z.ZodObject<{
                gatewayAuthorityRef: z.ZodString;
                gatewayVersion: z.ZodString;
            }, z.core.$strict>>;
            exposureUnit: z.ZodLiteral<"action_count">;
            limitQuantity: z.ZodString;
            window: z.ZodObject<{
                startsAt: z.ZodString;
                endsAt: z.ZodString;
            }, z.core.$strict>;
            policyAuthorityRef: z.ZodString;
            policyDigest: z.ZodString;
            policyEvaluatorRef: z.ZodString;
            policyEvaluatorDigest: z.ZodString;
            policyVersionRef: z.ZodString;
            policyVersionDigest: z.ZodString;
            readinessRef: z.ZodString;
            readinessDigest: z.ZodString;
            handlerAuthorityRef: z.ZodString;
            handlerVersion: z.ZodString;
            canonicalizerAuthorityRef: z.ZodString;
            canonicalizerVersion: z.ZodString;
            locatorDigest: z.ZodString;
        }, z.core.$strict>;
        bindingDigest: z.ZodString;
    }, z.core.$strict>;
    reservations: z.ZodArray<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>>;
    predecessorEncumbrances: z.ZodArray<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
        quantity: z.ZodLiteral<"1">;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type AggregateExposureBucketStateInput = z.infer<typeof AggregateExposureBucketStateInputSchema>;
export declare const AggregateExposureBucketStateSchema: z.ZodObject<{
    locatorDigest: z.ZodString;
    bindingDigest: z.ZodString;
    window: z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
    }, z.core.$strict>;
    limitQuantity: z.ZodString;
    reservations: z.ZodArray<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
            released_confirmed_not_committed: "released_confirmed_not_committed";
            terminal_committed: "terminal_committed";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>>;
    predecessorEncumbrances: z.ZodArray<z.ZodObject<{
        lineage: z.ZodObject<{
            origin: z.ZodObject<{
                locatorDigest: z.ZodString;
                bindingDigest: z.ZodString;
                quantity: z.ZodLiteral<"1">;
                actionContractDigest: z.ZodString;
                owningGreenlightRef: z.ZodString;
                originMutationRef: z.ZodString;
            }, z.core.$strict>;
            lineageDigest: z.ZodString;
            reservationRef: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        state: z.ZodEnum<{
            authority_reserved: "authority_reserved";
            blocked_unknown: "blocked_unknown";
            effect_in_flight: "effect_in_flight";
        }>;
        sourceWitness: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodEnum<{
                    authority_state: "authority_state";
                    authority_evidence: "authority_evidence";
                    authority_binding: "authority_binding";
                    projection_state: "projection_state";
                }>;
                localId: z.ZodString;
            }, z.core.$strict>;
            version: z.ZodNumber;
            digest: z.ZodString;
            semanticState: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
        }, z.core.$strict>;
        quantity: z.ZodLiteral<"1">;
    }, z.core.$strict>>;
    conservation: z.ZodObject<{
        locatorDigest: z.ZodString;
        bindingDigest: z.ZodString;
        limitQuantity: z.ZodString;
        reservationLineageDigests: z.ZodArray<z.ZodString>;
        predecessorEncumbranceLineageDigests: z.ZodArray<z.ZodString>;
        stateQuantities: z.ZodObject<{
            authority_reserved: z.ZodString;
            effect_in_flight: z.ZodString;
            blocked_unknown: z.ZodString;
            released_confirmed_not_committed: z.ZodString;
            terminal_committed: z.ZodString;
        }, z.core.$strict>;
        encumberedQuantity: z.ZodString;
        releasedQuantity: z.ZodString;
        availableQuantity: z.ZodString;
        overLimitQuantity: z.ZodString;
        availability: z.ZodEnum<{
            none: "none";
            available: "available";
            blocked_over_limit: "blocked_over_limit";
        }>;
        lineageSetDigest: z.ZodString;
        snapshotDigest: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
    stateDigest: z.ZodString;
    authority: z.ZodLiteral<"none">;
}, z.core.$strict>;
export type AggregateExposureBucketState = z.infer<typeof AggregateExposureBucketStateSchema>;
export declare const AggregateAuthorityBindingSourcePayloadSchema: z.ZodObject<{
    aggregateAuthorityBindingSourceVersion: z.ZodLiteral<"aggregate-authority-binding-source-1">;
    locator: z.ZodObject<{
        aggregateProfileAuthorityRef: z.ZodString;
        tenantAuthorityRef: z.ZodString;
        organizationAuthorityRef: z.ZodString;
        aggregateScopeAuthorityRef: z.ZodString;
    }, z.core.$strict>;
    locatorDigest: z.ZodString;
    binding: z.ZodObject<{
        principalAuthorityRef: z.ZodString;
        aggregateScopeDigest: z.ZodString;
        actionTypeRef: z.ZodString;
        actionTypeDigest: z.ZodString;
        actionClass: z.ZodString;
        protectedSurfaceKind: z.ZodString;
        canonicalProtectedResourceScope: z.ZodString;
        allowedGateways: z.ZodArray<z.ZodObject<{
            gatewayAuthorityRef: z.ZodString;
            gatewayVersion: z.ZodString;
        }, z.core.$strict>>;
        exposureUnit: z.ZodLiteral<"action_count">;
        limitQuantity: z.ZodString;
        window: z.ZodObject<{
            startsAt: z.ZodString;
            endsAt: z.ZodString;
        }, z.core.$strict>;
        policyAuthorityRef: z.ZodString;
        policyDigest: z.ZodString;
        policyEvaluatorRef: z.ZodString;
        policyEvaluatorDigest: z.ZodString;
        policyVersionRef: z.ZodString;
        policyVersionDigest: z.ZodString;
        readinessRef: z.ZodString;
        readinessDigest: z.ZodString;
        handlerAuthorityRef: z.ZodString;
        handlerVersion: z.ZodString;
        canonicalizerAuthorityRef: z.ZodString;
        canonicalizerVersion: z.ZodString;
        locatorDigest: z.ZodString;
    }, z.core.$strict>;
    bindingDigest: z.ZodString;
}, z.core.$strict>;
export type AggregateAuthorityBindingSourcePayload = z.infer<typeof AggregateAuthorityBindingSourcePayloadSchema>;
export declare const AggregateExposureBucketSourcePayloadSchema: z.ZodObject<{
    aggregateExposureBucketSourceVersion: z.ZodLiteral<"aggregate-exposure-bucket-source-1">;
    locatorDigest: z.ZodString;
    bindingDigest: z.ZodString;
    bindingRecordWitness: z.ZodObject<{
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
    bucketState: z.ZodObject<{
        locatorDigest: z.ZodString;
        bindingDigest: z.ZodString;
        window: z.ZodObject<{
            startsAt: z.ZodString;
            endsAt: z.ZodString;
        }, z.core.$strict>;
        limitQuantity: z.ZodString;
        reservations: z.ZodArray<z.ZodObject<{
            lineage: z.ZodObject<{
                origin: z.ZodObject<{
                    locatorDigest: z.ZodString;
                    bindingDigest: z.ZodString;
                    quantity: z.ZodLiteral<"1">;
                    actionContractDigest: z.ZodString;
                    owningGreenlightRef: z.ZodString;
                    originMutationRef: z.ZodString;
                }, z.core.$strict>;
                lineageDigest: z.ZodString;
                reservationRef: z.ZodString;
                authority: z.ZodLiteral<"none">;
            }, z.core.$strict>;
            state: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
            sourceWitness: z.ZodObject<{
                record: z.ZodObject<{
                    recordKind: z.ZodEnum<{
                        authority_state: "authority_state";
                        authority_evidence: "authority_evidence";
                        authority_binding: "authority_binding";
                        projection_state: "projection_state";
                    }>;
                    localId: z.ZodString;
                }, z.core.$strict>;
                version: z.ZodNumber;
                digest: z.ZodString;
                semanticState: z.ZodEnum<{
                    authority_reserved: "authority_reserved";
                    blocked_unknown: "blocked_unknown";
                    effect_in_flight: "effect_in_flight";
                    released_confirmed_not_committed: "released_confirmed_not_committed";
                    terminal_committed: "terminal_committed";
                }>;
            }, z.core.$strict>;
        }, z.core.$strict>>;
        predecessorEncumbrances: z.ZodArray<z.ZodObject<{
            lineage: z.ZodObject<{
                origin: z.ZodObject<{
                    locatorDigest: z.ZodString;
                    bindingDigest: z.ZodString;
                    quantity: z.ZodLiteral<"1">;
                    actionContractDigest: z.ZodString;
                    owningGreenlightRef: z.ZodString;
                    originMutationRef: z.ZodString;
                }, z.core.$strict>;
                lineageDigest: z.ZodString;
                reservationRef: z.ZodString;
                authority: z.ZodLiteral<"none">;
            }, z.core.$strict>;
            state: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
            }>;
            sourceWitness: z.ZodObject<{
                record: z.ZodObject<{
                    recordKind: z.ZodEnum<{
                        authority_state: "authority_state";
                        authority_evidence: "authority_evidence";
                        authority_binding: "authority_binding";
                        projection_state: "projection_state";
                    }>;
                    localId: z.ZodString;
                }, z.core.$strict>;
                version: z.ZodNumber;
                digest: z.ZodString;
                semanticState: z.ZodEnum<{
                    authority_reserved: "authority_reserved";
                    blocked_unknown: "blocked_unknown";
                    effect_in_flight: "effect_in_flight";
                    released_confirmed_not_committed: "released_confirmed_not_committed";
                    terminal_committed: "terminal_committed";
                }>;
            }, z.core.$strict>;
            quantity: z.ZodLiteral<"1">;
        }, z.core.$strict>>;
        conservation: z.ZodObject<{
            locatorDigest: z.ZodString;
            bindingDigest: z.ZodString;
            limitQuantity: z.ZodString;
            reservationLineageDigests: z.ZodArray<z.ZodString>;
            predecessorEncumbranceLineageDigests: z.ZodArray<z.ZodString>;
            stateQuantities: z.ZodObject<{
                authority_reserved: z.ZodString;
                effect_in_flight: z.ZodString;
                blocked_unknown: z.ZodString;
                released_confirmed_not_committed: z.ZodString;
                terminal_committed: z.ZodString;
            }, z.core.$strict>;
            encumberedQuantity: z.ZodString;
            releasedQuantity: z.ZodString;
            availableQuantity: z.ZodString;
            overLimitQuantity: z.ZodString;
            availability: z.ZodEnum<{
                none: "none";
                available: "available";
                blocked_over_limit: "blocked_over_limit";
            }>;
            lineageSetDigest: z.ZodString;
            snapshotDigest: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        stateDigest: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AggregateExposureBucketSourcePayload = z.infer<typeof AggregateExposureBucketSourcePayloadSchema>;
export declare const AggregateAuthoritySourceScopeSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
}, z.core.$strict>;
export declare const AggregateAuthoritySourceRecordSchema: z.ZodObject<{
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
    payload: z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>;
    predecessor: z.ZodNullable<z.ZodObject<{
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
}, z.core.$strict>;
export declare const AggregateAuthoritySourcePredecessorSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"absent">;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"exact">;
    record: z.ZodObject<{
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
        payload: z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>;
        predecessor: z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strict>;
}, z.core.$strict>], "kind">;
export type AggregateAuthoritySourcePredecessor = z.infer<typeof AggregateAuthoritySourcePredecessorSchema>;
export declare const NonRestorativeAggregateSourceArtifactCandidateInputSchema: z.ZodObject<{
    sourceScope: z.ZodObject<{
        tenantId: z.ZodString;
        organizationId: z.ZodString;
    }, z.core.$strict>;
    bindingArtifact: z.ZodObject<{
        locator: z.ZodObject<{
            aggregateProfileAuthorityRef: z.ZodString;
            tenantAuthorityRef: z.ZodString;
            organizationAuthorityRef: z.ZodString;
            aggregateScopeAuthorityRef: z.ZodString;
        }, z.core.$strict>;
        locatorDigest: z.ZodString;
        binding: z.ZodObject<{
            principalAuthorityRef: z.ZodString;
            aggregateScopeDigest: z.ZodString;
            actionTypeRef: z.ZodString;
            actionTypeDigest: z.ZodString;
            actionClass: z.ZodString;
            protectedSurfaceKind: z.ZodString;
            canonicalProtectedResourceScope: z.ZodString;
            allowedGateways: z.ZodArray<z.ZodObject<{
                gatewayAuthorityRef: z.ZodString;
                gatewayVersion: z.ZodString;
            }, z.core.$strict>>;
            exposureUnit: z.ZodLiteral<"action_count">;
            limitQuantity: z.ZodString;
            window: z.ZodObject<{
                startsAt: z.ZodString;
                endsAt: z.ZodString;
            }, z.core.$strict>;
            policyAuthorityRef: z.ZodString;
            policyDigest: z.ZodString;
            policyEvaluatorRef: z.ZodString;
            policyEvaluatorDigest: z.ZodString;
            policyVersionRef: z.ZodString;
            policyVersionDigest: z.ZodString;
            readinessRef: z.ZodString;
            readinessDigest: z.ZodString;
            handlerAuthorityRef: z.ZodString;
            handlerVersion: z.ZodString;
            canonicalizerAuthorityRef: z.ZodString;
            canonicalizerVersion: z.ZodString;
            locatorDigest: z.ZodString;
        }, z.core.$strict>;
        bindingDigest: z.ZodString;
    }, z.core.$strict>;
    bucketState: z.ZodObject<{
        locatorDigest: z.ZodString;
        bindingDigest: z.ZodString;
        window: z.ZodObject<{
            startsAt: z.ZodString;
            endsAt: z.ZodString;
        }, z.core.$strict>;
        limitQuantity: z.ZodString;
        reservations: z.ZodArray<z.ZodObject<{
            lineage: z.ZodObject<{
                origin: z.ZodObject<{
                    locatorDigest: z.ZodString;
                    bindingDigest: z.ZodString;
                    quantity: z.ZodLiteral<"1">;
                    actionContractDigest: z.ZodString;
                    owningGreenlightRef: z.ZodString;
                    originMutationRef: z.ZodString;
                }, z.core.$strict>;
                lineageDigest: z.ZodString;
                reservationRef: z.ZodString;
                authority: z.ZodLiteral<"none">;
            }, z.core.$strict>;
            state: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
                released_confirmed_not_committed: "released_confirmed_not_committed";
                terminal_committed: "terminal_committed";
            }>;
            sourceWitness: z.ZodObject<{
                record: z.ZodObject<{
                    recordKind: z.ZodEnum<{
                        authority_state: "authority_state";
                        authority_evidence: "authority_evidence";
                        authority_binding: "authority_binding";
                        projection_state: "projection_state";
                    }>;
                    localId: z.ZodString;
                }, z.core.$strict>;
                version: z.ZodNumber;
                digest: z.ZodString;
                semanticState: z.ZodEnum<{
                    authority_reserved: "authority_reserved";
                    blocked_unknown: "blocked_unknown";
                    effect_in_flight: "effect_in_flight";
                    released_confirmed_not_committed: "released_confirmed_not_committed";
                    terminal_committed: "terminal_committed";
                }>;
            }, z.core.$strict>;
        }, z.core.$strict>>;
        predecessorEncumbrances: z.ZodArray<z.ZodObject<{
            lineage: z.ZodObject<{
                origin: z.ZodObject<{
                    locatorDigest: z.ZodString;
                    bindingDigest: z.ZodString;
                    quantity: z.ZodLiteral<"1">;
                    actionContractDigest: z.ZodString;
                    owningGreenlightRef: z.ZodString;
                    originMutationRef: z.ZodString;
                }, z.core.$strict>;
                lineageDigest: z.ZodString;
                reservationRef: z.ZodString;
                authority: z.ZodLiteral<"none">;
            }, z.core.$strict>;
            state: z.ZodEnum<{
                authority_reserved: "authority_reserved";
                blocked_unknown: "blocked_unknown";
                effect_in_flight: "effect_in_flight";
            }>;
            sourceWitness: z.ZodObject<{
                record: z.ZodObject<{
                    recordKind: z.ZodEnum<{
                        authority_state: "authority_state";
                        authority_evidence: "authority_evidence";
                        authority_binding: "authority_binding";
                        projection_state: "projection_state";
                    }>;
                    localId: z.ZodString;
                }, z.core.$strict>;
                version: z.ZodNumber;
                digest: z.ZodString;
                semanticState: z.ZodEnum<{
                    authority_reserved: "authority_reserved";
                    blocked_unknown: "blocked_unknown";
                    effect_in_flight: "effect_in_flight";
                    released_confirmed_not_committed: "released_confirmed_not_committed";
                    terminal_committed: "terminal_committed";
                }>;
            }, z.core.$strict>;
            quantity: z.ZodLiteral<"1">;
        }, z.core.$strict>>;
        conservation: z.ZodObject<{
            locatorDigest: z.ZodString;
            bindingDigest: z.ZodString;
            limitQuantity: z.ZodString;
            reservationLineageDigests: z.ZodArray<z.ZodString>;
            predecessorEncumbranceLineageDigests: z.ZodArray<z.ZodString>;
            stateQuantities: z.ZodObject<{
                authority_reserved: z.ZodString;
                effect_in_flight: z.ZodString;
                blocked_unknown: z.ZodString;
                released_confirmed_not_committed: z.ZodString;
                terminal_committed: z.ZodString;
            }, z.core.$strict>;
            encumberedQuantity: z.ZodString;
            releasedQuantity: z.ZodString;
            availableQuantity: z.ZodString;
            overLimitQuantity: z.ZodString;
            availability: z.ZodEnum<{
                none: "none";
                available: "available";
                blocked_over_limit: "blocked_over_limit";
            }>;
            lineageSetDigest: z.ZodString;
            snapshotDigest: z.ZodString;
            authority: z.ZodLiteral<"none">;
        }, z.core.$strict>;
        stateDigest: z.ZodString;
        authority: z.ZodLiteral<"none">;
    }, z.core.$strict>;
    predecessor: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absent">;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"exact">;
        record: z.ZodObject<{
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
            payload: z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>;
            predecessor: z.ZodNullable<z.ZodObject<{
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
        }, z.core.$strict>;
    }, z.core.$strict>], "kind">;
}, z.core.$strict>;
export type NonRestorativeAggregateSourceArtifactCandidateInput = z.infer<typeof NonRestorativeAggregateSourceArtifactCandidateInputSchema>;
export type NonRestorativeAggregateSourceArtifactCandidate = Readonly<{
    kind: "non_authoritative_aggregate_source_artifact_candidate";
    authority: "none";
    sourceScope: AuthoritySourceScope;
    bindingRecord: AuthoritySourceRecord;
    bucketRecord: AuthoritySourceRecord;
    records: readonly [AuthoritySourceRecord, AuthoritySourceRecord];
    pointerMutation: AuthorityPointerMutation;
}>;
export declare const AggregateModelInvalidCodeSchema: z.ZodEnum<{
    invalid_action_count_quantity: "invalid_action_count_quantity";
    action_count_representation_limit: "action_count_representation_limit";
    action_count_underflow: "action_count_underflow";
    invalid_action_family_aggregate_posture: "invalid_action_family_aggregate_posture";
    invalid_window_classification_instant: "invalid_window_classification_instant";
    invalid_action_family_identity: "invalid_action_family_identity";
    invalid_aggregate_domain: "invalid_aggregate_domain";
    invalid_aggregate_locator: "invalid_aggregate_locator";
    invalid_aggregate_binding: "invalid_aggregate_binding";
    duplicate_allowed_gateway: "duplicate_allowed_gateway";
    invalid_binding_window: "invalid_binding_window";
    invalid_reservation_transition: "invalid_reservation_transition";
    invalid_reservation_lineage: "invalid_reservation_lineage";
    invalid_non_restorative_reservation_candidate: "invalid_non_restorative_reservation_candidate";
    restorative_reservation_candidate_forbidden: "restorative_reservation_candidate_forbidden";
    invalid_conservation_state: "invalid_conservation_state";
    invalid_aggregate_bucket_state: "invalid_aggregate_bucket_state";
    aggregate_reservation_analysis_limit: "aggregate_reservation_analysis_limit";
    invalid_rollover_state: "invalid_rollover_state";
    rollover_snapshot_mismatch: "rollover_snapshot_mismatch";
    invalid_authority_source_artifact: "invalid_authority_source_artifact";
    restorative_source_artifact_forbidden: "restorative_source_artifact_forbidden";
    rollover_source_artifact_forbidden: "rollover_source_artifact_forbidden";
    source_predecessor_conflict: "source_predecessor_conflict";
}>;
export type AggregateModelInvalidCode = z.infer<typeof AggregateModelInvalidCodeSchema>;
export declare const AggregateModelConflictCodeSchema: z.ZodEnum<{
    binding_conflict: "binding_conflict";
    reservation_transition_conflict: "reservation_transition_conflict";
    reservation_lineage_conflict: "reservation_lineage_conflict";
    rollover_conflict: "rollover_conflict";
}>;
export type AggregateModelConflictCode = z.infer<typeof AggregateModelConflictCodeSchema>;
export type AggregateModelResult<T> = Readonly<{
    status: "valid";
    value: T;
}> | Readonly<{
    status: "invalid";
    code: AggregateModelInvalidCode;
    path: string;
}> | Readonly<{
    status: "conflict";
    code: AggregateModelConflictCode;
    subject: string;
}>;
