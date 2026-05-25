import { z } from "zod";
export declare const GeneratedExecutionCoverageStatusSchema: z.ZodEnum<{
    unknown: "unknown";
    fully_covered_no_unsupported_nodes: "fully_covered_no_unsupported_nodes";
    nonconsequential_only: "nonconsequential_only";
    contains_refusal: "contains_refusal";
    contains_coverage_gap: "contains_coverage_gap";
    contains_bypass_risk: "contains_bypass_risk";
    unsupported_or_ambiguous: "unsupported_or_ambiguous";
}>;
export type GeneratedExecutionCoverageStatus = z.infer<typeof GeneratedExecutionCoverageStatusSchema>;
export declare const GeneratedExecutionNodeKindSchema: z.ZodEnum<{
    unknown: "unknown";
    shell_command: "shell_command";
    codemode_action: "codemode_action";
    observer_event: "observer_event";
    hidden_trigger: "hidden_trigger";
}>;
export type GeneratedExecutionNodeKind = z.infer<typeof GeneratedExecutionNodeKindSchema>;
export declare const GeneratedExecutionNodeClassificationSchema: z.ZodEnum<{
    read_only: "read_only";
    ambiguous: "ambiguous";
    hidden_trigger: "hidden_trigger";
    candidate_action_eligible: "candidate_action_eligible";
    nonconsequential: "nonconsequential";
    unsupported: "unsupported";
    bypass_risk: "bypass_risk";
    observer_only: "observer_only";
}>;
export type GeneratedExecutionNodeClassification = z.infer<typeof GeneratedExecutionNodeClassificationSchema>;
export declare const GraphIssuerAuthoritySchema: z.ZodEnum<{
    host_runtime_adapter: "host_runtime_adapter";
    kernel_fixture: "kernel_fixture";
    conformance_fixture: "conformance_fixture";
}>;
export type GraphIssuerAuthority = z.infer<typeof GraphIssuerAuthoritySchema>;
export declare const GraphTruncationStatusSchema: z.ZodEnum<{
    unknown: "unknown";
    complete: "complete";
    truncated: "truncated";
    over_limit: "over_limit";
}>;
export type GraphTruncationStatus = z.infer<typeof GraphTruncationStatusSchema>;
export declare const GraphRedactionStatusSchema: z.ZodEnum<{
    unknown: "unknown";
    redacted: "redacted";
    digest_only: "digest_only";
    secret_refs_only: "secret_refs_only";
    raw_material_present: "raw_material_present";
}>;
export type GraphRedactionStatus = z.infer<typeof GraphRedactionStatusSchema>;
export declare const CommandRiskClassifierPostureSchema: z.ZodEnum<{
    unknown: "unknown";
    absent: "absent";
    advisory_allow: "advisory_allow";
    advisory_no_match: "advisory_no_match";
    deny: "deny";
    warn: "warn";
    fail_open: "fail_open";
    allowlist: "allowlist";
    allow_once: "allow_once";
    bypass_detected: "bypass_detected";
    skipped: "skipped";
}>;
export type CommandRiskClassifierPosture = z.infer<typeof CommandRiskClassifierPostureSchema>;
export declare const GeneratedExecutionGraphEdgeSchema: z.ZodObject<{
    fromNodeId: z.ZodString;
    toNodeId: z.ZodString;
    edgeKind: z.ZodEnum<{
        unknown: "unknown";
        sequence: "sequence";
        branch: "branch";
        retry: "retry";
        callback: "callback";
        watcher: "watcher";
    }>;
}, z.core.$strict>;
export type GeneratedExecutionGraphEdge = z.infer<typeof GeneratedExecutionGraphEdgeSchema>;
export declare const GeneratedExecutionNodeSchema: z.ZodObject<{
    nodeId: z.ZodString;
    nodeKind: z.ZodEnum<{
        unknown: "unknown";
        shell_command: "shell_command";
        codemode_action: "codemode_action";
        observer_event: "observer_event";
        hidden_trigger: "hidden_trigger";
    }>;
    classification: z.ZodEnum<{
        read_only: "read_only";
        ambiguous: "ambiguous";
        hidden_trigger: "hidden_trigger";
        candidate_action_eligible: "candidate_action_eligible";
        nonconsequential: "nonconsequential";
        unsupported: "unsupported";
        bypass_risk: "bypass_risk";
        observer_only: "observer_only";
    }>;
    actionClass: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    toolCapabilityId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actionTypeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayRegistryEntryId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    resourceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    paramsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    nodeDigest: z.ZodString;
    nodeGatewayBindingDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sourceSpanDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    redactedArgvSummary: z.ZodDefault<z.ZodArray<z.ZodString>>;
    argvDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    argvRedactionStatus: z.ZodEnum<{
        unknown: "unknown";
        redacted: "redacted";
        digest_only: "digest_only";
        secret_refs_only: "secret_refs_only";
        raw_material_present: "raw_material_present";
    }>;
    stdinDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    stdinRedactionStatus: z.ZodEnum<{
        unknown: "unknown";
        redacted: "redacted";
        digest_only: "digest_only";
        secret_refs_only: "secret_refs_only";
        raw_material_present: "raw_material_present";
    }>;
    envAllowlistDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    rawSecretMaterialDetected: z.ZodDefault<z.ZodBoolean>;
    commandRiskClassifierRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    commandRiskClassifierPosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        advisory_allow: "advisory_allow";
        advisory_no_match: "advisory_no_match";
        deny: "deny";
        warn: "warn";
        fail_open: "fail_open";
        allowlist: "allowlist";
        allow_once: "allow_once";
        bypass_detected: "bypass_detected";
        skipped: "skipped";
    }>>;
    commandRiskRuleRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    commandRiskBypassRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    unsupportedReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type GeneratedExecutionNode = z.infer<typeof GeneratedExecutionNodeSchema>;
export declare const GeneratedExecutionNodeInputSchema: z.ZodObject<{
    toolCapabilityId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actionTypeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actionClass: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayRegistryEntryId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    nodeId: z.ZodString;
    nodeKind: z.ZodEnum<{
        unknown: "unknown";
        shell_command: "shell_command";
        codemode_action: "codemode_action";
        observer_event: "observer_event";
        hidden_trigger: "hidden_trigger";
    }>;
    classification: z.ZodEnum<{
        read_only: "read_only";
        ambiguous: "ambiguous";
        hidden_trigger: "hidden_trigger";
        candidate_action_eligible: "candidate_action_eligible";
        nonconsequential: "nonconsequential";
        unsupported: "unsupported";
        bypass_risk: "bypass_risk";
        observer_only: "observer_only";
    }>;
    resourceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    paramsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    nodeGatewayBindingDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sourceSpanDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    redactedArgvSummary: z.ZodDefault<z.ZodArray<z.ZodString>>;
    argvDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    argvRedactionStatus: z.ZodEnum<{
        unknown: "unknown";
        redacted: "redacted";
        digest_only: "digest_only";
        secret_refs_only: "secret_refs_only";
        raw_material_present: "raw_material_present";
    }>;
    stdinDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    stdinRedactionStatus: z.ZodEnum<{
        unknown: "unknown";
        redacted: "redacted";
        digest_only: "digest_only";
        secret_refs_only: "secret_refs_only";
        raw_material_present: "raw_material_present";
    }>;
    envAllowlistDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    rawSecretMaterialDetected: z.ZodDefault<z.ZodBoolean>;
    commandRiskClassifierRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    commandRiskClassifierPosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        advisory_allow: "advisory_allow";
        advisory_no_match: "advisory_no_match";
        deny: "deny";
        warn: "warn";
        fail_open: "fail_open";
        allowlist: "allowlist";
        allow_once: "allow_once";
        bypass_detected: "bypass_detected";
        skipped: "skipped";
    }>>;
    commandRiskRuleRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    commandRiskBypassRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    unsupportedReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type GeneratedExecutionNodeInput = z.input<typeof GeneratedExecutionNodeInputSchema>;
export declare const GeneratedExecutionGraphSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    generatedExecutionGraphId: z.ZodString;
    runtimeExecutionId: z.ZodString;
    runtimeExecutionDigest: z.ZodString;
    executionBlockDigest: z.ZodString;
    graphIssuerRef: z.ZodString;
    graphIssuerAuthority: z.ZodEnum<{
        host_runtime_adapter: "host_runtime_adapter";
        kernel_fixture: "kernel_fixture";
        conformance_fixture: "conformance_fixture";
    }>;
    graphIssuedAt: z.ZodString;
    graphNonce: z.ZodString;
    graphInputDigest: z.ZodString;
    graphSchemaVersion: z.ZodString;
    parserVersion: z.ZodString;
    supportedGrammarVersion: z.ZodString;
    coverageValidatorVersion: z.ZodString;
    graphDigest: z.ZodString;
    coverageStatus: z.ZodEnum<{
        unknown: "unknown";
        fully_covered_no_unsupported_nodes: "fully_covered_no_unsupported_nodes";
        nonconsequential_only: "nonconsequential_only";
        contains_refusal: "contains_refusal";
        contains_coverage_gap: "contains_coverage_gap";
        contains_bypass_risk: "contains_bypass_risk";
        unsupported_or_ambiguous: "unsupported_or_ambiguous";
    }>;
    terminalReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    entryNodeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    edges: z.ZodDefault<z.ZodArray<z.ZodObject<{
        fromNodeId: z.ZodString;
        toNodeId: z.ZodString;
        edgeKind: z.ZodEnum<{
            unknown: "unknown";
            sequence: "sequence";
            branch: "branch";
            retry: "retry";
            callback: "callback";
            watcher: "watcher";
        }>;
    }, z.core.$strict>>>;
    nodeCount: z.ZodNumber;
    edgeCount: z.ZodNumber;
    maxNodeCount: z.ZodNumber;
    maxEdgeCount: z.ZodNumber;
    maxDepth: z.ZodNumber;
    graphByteSize: z.ZodNumber;
    maxGraphByteSize: z.ZodNumber;
    truncationStatus: z.ZodEnum<{
        unknown: "unknown";
        complete: "complete";
        truncated: "truncated";
        over_limit: "over_limit";
    }>;
    catalogSnapshotDigest: z.ZodString;
    gatewayRegistrySnapshotDigest: z.ZodString;
    registryBindingSetDigest: z.ZodString;
    nodes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        nodeId: z.ZodString;
        nodeKind: z.ZodEnum<{
            unknown: "unknown";
            shell_command: "shell_command";
            codemode_action: "codemode_action";
            observer_event: "observer_event";
            hidden_trigger: "hidden_trigger";
        }>;
        classification: z.ZodEnum<{
            read_only: "read_only";
            ambiguous: "ambiguous";
            hidden_trigger: "hidden_trigger";
            candidate_action_eligible: "candidate_action_eligible";
            nonconsequential: "nonconsequential";
            unsupported: "unsupported";
            bypass_risk: "bypass_risk";
            observer_only: "observer_only";
        }>;
        actionClass: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        toolCapabilityId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        actionTypeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        gatewayRegistryEntryId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        resourceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        paramsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        nodeDigest: z.ZodString;
        nodeGatewayBindingDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        sourceSpanDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        redactedArgvSummary: z.ZodDefault<z.ZodArray<z.ZodString>>;
        argvDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        argvRedactionStatus: z.ZodEnum<{
            unknown: "unknown";
            redacted: "redacted";
            digest_only: "digest_only";
            secret_refs_only: "secret_refs_only";
            raw_material_present: "raw_material_present";
        }>;
        stdinDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        stdinRedactionStatus: z.ZodEnum<{
            unknown: "unknown";
            redacted: "redacted";
            digest_only: "digest_only";
            secret_refs_only: "secret_refs_only";
            raw_material_present: "raw_material_present";
        }>;
        envAllowlistDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        rawSecretMaterialDetected: z.ZodDefault<z.ZodBoolean>;
        commandRiskClassifierRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        commandRiskClassifierPosture: z.ZodDefault<z.ZodEnum<{
            unknown: "unknown";
            absent: "absent";
            advisory_allow: "advisory_allow";
            advisory_no_match: "advisory_no_match";
            deny: "deny";
            warn: "warn";
            fail_open: "fail_open";
            allowlist: "allowlist";
            allow_once: "allow_once";
            bypass_detected: "bypass_detected";
            skipped: "skipped";
        }>>;
        commandRiskRuleRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        commandRiskBypassRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        unsupportedReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type GeneratedExecutionGraph = z.infer<typeof GeneratedExecutionGraphSchema>;
export declare const GeneratedGraphNodeProjectionRefSchema: z.ZodObject<{
    nodeId: z.ZodString;
    nodeDigest: z.ZodString;
    classification: z.ZodEnum<{
        read_only: "read_only";
        ambiguous: "ambiguous";
        hidden_trigger: "hidden_trigger";
        candidate_action_eligible: "candidate_action_eligible";
        nonconsequential: "nonconsequential";
        unsupported: "unsupported";
        bypass_risk: "bypass_risk";
        observer_only: "observer_only";
    }>;
    actionTypeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayRegistryEntryId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    nodeGatewayBindingDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    unsupportedReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type GeneratedGraphNodeProjectionRef = z.infer<typeof GeneratedGraphNodeProjectionRefSchema>;
export declare const GeneratedGraphEvidenceProjectionSchema: z.ZodObject<{
    graphRef: z.ZodString;
    runtimeExecutionRef: z.ZodString;
    executionBlockDigest: z.ZodString;
    coverageStatus: z.ZodEnum<{
        unknown: "unknown";
        fully_covered_no_unsupported_nodes: "fully_covered_no_unsupported_nodes";
        nonconsequential_only: "nonconsequential_only";
        contains_refusal: "contains_refusal";
        contains_coverage_gap: "contains_coverage_gap";
        contains_bypass_risk: "contains_bypass_risk";
        unsupported_or_ambiguous: "unsupported_or_ambiguous";
    }>;
    terminalReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    contractableNodeRefs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        nodeId: z.ZodString;
        nodeDigest: z.ZodString;
        classification: z.ZodEnum<{
            read_only: "read_only";
            ambiguous: "ambiguous";
            hidden_trigger: "hidden_trigger";
            candidate_action_eligible: "candidate_action_eligible";
            nonconsequential: "nonconsequential";
            unsupported: "unsupported";
            bypass_risk: "bypass_risk";
            observer_only: "observer_only";
        }>;
        actionTypeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        gatewayRegistryEntryId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        nodeGatewayBindingDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        unsupportedReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
    refusedNodeRefs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        nodeId: z.ZodString;
        nodeDigest: z.ZodString;
        classification: z.ZodEnum<{
            read_only: "read_only";
            ambiguous: "ambiguous";
            hidden_trigger: "hidden_trigger";
            candidate_action_eligible: "candidate_action_eligible";
            nonconsequential: "nonconsequential";
            unsupported: "unsupported";
            bypass_risk: "bypass_risk";
            observer_only: "observer_only";
        }>;
        actionTypeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        gatewayRegistryEntryId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        nodeGatewayBindingDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        unsupportedReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
    catalogDigest: z.ZodString;
    gatewayRegistryDigest: z.ZodString;
    redactionPosture: z.ZodEnum<{
        unknown: "unknown";
        redacted: "redacted";
        digest_only: "digest_only";
        secret_refs_only: "secret_refs_only";
        raw_material_present: "raw_material_present";
    }>;
    graphDigest: z.ZodString;
}, z.core.$strict>;
export type GeneratedGraphEvidenceProjection = z.infer<typeof GeneratedGraphEvidenceProjectionSchema>;
