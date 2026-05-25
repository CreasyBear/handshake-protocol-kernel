import type { Greenlight, PolicyDecision } from "../policy-greenlight";
import { type TransitionGuardResult } from "../../foundation/transition-guards";
export declare function guardGatewayCheckAuthority(greenlight: Greenlight, policyDecision: PolicyDecision): TransitionGuardResult;
