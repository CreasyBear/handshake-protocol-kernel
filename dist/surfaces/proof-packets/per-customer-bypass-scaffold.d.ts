/**
 * Phase-04 D-25 deferred lane — per-customer service-workflow-admission bypass scaffold (D-54).
 * Dogfood shape only; never marks product completion for un-onboarded integrators.
 */
export type PerCustomerBypassScaffoldInput = {
    readonly generatedAt: string;
    readonly commandRefs: readonly string[];
    readonly customerOnboardingRef: string | null;
    readonly firstPartyDogfoodCustomerId: string | null;
};
export type PerCustomerBypassScaffoldReadback = ReturnType<typeof projectPerCustomerBypassScaffoldReadback>;
export declare function projectPerCustomerBypassScaffoldReadback(input: PerCustomerBypassScaffoldInput): {
    proofKind: "per_customer_bypass_scaffold";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: "blocked" | "observed_scaffold_only";
    customerOnboardingRef: string | null;
    proofGaps: import("./shared").ProofGap[];
    commandRefs: readonly string[];
    authorityBoundary: {
        createsAuthority: false;
        createsPolicyDecision: false;
        createsGreenlight: false;
        performsGatewayCheck: false;
        permitsMutation: false;
        exportsReceipt: false;
        mintsTerminalCertificate: false;
        containsCredentialMaterial: false;
        containsPaymentMaterial: false;
        widensOperatingEnvelope: false;
        isReusableAuth: false;
        isGatewayBinding: false;
        freshActionContractRequired: true;
        performsMutation: false;
    };
    nextMechanism: string;
};
