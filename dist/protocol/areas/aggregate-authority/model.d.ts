import type { ActionCountQuantity, AggregateActionFamilyArtifact, AggregateAuthorityDomainArtifact, ActionFamilyAggregatePosture, AggregateAuthorityBindingArtifact, AggregateAuthorityWindowRelation, AggregateAuthorityWindow, AggregateAuthorityLocatorArtifact, AggregateConservationSnapshot, AggregateConservationValidation, AggregateExposureBucketState, AggregateNonRestorativeStateCandidate, AggregateReservationLineageCandidate, AggregateReservationStateEdgeClassification, AggregateRolloverCandidate, NonRestorativeAggregateSourceArtifactCandidate, AggregateModelResult } from "./types";
export declare function observeAggregateAuthorityIntrinsicFailure(): "intrinsic_prototype_drift" | "intrinsic_environment_drift" | null;
export declare function parseActionCountQuantity(input: unknown): AggregateModelResult<ActionCountQuantity>;
export declare function addActionCountQuantities(left: unknown, right: unknown): AggregateModelResult<ActionCountQuantity>;
export declare function subtractActionCountQuantities(minuend: unknown, subtrahend: unknown): AggregateModelResult<ActionCountQuantity>;
export declare function parseActionFamilyAggregatePosture(input: unknown): AggregateModelResult<ActionFamilyAggregatePosture>;
export declare function parseAggregateAuthorityWindow(input: unknown): AggregateModelResult<AggregateAuthorityWindow>;
export declare function classifyAggregateAuthorityWindowAt(window: unknown, at: unknown): AggregateModelResult<AggregateAuthorityWindowRelation>;
export declare function classifyAggregateReservationStateEdge(currentState: unknown, candidateState: unknown): AggregateModelResult<AggregateReservationStateEdgeClassification>;
export declare function deriveAggregateReservationLineageCandidate(input: unknown): Promise<AggregateModelResult<AggregateReservationLineageCandidate>>;
export declare function deriveAggregateNonRestorativeStateCandidate(input: unknown): Promise<AggregateModelResult<AggregateNonRestorativeStateCandidate>>;
export declare function deriveAggregateConservationSnapshot(input: unknown): Promise<AggregateModelResult<AggregateConservationSnapshot>>;
export declare function validateAggregateConservationSnapshot(input: unknown): Promise<AggregateModelResult<AggregateConservationValidation>>;
export declare function deriveAggregateRolloverCandidate(input: unknown): Promise<AggregateModelResult<AggregateRolloverCandidate>>;
export declare function deriveAggregateExposureBucketState(input: unknown): Promise<AggregateModelResult<AggregateExposureBucketState>>;
/**
 * Derives canonical non-restorative source-envelope values only.
 *
 * This function does not prove that an inner reservation witness exists, that
 * the outer predecessor is current, or that the returned pointer mutation
 * committed. A source-owning transition must reread exact lineage and win CAS.
 */
export declare function deriveNonRestorativeAggregateSourceArtifactCandidate(input: unknown): Promise<AggregateModelResult<NonRestorativeAggregateSourceArtifactCandidate>>;
export declare function buildAggregateAuthorityLocator(input: unknown): Promise<AggregateModelResult<AggregateAuthorityLocatorArtifact>>;
export declare function buildAggregateActionFamilyArtifact(input: unknown): Promise<AggregateModelResult<AggregateActionFamilyArtifact>>;
export declare function buildAggregateAuthorityDomainArtifact(input: unknown): Promise<AggregateModelResult<AggregateAuthorityDomainArtifact>>;
export declare function buildAggregateAuthorityBinding(input: unknown): Promise<AggregateModelResult<AggregateAuthorityBindingArtifact>>;
