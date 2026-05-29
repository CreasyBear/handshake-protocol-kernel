export declare const GENERIC_HTTP_PROFILE_GATEWAY_POSTURE: "definition_only";
export type GenericHttpProfileGatewaySkeletonResult = {
    posture: typeof GENERIC_HTTP_PROFILE_GATEWAY_POSTURE;
    proofGapCode: "generic_http_profile_live_mutation_forbidden";
    message: string;
};
export declare function runGenericHttpProfileGatewaySkeleton(input: unknown): GenericHttpProfileGatewaySkeletonResult;
