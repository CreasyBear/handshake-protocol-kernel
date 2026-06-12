import type { AgenticEndpointAccessReadback } from "./contracts";
import type { AgenticEndpointAccessConsumerReadback } from "../../surfaces/agentic-endpoint-access-readback";
import type { ProtocolStore } from "../../protocol/store/port";
import { type AgenticEndpointAccessConfigSnapshot, type AgenticEndpointAccessForwardedEvent, type AgenticEndpointAccessProtectionOutcome } from "./contracts";
import type { AgenticEndpointAccessCloudEventIngest, AgenticEndpointAccessCloudIngestResult } from "./cloud-adapter";
import type { AgenticEndpointAccessLocalStore } from "./local-store";
export type AgenticEndpointAccessReadbackForwardingResult = {
    readonly readback: AgenticEndpointAccessReadback;
    readonly consumerReadback: AgenticEndpointAccessConsumerReadback;
    readonly event: AgenticEndpointAccessForwardedEvent;
    readonly cloudResult: AgenticEndpointAccessCloudIngestResult | null;
};
export declare function forwardAgenticEndpointAccessReadback(input: {
    readonly protocolStore: ProtocolStore;
    readonly localStore: AgenticEndpointAccessLocalStore;
    readonly outcome: AgenticEndpointAccessProtectionOutcome;
    readonly snapshot: AgenticEndpointAccessConfigSnapshot;
    readonly healthReportRef: string;
    readonly publicVerifyUrl: string;
    readonly cloudAdapter?: AgenticEndpointAccessCloudEventIngest;
    readonly linkedReceiptRefs?: readonly string[];
    readonly linkedProofGapRefs?: readonly string[];
    readonly createdAt?: string;
}): Promise<AgenticEndpointAccessReadbackForwardingResult>;
