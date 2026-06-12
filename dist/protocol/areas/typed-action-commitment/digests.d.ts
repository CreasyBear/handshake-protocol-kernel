import { type TypedActionCommitmentSummary } from "./types";
export declare function commitmentDigest(recordMaterial: unknown): Promise<`sha256:${string}`>;
export declare function normalizeTypedCommitmentSummary(value: unknown): TypedActionCommitmentSummary;
export declare function commitmentSetDigest(summaries: unknown[]): Promise<`sha256:${string}`>;
