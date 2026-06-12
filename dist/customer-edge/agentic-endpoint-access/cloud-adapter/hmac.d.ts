export type AgenticEndpointAccessHmacBinding = {
    readonly method: string;
    readonly route: string;
    readonly endpointId: string;
    readonly tenantId: string;
    readonly organizationId: string;
    readonly deliveryNonce: string;
};
export type AgenticEndpointAccessHmacInput = {
    readonly rawBody: string | Uint8Array;
    readonly secret: string;
    readonly timestamp: string;
    readonly keyId?: string;
    readonly binding?: AgenticEndpointAccessHmacBinding;
};
export type AgenticEndpointAccessHmacVerificationInput = AgenticEndpointAccessHmacInput & {
    readonly signature: string;
    readonly nowMs?: number;
    readonly toleranceSeconds?: number;
};
export declare function signAgenticEndpointAccessHmac(input: AgenticEndpointAccessHmacInput): Promise<string>;
export declare function verifyAgenticEndpointAccessHmac(input: AgenticEndpointAccessHmacVerificationInput): Promise<{
    ok: true;
} | {
    ok: false;
    reasonCode: string;
}>;
