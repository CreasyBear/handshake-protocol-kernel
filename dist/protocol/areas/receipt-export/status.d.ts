import type { Receipt } from "./types";
export declare function deriveGatewayAdmissionStatus(input: Pick<Receipt, "gatewayCheckStatus" | "greenlightConsumptionStatus">): Receipt["gatewayAdmissionStatus"];
export declare function deriveDownstreamOutcomeStatus(input: Pick<Receipt, "downstreamExecutionStatus">): Receipt["downstreamOutcomeStatus"];
