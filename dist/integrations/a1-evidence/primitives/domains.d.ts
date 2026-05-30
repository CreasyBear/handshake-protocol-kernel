/** Handshake-owned BLAKE3 domain separators (structure from MIT-licensed A1 reference; not A1-interoperable). */
export declare const DOMAIN_CERT_SIG = "handshake::delegation::cert::sig::v1";
export declare const DOMAIN_CERT_FP = "handshake::delegation::cert::fp::v1";
export declare const DOMAIN_CHAIN_FP = "handshake::delegation::chain::fp::v1";
export declare const DOMAIN_INTENT_LEAF = "handshake::delegation::intent::leaf::v1";
export declare const DOMAIN_MERKLE_NODE = "handshake::delegation::merkle::node::v1";
export declare const DOMAIN_SUBSCOPE = "handshake::delegation::subscope::commit::v1";
export declare const DOMAIN_CERT_EXT = "handshake::delegation::cert::ext::v1";
/** Inline UTF-8 preimage tags (mirror A1 dual-layer pattern where inner ≠ derive_key context). */
export declare const INNER_CERT_SIG = "handshake::delegation::cert::sig::v1";
export declare const INNER_CERT_FP = "handshake::delegation::cert::fp::v1";
export declare const INNER_CHAIN_FP = "handshake::delegation::chain::v1";
export declare const INNER_INTENT_LEAF = "handshake::delegation::intent::v1";
export declare const INNER_SUBSCOPE = "handshake::delegation::subscope::v1";
export declare const INNER_CERT_EXT = "handshake::delegation::cert::ext::v1";
export declare const DOMAIN_PK_FP = "handshake::delegation::pk::fp::v1";
export declare const DOMAIN_VERIFY_OUTCOME = "handshake::delegation::verify_outcome::v1";
export declare const CERT_VERSION = 1;
export declare const A1_VERIFIER_VERSION = "handshake-delegation-1.0.0-zip215";
