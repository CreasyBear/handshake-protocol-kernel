export type HandshakeTransportUrlOptions = {
    readonly allowInsecureLocalTransport?: boolean;
};
export declare function handshakeTransportUrl(baseUrl: string, path: string, options?: HandshakeTransportUrlOptions): URL;
