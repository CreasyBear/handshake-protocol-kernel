export declare function verifyCertificateCommand(input: {
    certificate: unknown;
    trustMaterial: unknown;
}): Promise<import("./output").CliOutputEnvelope<{
    verificationOutcome: "proof_gap" | "refused" | "verified";
    signingInputDigest: string | null;
    actionClass: string | null;
    receiptRef: string | null;
    checks: {
        schema: "proof_gap" | "passed" | "failed";
        cryptographicSignature: "proof_gap" | "passed" | "failed";
        signingInputDigest: "proof_gap" | "passed" | "failed";
        artifactBinding: "proof_gap" | "passed" | "failed";
        terminalBinding: "proof_gap" | "passed" | "failed";
        gatewayAdmissionBinding: "proof_gap" | "passed" | "failed";
        trustMaterial: "proof_gap" | "passed" | "failed";
        status: "proof_gap" | "passed" | "failed";
    };
    failureCodes: ("schema_invalid" | "envelope_digest_mismatch" | "signing_input_digest_mismatch" | "signature_signed_over_mismatch" | "signature_algorithm_mismatch" | "hmac_not_allowed" | "trust_key_missing" | "trust_key_inactive" | "trust_issuer_unknown" | "trust_key_role_mismatch" | "trust_key_retired" | "trust_key_revoked" | "trust_key_stale" | "trust_status_unavailable" | "trust_key_window_invalid" | "trust_certificate_status_revoked" | "trust_certificate_status_stale" | "signature_invalid" | "required_signer_missing" | "required_artifact_missing" | "gateway_admission_binding_missing" | "terminal_binding_mismatch")[];
    failureRefs: (string | null)[];
}>>;
