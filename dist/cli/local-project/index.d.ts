import { z } from "zod";
import { LocalX402GatewayReadinessRecordSchema, LocalX402InstallRecordSchema, LocalX402ProbeReportSchema } from "../x402/local-state";
export declare const CLI_LOCAL_PROJECT_SCHEMA_VERSION: "handshake.cli.local-project.v1";
export declare const cliRoleNames: readonly ["control_plane", "runtime_evidence", "gateway_custody", "review_custody"];
export type CliRoleName = (typeof cliRoleNames)[number];
declare const LocalProjectConfigSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.cli.local-project.v1">;
    projectId: z.ZodString;
    workspaceRef: z.ZodString;
    stateRootRef: z.ZodString;
    trustBundleRef: z.ZodNullable<z.ZodString>;
    roleCredentialProfileRef: z.ZodNullable<z.ZodString>;
    x402InstallRef: z.ZodOptional<z.ZodString>;
    x402ProbeReportRef: z.ZodOptional<z.ZodString>;
    x402GatewayReadinessRef: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type LocalProjectConfig = z.infer<typeof LocalProjectConfigSchema>;
export type InitLocalProjectInput = {
    cwd: string;
    stateRoot?: string;
    projectId?: string;
};
export type InitLocalProjectResult = {
    projectId: string;
    configRef: string;
    workspaceRef: string;
    stateRootRef: string;
    roleCredentialValuesCreatedByCli: false;
    roleCredentialProvisioningRequired: readonly CliRoleName[];
    trustBundleRef: string;
    secretMaterialPrinted: false;
};
export type DoctorReasonCode = "cli_gateway_custody_proof_stale" | "cli_gateway_custody_proof_unverified" | "cli_gateway_posture_probe_failed" | "cli_gateway_posture_stale" | "cli_gateway_readiness_stale" | "cli_install_not_configured" | "cli_install_not_ready" | "cli_selected_payment_requirement_missing" | "cli_gateway_posture_unknown" | "cli_project_config_missing" | "cli_role_credential_profile_missing" | "cli_role_token_refs_not_distinct" | "cli_state_root_inside_workspace" | "cli_token_ref_inside_workspace" | "cli_token_ref_missing" | "cli_token_ref_permissions_unsafe" | "cli_token_ref_symlink" | "cli_trust_bundle_missing";
export type DoctorResult = {
    status: "ready" | "not_ready";
    reasonCodes: DoctorReasonCode[];
    projectId: string | null;
    configRef: string;
    workspaceRef: string;
    stateRootRef: string | null;
    roleCredentialPosture: RoleCredentialPosture[];
    trustBundleRef: string | null;
    x402InstallRef: string | null;
    x402ProbeReportRef: string | null;
    x402GatewayReadinessRef: string | null;
    checkedRoles: readonly CliRoleName[];
};
export type RoleCredentialPosture = {
    role: CliRoleName;
    refDigest: `sha256:${string}` | null;
    configured: boolean;
    present: boolean;
    storagePosture: "missing" | "safe_external_file" | "inside_workspace" | "symlink" | "unsafe_permissions";
};
export type LocalX402Health = {
    install: z.infer<typeof LocalX402InstallRecordSchema> | null;
    probes: z.infer<typeof LocalX402ProbeReportSchema> | null;
    gatewayReadiness: z.infer<typeof LocalX402GatewayReadinessRecordSchema> | null;
    reasonCodes: DoctorReasonCode[];
};
export declare function initializeLocalProject(input: InitLocalProjectInput): Promise<InitLocalProjectResult>;
export declare function doctorLocalProject(cwd: string): Promise<DoctorResult>;
export declare function localProjectConfigRef(cwd: string): string;
export declare function readLocalProjectConfig(cwd: string): Promise<LocalProjectConfig>;
export declare function updateLocalProjectConfig(cwd: string, updates: Partial<Pick<LocalProjectConfig, "x402InstallRef" | "x402ProbeReportRef" | "x402GatewayReadinessRef">>): Promise<LocalProjectConfig>;
export declare function readLocalX402Health(config: LocalProjectConfig, now?: number, options?: {
    requireTrustedGatewayReadiness?: boolean;
    readTrustedGatewayReadiness?: boolean;
}): Promise<LocalX402Health>;
export {};
