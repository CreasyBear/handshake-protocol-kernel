import { type ProofGap } from "./shared";
export type DistributionProvenanceReadbackInput = {
    readonly generatedAt: string;
    readonly localPackage: {
        readonly name: string;
        readonly version: string;
        readonly mcpName: string;
        readonly serverJsonName: string;
        readonly serverJsonVersion: string;
        readonly exports: readonly string[];
    };
    readonly npmLatest: {
        readonly url: string;
        readonly status: number | null;
        readonly version: string | null;
        readonly tarball: string | null;
        readonly integrity: string | null;
        readonly shasum: string | null;
        readonly signatureCount: number;
        readonly fileCount: number | null;
        readonly exports: readonly string[];
    };
    readonly mcpRegistry: {
        readonly lookupUrl: string;
        readonly lookupStatus: number | null;
        readonly lookupProblemTitle: string | null;
        readonly searchUrl: string;
        readonly searchStatus: number | null;
        readonly searchCount: number | null;
    };
    readonly publishAttempt?: DistributionPublishAttemptReadback;
    readonly evidenceRefs: readonly string[];
    readonly commandRefs: readonly string[];
};
export type DistributionProvenanceReadback = ReturnType<typeof projectDistributionProvenanceReadback>;
export type DistributionPublishAttemptReadback = {
    readonly attempted: boolean;
    readonly commandRef: string;
    readonly status: "not_attempted" | "failed" | "succeeded";
    readonly provenanceRequested: boolean;
    readonly provenanceSupported: boolean | null;
    readonly errorCode: string | null;
    readonly errorMessage: string | null;
    readonly evidenceRef: string | null;
};
export declare function projectDistributionProvenanceReadback(input: DistributionProvenanceReadbackInput): {
    proofKind: "distribution_provenance_readback";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: string;
    scope: string;
    localPackage: {
        exports: string[];
        name: string;
        version: string;
        mcpName: string;
        serverJsonName: string;
        serverJsonVersion: string;
    };
    npmLatest: {
        exports: string[];
        missingLocalExports: string[];
        extraPublishedExports: string[];
        currentSurfacePublished: boolean;
        url: string;
        status: number | null;
        version: string | null;
        tarball: string | null;
        integrity: string | null;
        shasum: string | null;
        signatureCount: number;
        fileCount: number | null;
    };
    mcpRegistry: {
        accepted: boolean;
        discoverable: boolean;
        lookupUrl: string;
        lookupStatus: number | null;
        lookupProblemTitle: string | null;
        searchUrl: string;
        searchStatus: number | null;
        searchCount: number | null;
    };
    publishAttempt: DistributionPublishAttemptReadback | null;
    commandRefs: readonly string[];
    evidenceRefs: readonly string[];
    authorityBoundary: {
        holdsCustody: false;
        hostsOperation: false;
        certifiesMarketplace: false;
        managesSettlement: false;
        managesPayment: false;
        establishesTrust: false;
        enforcesHostWidePolicy: false;
        createsAuthority: false;
        createsPolicyDecision: false;
        createsGreenlight: false;
        performsGatewayCheck: false;
        performsMutation: false;
    };
    proofGaps: ProofGap[];
    nextMechanism: string;
};
