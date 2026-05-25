import type { GatewayRegistryEntry, OperatingEnvelope } from "../catalog-envelope";
import type { IntentCompilationRecord } from "../intent-compilation";
import { type TransitionGuardResult } from "../../foundation/transition-guards";
export declare function guardActionProposal(input: {
    tenantId: string;
    organizationId: string;
    principalId: string;
    agentId: string;
    runId: string;
    envelopeId: string;
    gatewayId: string;
    compilation: IntentCompilationRecord;
    envelope: OperatingEnvelope;
    gateway: GatewayRegistryEntry;
}): TransitionGuardResult;
