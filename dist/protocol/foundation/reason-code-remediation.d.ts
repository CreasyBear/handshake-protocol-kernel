import { z } from "zod";
export declare const ReasonCodeRemediationSafeRetrySchema: z.ZodEnum<{
    unknown: "unknown";
    read_only_retry_safe: "read_only_retry_safe";
    retry_after_fix: "retry_after_fix";
    retry_after_wait: "retry_after_wait";
    requires_new_contract: "requires_new_contract";
    do_not_retry: "do_not_retry";
}>;
export type ReasonCodeRemediationSafeRetry = z.infer<typeof ReasonCodeRemediationSafeRetrySchema>;
export declare const ReasonCodeRemediationNextMechanismSchema: z.ZodEnum<{
    read_evidence: "read_evidence";
    inspect_issues: "inspect_issues";
    fix_arguments: "fix_arguments";
    fix_input_schema: "fix_input_schema";
    reload_metadata: "reload_metadata";
    fix_install: "fix_install";
    register_control_plane_install: "register_control_plane_install";
    use_greenlight_at_gateway: "use_greenlight_at_gateway";
    request_review: "request_review";
    recraft_request: "recraft_request";
    create_new_contract: "create_new_contract";
    recover_terminal_unknown: "recover_terminal_unknown";
    wait_for_downstream: "wait_for_downstream";
    contact_operator: "contact_operator";
    stop: "stop";
}>;
export type ReasonCodeRemediationNextMechanism = z.infer<typeof ReasonCodeRemediationNextMechanismSchema>;
export declare const ReasonCodeRemediationSupportSeveritySchema: z.ZodEnum<{
    none: "none";
    info: "info";
    warning: "warning";
    urgent: "urgent";
}>;
export type ReasonCodeRemediationSupportSeverity = z.infer<typeof ReasonCodeRemediationSupportSeveritySchema>;
export declare const ReasonCodeRemediationOwnerSurfaceSchema: z.ZodEnum<{
    gateway: "gateway";
    protocol: "protocol";
    http: "http";
    cli: "cli";
    mcp: "mcp";
    operation_readback: "operation_readback";
    support: "support";
}>;
export type ReasonCodeRemediationOwnerSurface = z.infer<typeof ReasonCodeRemediationOwnerSurfaceSchema>;
export declare const ReasonCodeRemediationSchema: z.ZodObject<{
    code: z.ZodString;
    summary: z.ZodString;
    ownerSurface: z.ZodEnum<{
        gateway: "gateway";
        protocol: "protocol";
        http: "http";
        cli: "cli";
        mcp: "mcp";
        operation_readback: "operation_readback";
        support: "support";
    }>;
    supportSeverity: z.ZodEnum<{
        none: "none";
        info: "info";
        warning: "warning";
        urgent: "urgent";
    }>;
    safeRetry: z.ZodEnum<{
        unknown: "unknown";
        read_only_retry_safe: "read_only_retry_safe";
        retry_after_fix: "retry_after_fix";
        retry_after_wait: "retry_after_wait";
        requires_new_contract: "requires_new_contract";
        do_not_retry: "do_not_retry";
    }>;
    nextMechanism: z.ZodEnum<{
        read_evidence: "read_evidence";
        inspect_issues: "inspect_issues";
        fix_arguments: "fix_arguments";
        fix_input_schema: "fix_input_schema";
        reload_metadata: "reload_metadata";
        fix_install: "fix_install";
        register_control_plane_install: "register_control_plane_install";
        use_greenlight_at_gateway: "use_greenlight_at_gateway";
        request_review: "request_review";
        recraft_request: "recraft_request";
        create_new_contract: "create_new_contract";
        recover_terminal_unknown: "recover_terminal_unknown";
        wait_for_downstream: "wait_for_downstream";
        contact_operator: "contact_operator";
        stop: "stop";
    }>;
    nextCommand: z.ZodNullable<z.ZodString>;
    docsUrl: z.ZodString;
    requiresNewContract: z.ZodBoolean;
    parameterRepair: z.ZodNullable<z.ZodString>;
    forbiddenActions: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type ReasonCodeRemediation = z.infer<typeof ReasonCodeRemediationSchema>;
export declare function remediationForReasonCode(code: string): ReasonCodeRemediation;
export declare function remediationsForReasonCodes(codes: readonly string[]): ReasonCodeRemediation[];
