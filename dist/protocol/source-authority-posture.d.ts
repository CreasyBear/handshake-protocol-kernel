import type { ProtocolStore } from "./store/port";
/**
 * Monotonic denial posture for source-issued authority whose gateway-side
 * consumption path has not landed yet. Marking can only remove authority; no
 * inverse operation exists.
 */
export declare function markSourceAuthorityGatewayBlocked(carrier: ProtocolStore): void;
export declare function assertSourceAuthorityGatewayReady(carrier: ProtocolStore): void;
