import { type GatewayCheckInput } from "./types";
import { type GatewayCheckResult } from "./artifacts";
import type { ProtocolRecorder } from "../../events/records";
import type { ProtocolStore } from "../../store/port";
export type { GatewayCheckResult } from "./artifacts";
export declare function gatewayCheck(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: GatewayCheckInput): Promise<GatewayCheckResult>;
