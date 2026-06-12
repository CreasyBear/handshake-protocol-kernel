import type { ActionContract } from "../areas/action-contract";
import { type ContractStreamEvent } from "./schemas";
import type { ReceiptStreamReference } from "../areas/receipt-export";
import { type JsonValue } from "../foundation/schema-core";
import type { ProtocolStore } from "../store/port";
export type ActionLifecycleStreamRefs = {
    actionContractId: string;
    runId: string;
    gatewayId: string;
    resourceRef: string;
};
export type EventDescriptor = {
    source: {
        tenantId: string;
        organizationId: string;
        createdAt: string;
    };
    eventType: ContractStreamEvent["eventType"];
    objectRefs: string[];
    payload: Record<string, JsonValue>;
    streamRefs?: ActionLifecycleStreamRefs;
};
export declare function buildEventChain(store: ProtocolStore, descriptors: EventDescriptor[]): Promise<ContractStreamEvent[]>;
export declare function actionLifecycleStreamRefs(contract: Pick<ActionContract, "actionContractId" | "runId" | "gatewayId" | "resourceRef">): ActionLifecycleStreamRefs;
export declare function actionLifecycleStreamKey(source: {
    tenantId: string;
    organizationId: string;
}, actionContractId: string): {
    streamId: string;
    partitionKey: string;
};
export declare function receiptStreamReferencesForEvents(events: ContractStreamEvent[]): ReceiptStreamReference[];
