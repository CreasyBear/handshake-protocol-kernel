import type { ActionContract } from "../action-contract";
import type { PolicyDecision } from "../policy-greenlight";
import { type TransitionGuardResult } from "../../foundation/transition-guards";
export declare function guardReviewDecision(contract: ActionContract, policyDecision: PolicyDecision): TransitionGuardResult;
