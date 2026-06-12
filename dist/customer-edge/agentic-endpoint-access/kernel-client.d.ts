import { type AgenticEndpointAccessAttempt } from "./contracts";
import type { AgenticEndpointAccessLeaseIssueResult, AgenticEndpointAccessUsageResult, IssueAgenticEndpointAccessLeaseInput, RecordAgenticEndpointAccessUsageEventInput } from "../../protocol/areas/agentic-endpoint-access";
import type { HandshakeKernel } from "../../protocol/kernel";
import type { ProtocolStore } from "../../protocol/store/port";
export interface AgenticEndpointAccessKernelClient {
    persistAttempt(attempt: AgenticEndpointAccessAttempt): Promise<void>;
    issueEndpointAccessLease(input: IssueAgenticEndpointAccessLeaseInput): Promise<AgenticEndpointAccessLeaseIssueResult>;
    recordEndpointAccessUsage(input: RecordAgenticEndpointAccessUsageEventInput): Promise<AgenticEndpointAccessUsageResult>;
}
export type AgenticEndpointAccessKernelClientInput = {
    readonly protocolStore: ProtocolStore;
    readonly kernel: Pick<HandshakeKernel, "issueAgenticEndpointAccessLease" | "recordAgenticEndpointAccessUsageEvent">;
};
export declare function createAgenticEndpointAccessKernelClient(input: AgenticEndpointAccessKernelClientInput): AgenticEndpointAccessKernelClient;
