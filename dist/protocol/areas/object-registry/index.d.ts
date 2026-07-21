import type { ZodType } from "zod";
export * from "./schemas";
import { type ActionContract } from "../action-contract/schemas";
import { type IsolationState } from "../isolation-breaker/schemas";
import { type ProtocolObjectType, type ProtocolRecord } from "./schemas";
import { type Greenlight } from "../policy-greenlight/schemas";
export type IsolationScopeRef = Pick<IsolationState, "tenantId" | "organizationId" | "scopeType" | "scopeId">;
export declare function isolationScopeRefsForContract(contract: ActionContract): IsolationScopeRef[];
export type ProtocolObjectExportPosture = "catalog_public" | "transition_evidence" | "receipt_evidence" | "internal_evidence";
export type ProtocolObjectRawReadPosture = "control_plane_read" | "audit_read" | "internal_only";
export type ProtocolObjectSchemaRegistration = Readonly<{
    schemaVersion: string;
    schema: ZodType;
    objectIdSelector: (payload: unknown) => string;
}>;
export type ProtocolObjectRegistryEntry<T extends ProtocolObjectType = ProtocolObjectType> = Readonly<{
    objectType: T;
    schema: ZodType;
    schemaRegistrations: readonly [ProtocolObjectSchemaRegistration, ...ProtocolObjectSchemaRegistration[]];
    idSelector: (record: ProtocolRecord) => string;
    exportPosture: ProtocolObjectExportPosture;
    rawReadPosture: ProtocolObjectRawReadPosture;
}>;
export declare const protocolObjectTypes: readonly ProtocolObjectType[];
export declare const protocolObjectRegistry: Readonly<{
    tool_capability: Readonly<{
        objectType: "tool_capability";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    action_type: Readonly<{
        objectType: "action_type";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    gateway_registry_entry: Readonly<{
        objectType: "gateway_registry_entry";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    operating_envelope: Readonly<{
        objectType: "operating_envelope";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    endpoint_access_surface_binding: Readonly<{
        objectType: "endpoint_access_surface_binding";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    agentic_endpoint_access_policy: Readonly<{
        objectType: "agentic_endpoint_access_policy";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    agentic_endpoint_access_attempt: Readonly<{
        objectType: "agentic_endpoint_access_attempt";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    agentic_endpoint_access_clearance_binding: Readonly<{
        objectType: "agentic_endpoint_access_clearance_binding";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    agentic_endpoint_access_lease: Readonly<{
        objectType: "agentic_endpoint_access_lease";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    agentic_endpoint_access_usage_event: Readonly<{
        objectType: "agentic_endpoint_access_usage_event";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    agentic_endpoint_access_readback: Readonly<{
        objectType: "agentic_endpoint_access_readback";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    agentic_endpoint_access_capabilities: Readonly<{
        objectType: "agentic_endpoint_access_capabilities";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    gateway_credential_ref: Readonly<{
        objectType: "gateway_credential_ref";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    delegated_authority_ref: Readonly<{
        objectType: "delegated_authority_ref";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    delegated_authority_status_transition: Readonly<{
        objectType: "delegated_authority_status_transition";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    gateway_custody_proof_packet: Readonly<{
        objectType: "gateway_custody_proof_packet";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    credential_resolution_evidence: Readonly<{
        objectType: "credential_resolution_evidence";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    typed_action_commitment: Readonly<{
        objectType: "typed_action_commitment";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    transition_request_context: Readonly<{
        objectType: "transition_request_context";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    runtime_execution: Readonly<{
        objectType: "runtime_execution";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    generated_execution_graph: Readonly<{
        objectType: "generated_execution_graph";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    idempotency_ledger_entry: Readonly<{
        objectType: "idempotency_ledger_entry";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    bypass_probe: Readonly<{
        objectType: "bypass_probe";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    tool_call_draft: Readonly<{
        objectType: "tool_call_draft";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    protected_path_posture: Readonly<{
        objectType: "protected_path_posture";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    intent_compilation: Readonly<{
        objectType: "intent_compilation";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    delegation_evidence_record: Readonly<{
        objectType: "delegation_evidence_record";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    negotiation_session: Readonly<{
        objectType: "negotiation_session";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    negotiation_offer: Readonly<{
        objectType: "negotiation_offer";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    negotiation_decision: Readonly<{
        objectType: "negotiation_decision";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    linked_agreement: Readonly<{
        objectType: "linked_agreement";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    agreement_obligation_binding: Readonly<{
        objectType: "agreement_obligation_binding";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    agreement_status_transition: Readonly<{
        objectType: "agreement_status_transition";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    action_contract: Readonly<{
        objectType: "action_contract";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    authority_certificate: Readonly<{
        objectType: "authority_certificate";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    policy_decision: Readonly<{
        objectType: "policy_decision";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    greenlight: Readonly<{
        objectType: "greenlight";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    review_artifact: Readonly<{
        objectType: "review_artifact";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    review_decision: Readonly<{
        objectType: "review_decision";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    breaker_decision: Readonly<{
        objectType: "breaker_decision";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    isolation_state: Readonly<{
        objectType: "isolation_state";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    gateway_check_attempt: Readonly<{
        objectType: "gateway_check_attempt";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    mutation_attempt: Readonly<{
        objectType: "mutation_attempt";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    protected_surface_operation_claim: Readonly<{
        objectType: "protected_surface_operation_claim";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    surface_operation_reconciliation: Readonly<{
        objectType: "surface_operation_reconciliation";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    proof_gap: Readonly<{
        objectType: "proof_gap";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    refusal: Readonly<{
        objectType: "refusal";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    receipt: Readonly<{
        objectType: "receipt";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    receipt_export: Readonly<{
        objectType: "receipt_export";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    raw_record_read_audit: Readonly<{
        objectType: "raw_record_read_audit";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    recovery_recommendation: Readonly<{
        objectType: "recovery_recommendation";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    recovery_recommendation_status_transition: Readonly<{
        objectType: "recovery_recommendation_status_transition";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
    contract_stream_event: Readonly<{
        objectType: "contract_stream_event";
        schema: ZodType;
        schemaRegistrations: readonly [Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>, ...Readonly<{
            schemaVersion: string;
            schema: ZodType;
            objectIdSelector: (payload: unknown) => string;
        }>[]];
        idSelector: (record: ProtocolRecord) => string;
        exportPosture: ProtocolObjectExportPosture;
        rawReadPosture: ProtocolObjectRawReadPosture;
    }>;
}>;
export declare const protocolRecordSchemas: Readonly<Record<ProtocolObjectType, ZodType>>;
export declare function getObjectId(record: ProtocolRecord): string;
export declare function isolationScopeRefsForGreenlight(greenlight: Greenlight): IsolationScopeRef[];
