import { z } from "zod";
export declare const HostHarnessPostureStateSchema: z.ZodEnum<{
    READY: "READY";
    ADVISORY_ONLY: "ADVISORY_ONLY";
    WRAPPER_MISSING: "WRAPPER_MISSING";
    WRAPPER_DRIFTED: "WRAPPER_DRIFTED";
    GATEWAY_UNBOUND: "GATEWAY_UNBOUND";
    RAW_SIBLING_MUTATION_POSSIBLE: "RAW_SIBLING_MUTATION_POSSIBLE";
    STALE_PROBE: "STALE_PROBE";
    HOST_TOOL_DIGEST_CHANGED: "HOST_TOOL_DIGEST_CHANGED";
    PROOF_GAP: "PROOF_GAP";
}>;
export type HostHarnessPostureState = z.infer<typeof HostHarnessPostureStateSchema>;
export declare const HostRawSiblingResultKindSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    refused: "refused";
    detected: "detected";
    stop_condition: "stop_condition";
    mutation_possible: "mutation_possible";
}>;
export type HostRawSiblingResultKind = z.infer<typeof HostRawSiblingResultKindSchema>;
export declare const HostGatewayBindingStatusSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    bound: "bound";
    unbound: "unbound";
    advisory_only: "advisory_only";
}>;
export type HostGatewayBindingStatus = z.infer<typeof HostGatewayBindingStatusSchema>;
export declare const HostWrapperIntegrityStatusSchema: z.ZodEnum<{
    missing: "missing";
    matched: "matched";
    drifted: "drifted";
}>;
export type HostWrapperIntegrityStatus = z.infer<typeof HostWrapperIntegrityStatusSchema>;
export declare const requiredHostHarnessNonClaims: readonly ["not_host_wide_containment", "not_package_manager_ecosystem_protection", "not_cli_mcp_browser_shell_network_protection", "not_package_safety", "not_x402_ecosystem_coverage", "not_report_enforcement"];
export declare const HostRawSiblingCandidateSchema: z.ZodObject<{
    routeId: z.ZodString;
    displayName: z.ZodString;
    invocationKind: z.ZodEnum<{
        shell_command: "shell_command";
        package_manager_binary: "package_manager_binary";
        mcp_tool: "mcp_tool";
        browser_tool: "browser_tool";
        network_call: "network_call";
    }>;
    commandRef: z.ZodString;
    expectedOutcome: z.ZodLiteral<"refused_or_detected">;
}, z.core.$strict>;
export type HostRawSiblingCandidate = z.infer<typeof HostRawSiblingCandidateSchema>;
export declare const HostFixtureManifestSchema: z.ZodObject<{
    manifestKind: z.ZodLiteral<"host_fixture_manifest">;
    manifestVersion: z.ZodLiteral<"v1">;
    manifestId: z.ZodString;
    host: z.ZodObject<{
        hostId: z.ZodString;
        hostKind: z.ZodEnum<{
            local_package_manager: "local_package_manager";
            local_cli: "local_cli";
            mcp_stdio: "mcp_stdio";
            browser: "browser";
            cloud_worker: "cloud_worker";
        }>;
        hostVersionRef: z.ZodString;
        hostToolDigest: z.ZodString;
    }, z.core.$strict>;
    environment: z.ZodObject<{
        environmentId: z.ZodString;
        environmentKind: z.ZodEnum<{
            local_dev: "local_dev";
            test: "test";
            ci: "ci";
            preview: "preview";
            production: "production";
        }>;
        environmentRef: z.ZodString;
    }, z.core.$strict>;
    adapter: z.ZodObject<{
        adapterId: z.ZodString;
        adapterVersion: z.ZodString;
    }, z.core.$strict>;
    action: z.ZodObject<{
        actionClass: z.ZodString;
        protectedSurfaceKind: z.ZodString;
        resourceRef: z.ZodString;
    }, z.core.$strict>;
    protectedPath: z.ZodObject<{
        protectedPathId: z.ZodString;
        configuredWrapperPath: z.ZodString;
        resolvedWrapperPath: z.ZodString;
        wrapperDigest: z.ZodString;
        toolListDigest: z.ZodString;
        rawSiblingCandidates: z.ZodArray<z.ZodObject<{
            routeId: z.ZodString;
            displayName: z.ZodString;
            invocationKind: z.ZodEnum<{
                shell_command: "shell_command";
                package_manager_binary: "package_manager_binary";
                mcp_tool: "mcp_tool";
                browser_tool: "browser_tool";
                network_call: "network_call";
            }>;
            commandRef: z.ZodString;
            expectedOutcome: z.ZodLiteral<"refused_or_detected">;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    registry: z.ZodObject<{
        gatewayRegistryEntryId: z.ZodString;
        gatewayId: z.ZodString;
        gatewayRegistryDigest: z.ZodString;
    }, z.core.$strict>;
    policy: z.ZodObject<{
        policyRef: z.ZodString;
        policyDigest: z.ZodString;
    }, z.core.$strict>;
    freshness: z.ZodObject<{
        observedAt: z.ZodString;
        expiresAt: z.ZodString;
        maxAgeMs: z.ZodNumber;
    }, z.core.$strict>;
    expectedPosture: z.ZodLiteral<"gateway_checked">;
    redaction: z.ZodObject<{
        redactionPolicyRef: z.ZodString;
        sensitiveValuesIncluded: z.ZodLiteral<false>;
        preservesEnforcementDistinctions: z.ZodLiteral<true>;
    }, z.core.$strict>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type HostFixtureManifest = z.infer<typeof HostFixtureManifestSchema>;
export declare const HostRawSiblingProbeResultSchema: z.ZodObject<{
    routeId: z.ZodString;
    resultKind: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        detected: "detected";
        stop_condition: "stop_condition";
        mutation_possible: "mutation_possible";
    }>;
    probeKind: z.ZodEnum<{
        credential_custody: "credential_custody";
        raw_sibling_blocking: "raw_sibling_blocking";
        mcp_direct_call_blocking: "mcp_direct_call_blocking";
        token_passthrough_blocking: "token_passthrough_blocking";
        wrapper_drift: "wrapper_drift";
        failure_closed: "failure_closed";
    }>;
    evidenceRefs: z.ZodArray<z.ZodString>;
    proofGapReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type HostRawSiblingProbeResult = z.infer<typeof HostRawSiblingProbeResultSchema>;
export declare const HostBypassProofPacketInputSchema: z.ZodObject<{
    manifest: z.ZodObject<{
        manifestKind: z.ZodLiteral<"host_fixture_manifest">;
        manifestVersion: z.ZodLiteral<"v1">;
        manifestId: z.ZodString;
        host: z.ZodObject<{
            hostId: z.ZodString;
            hostKind: z.ZodEnum<{
                local_package_manager: "local_package_manager";
                local_cli: "local_cli";
                mcp_stdio: "mcp_stdio";
                browser: "browser";
                cloud_worker: "cloud_worker";
            }>;
            hostVersionRef: z.ZodString;
            hostToolDigest: z.ZodString;
        }, z.core.$strict>;
        environment: z.ZodObject<{
            environmentId: z.ZodString;
            environmentKind: z.ZodEnum<{
                local_dev: "local_dev";
                test: "test";
                ci: "ci";
                preview: "preview";
                production: "production";
            }>;
            environmentRef: z.ZodString;
        }, z.core.$strict>;
        adapter: z.ZodObject<{
            adapterId: z.ZodString;
            adapterVersion: z.ZodString;
        }, z.core.$strict>;
        action: z.ZodObject<{
            actionClass: z.ZodString;
            protectedSurfaceKind: z.ZodString;
            resourceRef: z.ZodString;
        }, z.core.$strict>;
        protectedPath: z.ZodObject<{
            protectedPathId: z.ZodString;
            configuredWrapperPath: z.ZodString;
            resolvedWrapperPath: z.ZodString;
            wrapperDigest: z.ZodString;
            toolListDigest: z.ZodString;
            rawSiblingCandidates: z.ZodArray<z.ZodObject<{
                routeId: z.ZodString;
                displayName: z.ZodString;
                invocationKind: z.ZodEnum<{
                    shell_command: "shell_command";
                    package_manager_binary: "package_manager_binary";
                    mcp_tool: "mcp_tool";
                    browser_tool: "browser_tool";
                    network_call: "network_call";
                }>;
                commandRef: z.ZodString;
                expectedOutcome: z.ZodLiteral<"refused_or_detected">;
            }, z.core.$strict>>;
        }, z.core.$strict>;
        registry: z.ZodObject<{
            gatewayRegistryEntryId: z.ZodString;
            gatewayId: z.ZodString;
            gatewayRegistryDigest: z.ZodString;
        }, z.core.$strict>;
        policy: z.ZodObject<{
            policyRef: z.ZodString;
            policyDigest: z.ZodString;
        }, z.core.$strict>;
        freshness: z.ZodObject<{
            observedAt: z.ZodString;
            expiresAt: z.ZodString;
            maxAgeMs: z.ZodNumber;
        }, z.core.$strict>;
        expectedPosture: z.ZodLiteral<"gateway_checked">;
        redaction: z.ZodObject<{
            redactionPolicyRef: z.ZodString;
            sensitiveValuesIncluded: z.ZodLiteral<false>;
            preservesEnforcementDistinctions: z.ZodLiteral<true>;
        }, z.core.$strict>;
        nonClaims: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    observedAt: z.ZodString;
    observedResolvedWrapperPath: z.ZodNullable<z.ZodString>;
    observedWrapperDigest: z.ZodNullable<z.ZodString>;
    observedHostToolDigest: z.ZodNullable<z.ZodString>;
    gatewayBindingStatus: z.ZodEnum<{
        proof_gap: "proof_gap";
        bound: "bound";
        unbound: "unbound";
        advisory_only: "advisory_only";
    }>;
    oneUseGreenlightObserved: z.ZodBoolean;
    gatewayCheckObserved: z.ZodBoolean;
    downstreamExecutionRecordedSeparately: z.ZodBoolean;
    rawSiblingResults: z.ZodArray<z.ZodObject<{
        routeId: z.ZodString;
        resultKind: z.ZodEnum<{
            proof_gap: "proof_gap";
            refused: "refused";
            detected: "detected";
            stop_condition: "stop_condition";
            mutation_possible: "mutation_possible";
        }>;
        probeKind: z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>;
        evidenceRefs: z.ZodArray<z.ZodString>;
        proofGapReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
    evidenceRefs: z.ZodArray<z.ZodString>;
    proofGapReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type HostBypassProofPacketInput = z.infer<typeof HostBypassProofPacketInputSchema>;
export declare const HostBypassProofPacketSchema: z.ZodObject<{
    packetKind: z.ZodLiteral<"host_specific_bypass_proof_packet">;
    packetVersion: z.ZodLiteral<"v1">;
    manifestId: z.ZodString;
    host: z.ZodObject<{
        hostId: z.ZodString;
        hostKind: z.ZodEnum<{
            local_package_manager: "local_package_manager";
            local_cli: "local_cli";
            mcp_stdio: "mcp_stdio";
            browser: "browser";
            cloud_worker: "cloud_worker";
        }>;
        hostVersionRef: z.ZodString;
        hostToolDigest: z.ZodString;
    }, z.core.$strict>;
    environment: z.ZodObject<{
        environmentId: z.ZodString;
        environmentKind: z.ZodEnum<{
            local_dev: "local_dev";
            test: "test";
            ci: "ci";
            preview: "preview";
            production: "production";
        }>;
        environmentRef: z.ZodString;
    }, z.core.$strict>;
    adapter: z.ZodObject<{
        adapterId: z.ZodString;
        adapterVersion: z.ZodString;
    }, z.core.$strict>;
    action: z.ZodObject<{
        actionClass: z.ZodString;
        protectedSurfaceKind: z.ZodString;
        resourceRef: z.ZodString;
    }, z.core.$strict>;
    protectedPath: z.ZodObject<{
        protectedPathId: z.ZodString;
        configuredWrapperPath: z.ZodString;
        resolvedWrapperPath: z.ZodString;
        wrapperDigest: z.ZodString;
        toolListDigest: z.ZodString;
        rawSiblingCandidates: z.ZodArray<z.ZodObject<{
            routeId: z.ZodString;
            displayName: z.ZodString;
            invocationKind: z.ZodEnum<{
                shell_command: "shell_command";
                package_manager_binary: "package_manager_binary";
                mcp_tool: "mcp_tool";
                browser_tool: "browser_tool";
                network_call: "network_call";
            }>;
            commandRef: z.ZodString;
            expectedOutcome: z.ZodLiteral<"refused_or_detected">;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    registry: z.ZodObject<{
        gatewayRegistryEntryId: z.ZodString;
        gatewayId: z.ZodString;
        gatewayRegistryDigest: z.ZodString;
    }, z.core.$strict>;
    policy: z.ZodObject<{
        policyRef: z.ZodString;
        policyDigest: z.ZodString;
    }, z.core.$strict>;
    wrapperIntegrity: z.ZodObject<{
        status: z.ZodEnum<{
            missing: "missing";
            matched: "matched";
            drifted: "drifted";
        }>;
        configuredWrapperPath: z.ZodString;
        expectedResolvedWrapperPath: z.ZodString;
        observedResolvedWrapperPath: z.ZodNullable<z.ZodString>;
        expectedWrapperDigest: z.ZodString;
        observedWrapperDigest: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
    freshness: z.ZodObject<{
        status: z.ZodEnum<{
            proof_gap: "proof_gap";
            stale: "stale";
            fresh: "fresh";
        }>;
        observedAt: z.ZodString;
        expiresAt: z.ZodString;
        toolListDigest: z.ZodString;
        observedHostToolDigest: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
    gatewayBinding: z.ZodObject<{
        status: z.ZodEnum<{
            proof_gap: "proof_gap";
            bound: "bound";
            unbound: "unbound";
            advisory_only: "advisory_only";
        }>;
        gatewayCheckObserved: z.ZodBoolean;
        oneUseGreenlightObserved: z.ZodBoolean;
        downstreamExecutionRecordedSeparately: z.ZodBoolean;
    }, z.core.$strict>;
    rawSiblingResults: z.ZodArray<z.ZodObject<{
        routeId: z.ZodString;
        resultKind: z.ZodEnum<{
            proof_gap: "proof_gap";
            refused: "refused";
            detected: "detected";
            stop_condition: "stop_condition";
            mutation_possible: "mutation_possible";
        }>;
        probeKind: z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>;
        evidenceRefs: z.ZodArray<z.ZodString>;
        proofGapReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
    postureState: z.ZodEnum<{
        READY: "READY";
        ADVISORY_ONLY: "ADVISORY_ONLY";
        WRAPPER_MISSING: "WRAPPER_MISSING";
        WRAPPER_DRIFTED: "WRAPPER_DRIFTED";
        GATEWAY_UNBOUND: "GATEWAY_UNBOUND";
        RAW_SIBLING_MUTATION_POSSIBLE: "RAW_SIBLING_MUTATION_POSSIBLE";
        STALE_PROBE: "STALE_PROBE";
        HOST_TOOL_DIGEST_CHANGED: "HOST_TOOL_DIGEST_CHANGED";
        PROOF_GAP: "PROOF_GAP";
    }>;
    evidenceRefs: z.ZodArray<z.ZodString>;
    proofGapReasonCodes: z.ZodArray<z.ZodString>;
    redaction: z.ZodObject<{
        redactionPolicyRef: z.ZodString;
        sensitiveValuesIncluded: z.ZodLiteral<false>;
        preservesEnforcementDistinctions: z.ZodLiteral<true>;
    }, z.core.$strict>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type HostBypassProofPacket = z.infer<typeof HostBypassProofPacketSchema>;
export declare const HostBypassHarnessReportSchema: z.ZodObject<{
    reportKind: z.ZodLiteral<"host_bypass_harness_report">;
    manifestId: z.ZodString;
    postureState: z.ZodEnum<{
        READY: "READY";
        ADVISORY_ONLY: "ADVISORY_ONLY";
        WRAPPER_MISSING: "WRAPPER_MISSING";
        WRAPPER_DRIFTED: "WRAPPER_DRIFTED";
        GATEWAY_UNBOUND: "GATEWAY_UNBOUND";
        RAW_SIBLING_MUTATION_POSSIBLE: "RAW_SIBLING_MUTATION_POSSIBLE";
        STALE_PROBE: "STALE_PROBE";
        HOST_TOOL_DIGEST_CHANGED: "HOST_TOOL_DIGEST_CHANGED";
        PROOF_GAP: "PROOF_GAP";
    }>;
    protectedPath: z.ZodObject<{
        protectedPathId: z.ZodString;
        configuredWrapperPath: z.ZodString;
        resolvedWrapperPath: z.ZodString;
        toolListDigest: z.ZodString;
    }, z.core.$strict>;
    wrapperIntegrityStatus: z.ZodEnum<{
        missing: "missing";
        matched: "matched";
        drifted: "drifted";
    }>;
    gatewayBindingStatus: z.ZodEnum<{
        proof_gap: "proof_gap";
        bound: "bound";
        unbound: "unbound";
        advisory_only: "advisory_only";
    }>;
    probeFreshnessStatus: z.ZodEnum<{
        proof_gap: "proof_gap";
        stale: "stale";
        fresh: "fresh";
    }>;
    rawSiblingAttempts: z.ZodArray<z.ZodObject<{
        routeId: z.ZodString;
        resultKind: z.ZodEnum<{
            proof_gap: "proof_gap";
            refused: "refused";
            detected: "detected";
            stop_condition: "stop_condition";
            mutation_possible: "mutation_possible";
        }>;
        probeKind: z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>;
        evidenceRefs: z.ZodArray<z.ZodString>;
        proofGapReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
    evidenceRefs: z.ZodArray<z.ZodString>;
    proofGapReasonCodes: z.ZodArray<z.ZodString>;
    authority: z.ZodObject<{
        reportAuthority: z.ZodLiteral<false>;
        cliAuthority: z.ZodLiteral<false>;
        mcpAuthority: z.ZodLiteral<false>;
        hostWideAuthority: z.ZodLiteral<false>;
    }, z.core.$strict>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type HostBypassHarnessReport = z.infer<typeof HostBypassHarnessReportSchema>;
export declare function deriveHostBypassProofPacket(inputValue: HostBypassProofPacketInput): HostBypassProofPacket;
export declare function projectHostBypassHarnessReport(packetValue: HostBypassProofPacket): HostBypassHarnessReport;
