/** Single source for pack:check and `scripts/check-product-completion.mjs` parity (D-14, D-53). */
export type ProductCompletionGateId = "codex_local_host_activation" | "public_distribution_and_registry" | "customer_gateway_live_x402_paid_proof" | "auth_md_x402_admission_packet" | "dual_enforcement_posture" | "per_customer_bypass_scaffold";
export declare const PRODUCT_COMPLETION_READBACK_KIND: "product_completion_readback";
export declare const PRODUCT_COMPLETION_STATUSES: readonly ["completed", "closed_with_hard_blocks", "incomplete"];
export type ProductCompletionStatus = (typeof PRODUCT_COMPLETION_STATUSES)[number];
/**
 * Phase-04 dual-enforcement posture (04-01, deferred 04-11) plus closeout gates.
 * `dual_enforcement_posture` stays incomplete until structural architecture evidence
 * backs it — not doc-only posture (adjudication risk #1).
 */
export declare const PRODUCT_COMPLETION_GATE_IDS: readonly ["codex_local_host_activation", "public_distribution_and_registry", "customer_gateway_live_x402_paid_proof", "auth_md_x402_admission_packet", "dual_enforcement_posture", "per_customer_bypass_scaffold"];
export declare const PRODUCT_COMPLETION_PACK_CHECK_EXPECT_STATUS: "incomplete";
export declare function assertProductCompletionGateIds(gateIds: readonly string[]): asserts gateIds is readonly ProductCompletionGateId[];
