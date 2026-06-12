import { z } from "zod";
export declare const GraphEvidenceIssuerContextSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    principalIntentRef: z.ZodString;
    principalId: z.ZodString;
    agentId: z.ZodString;
    runId: z.ZodString;
    runtimeAdapterId: z.ZodString;
    graphIssuerRef: z.ZodString;
    graphIssuerAuthority: z.ZodEnum<{
        host_runtime_adapter: "host_runtime_adapter";
        kernel_fixture: "kernel_fixture";
        conformance_fixture: "conformance_fixture";
    }>;
    graphIssuedAt: z.ZodString;
}, z.core.$strict>;
export type GraphEvidenceIssuerContext = z.input<typeof GraphEvidenceIssuerContextSchema>;
export declare const CreateGeneratedExecutionGraphInputSchema: z.ZodObject<{
    runtimeExecutionId: z.ZodString;
    graphNonce: z.ZodString;
    graphSchemaVersion: z.ZodDefault<z.ZodString>;
    parserVersion: z.ZodString;
    supportedGrammarVersion: z.ZodString;
    coverageValidatorVersion: z.ZodDefault<z.ZodString>;
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
    maxNodeCount: z.ZodDefault<z.ZodNumber>;
    maxEdgeCount: z.ZodDefault<z.ZodNumber>;
    maxDepth: z.ZodDefault<z.ZodNumber>;
    maxGraphByteSize: z.ZodDefault<z.ZodNumber>;
    truncationStatus: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        complete: "complete";
        truncated: "truncated";
        over_limit: "over_limit";
    }>>;
    catalogSnapshotDigest: z.ZodString;
    gatewayRegistrySnapshotDigest: z.ZodString;
    registryBindingSetDigest: z.ZodString;
    nodes: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
            unsupported: "unsupported";
            hidden_trigger: "hidden_trigger";
            candidate_action_eligible: "candidate_action_eligible";
            nonconsequential: "nonconsequential";
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
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type CreateGeneratedExecutionGraphInput = z.input<typeof CreateGeneratedExecutionGraphInputSchema>;
