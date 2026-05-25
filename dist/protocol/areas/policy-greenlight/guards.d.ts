import type { ActionContract } from "../action-contract";
import type { OperatingEnvelope } from "../catalog-envelope";
import type { Greenlight } from "./types";
import { type TransitionGuardResult } from "../../foundation/transition-guards";
export declare function guardPolicyEvaluation(contract: ActionContract, envelope: OperatingEnvelope): TransitionGuardResult;
export declare function guardGreenlightIssuance(contract: ActionContract, existingGreenlights: Greenlight[]): TransitionGuardResult;
