import type { JsonValue } from "../../foundation/schema-core";
import { type AuthorityCertificate, type AuthorityCertificateSignatureEntry, type ParsedAuthorityCertificateSignerInput } from "./types";
export type AuthorityCertificateSigningInput = JsonValue;
export declare function buildAuthorityCertificateSigningInput(certificate: Pick<AuthorityCertificate, "schemaVersion" | "tenantId" | "organizationId" | "createdAt" | "authorityCertificateId" | "authorityCertificateVersion" | "canonicalizerVersion" | "terminalizedAt" | "terminal" | "envelope" | "envelopeDigest" | "artifacts" | "verificationPolicy" | "consumerBindings" | "extensions" | "emittedAt">): AuthorityCertificateSigningInput;
export declare function authorityCertificateSigningInputDigest(certificate: Parameters<typeof buildAuthorityCertificateSigningInput>[0]): Promise<`sha256:${string}`>;
export declare function signAuthorityCertificateSigningInput(signingInput: AuthorityCertificateSigningInput, signedOver: `sha256:${string}`, signer: ParsedAuthorityCertificateSignerInput): Promise<AuthorityCertificateSignatureEntry>;
export declare function verifyAuthorityCertificateSignature(input: {
    signingInput: AuthorityCertificateSigningInput;
    signature: AuthorityCertificateSignatureEntry;
    publicKeyEd25519?: string | null;
    hmacSecret?: string | null;
}): Promise<boolean>;
