import type { JsonValue } from "../../foundation/schema-core";
export type ExactConsequenceDescriptor = Readonly<{
    exactConsequenceDescriptorVersion: "exact-consequence-descriptor-1";
    actionContractId: string;
    actionContractDigest: `sha256:${string}`;
    adapterRef: string;
    adapterDigest: `sha256:${string}`;
    effectOperationRef: string;
    payloadDigest: `sha256:${string}`;
}>;
export type ExactConsequenceSelection = Readonly<{
    actionContractId: string;
    actionContractDigest: `sha256:${string}`;
    adapterRef: string;
    adapterDigest: `sha256:${string}`;
    effectOperationRef: string;
    payload: JsonValue;
}>;
export declare function buildExactConsequenceDescriptor(selection: ExactConsequenceSelection): Promise<Readonly<{
    descriptor: ExactConsequenceDescriptor;
    descriptorDigest: `sha256:${string}`;
}>>;
