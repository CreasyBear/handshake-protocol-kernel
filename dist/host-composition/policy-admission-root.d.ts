import type { AuthoritySourceStore } from "../protocol/store/authority-source";
import type { ProtocolStore } from "../protocol/store/port";
import { type AuthorityContextHost } from "./authority-context-root";
import { type PolicyAdmissionCapability as ClosedPolicyAdmissionCapability } from "../protocol/areas/policy-greenlight/admission/capability";
import { type ResourceMembershipRegistryInput } from "../protocol/areas/policy-greenlight/admission/resource-membership";
type PolicyAdmissionStore = ProtocolStore & AuthoritySourceStore;
export type PolicyAdmissionCapability = ClosedPolicyAdmissionCapability;
export type PolicyAdmissionHost = Readonly<{
    bindProtocolStoreCarrier(carrier: ProtocolStore): PolicyAdmissionCapability;
}>;
export declare function createPolicyAdmissionHost(options: {
    authorityContextHost: AuthorityContextHost;
    store: PolicyAdmissionStore;
    resourceMembershipRegistry: ResourceMembershipRegistryInput;
}): PolicyAdmissionHost;
export {};
