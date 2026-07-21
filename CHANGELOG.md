# Changelog

All notable public package changes are recorded here.

This changelog tracks the installable `handshake-protocol-kernel` package and
public artifact repository. It does not claim hosted operation, provider
custody, settlement finality, marketplace certification, MCP Registry
discoverability, or Handshake authority from publication alone.

## 0.5.0 - 2026-07-21

### Added

- Source-locked selected-consequence custody with one-use gateway admission,
  durable cutoff, terminal observation, replay refusal, and reconstruction.
- Local process-replacement and real SIGKILL recovery falsifiers, plus the
  named macOS raw-network, sibling-tool, browser, shell, plugin, file, and
  credential-extraction containment probe.
- A buyer-side `x402_payment.exact` local canary pinned to x402 v2, Base USDC,
  EIP-3009, and exact request, payment-requirement, credential, and facilitator binding.

### Boundary Notes

- The selected-consequence host is a private credential-owning execution
  boundary. Authority and custody types remain unexported; the public package
  surface is frozen and projections, receipts, runtime metadata, and package
  availability remain non-authority.
- Local process and macOS probe evidence does not prove provider custody,
  host-wide containment, production topology, settlement finality, hosted
  operation, deployment, or customer value.
- Omitted or unbound x402 typed observation, differently bound x402 surface
  observation, and the unbound auth.md caller surface remain explicit TODO
  proof gaps. They create no authority or release proof.

### Release State

- `ready_to_publish`: candidate only after complete local artifact gates and
  exact packed-byte readback pass.
- `actually_published`, `registry_discoverable`, and `hosted_or_deployed` are
  unverified and not claimed. Distribution never creates Handshake authority.

## 0.4.0 - 2026-06-12

### Added

- Candidate `TypedActionCommitment` source family for composed external
  commitment evidence across `handshake_jcs_typed` Cloud HMAC,
  service-workflow readback, and later EIP-712 profile adapters.
- Required typed commitment set material in policy/gateway binding so policy
  can require refs and a set digest, and gateway checks can refuse mismatched,
  missing, stale, or downgraded observed sets before mutation.
- Public-schema-only package posture for `TypedActionCommitment*Schema`,
  projection schemas, and `RecordTypedActionCommitmentInputSchema` through the
  existing root exports. There is no `./typed-action-commitment` package
  subpath.

### Boundary Notes

- `TypedActionCommitment` is evidence only. It does not create policy
  decisions, greenlights, gateway checks, mutations, receipts, terminal
  certificates, endpoint leases, signer custody, payment custody, principal
  consent, or downstream success.
- Profile normalizers, transition helpers, projectors, store readback, and
  adapter wiring are not public-complete package surfaces in this release
  posture.
- Release `0.4.0` is not claimable from EIP-712 or x402 evidence alone. Promotion
  requires the composed model, Cloud HMAC profile, policy/gateway binding,
  readback/export posture, stores, hostile matrix, and stakeholder
  simplification gate; otherwise the work remains v0.3.1 or draft-only.

## 0.3.0 - 2026-06-01

### Added

- Agentic endpoint-access kernel family for bounded endpoint entry:
  clearance bindings, endpoint leases, usage events, capability/readiness
  posture, and readback projection remain internal source-owned protocol
  surfaces for this version refresh.
- Atomic endpoint lease and usage store primitives across memory and D1 storage,
  including a D1 `greenlightId -> leaseId` claim table and per-lease usage
  counters.
- Focused regression coverage for concurrent lease issuance, cross-scope
  authority record rejection, readback scope mismatches, concurrent usage
  exhaustion, bounded endpoint-access vocabulary, hosted endpoint ref
  hardening, and memory/D1 store atomicity.

### Changed

- Endpoint lease issuance now claims one greenlight atomically before recording
  bounded endpoint entry.
- Endpoint usage accounting now uses bounded compare-and-swap retries and
  records a proof gap when contention cannot be resolved.
- Endpoint readback validates tenant, organization, binding, policy, lease,
  usage, gateway, config, and capability scope before emitting reconstructable
  evidence.
- Lifecycle/navigation vocabulary distinguishes `bounded_endpoint_access` from
  evidence-only readback and from downstream mutation authority.
- Hosted endpoint-access config rejects bearer/key/password/private-key and
  secret-like refs before readiness can echo them.

### Boundary Notes

- This release does not add downstream mutation authority to endpoint access.
  Every downstream protected mutation still requires its own exact action
  contract, policy decision, one-use greenlight, gateway check, and terminal
  receipt/refusal/proof gap.
- The new endpoint-access family remains an internal kernel primitive in
  `0.3.0`; it is not a root export, hosted operation claim, MCP Registry
  acceptance claim, or provider custody claim.

## 0.2.9 - 2026-05-30

### Added

- Handshake-owned delegation evidence verifier at `src/integrations/a1-evidence/`
  (Ed25519 zip215 + BLAKE3, conformance vectors, parent-swap resistance).
- Optional `delegationEvidenceRef` on candidate actions and
  `ReceiptExport.delegationProvenance` — separable from gateway check and
  downstream outcome (KILL-08).
- Agent-native runtime ingress: committed refusals surfaced in
  `refusalRefs`; malformed wire returns structured refusal instead of throw
  (D-76).
- Downgrade-only delegation evidence policy hook and compilation-phase proof
  gaps for required-but-unverifiable evidence.
- MCP read-only tool `handshake.evidence.delegation.verify` — offline chain
  verify with explicit non-authority outcome (D-75: no mint/authorize tools).

### Changed

- Delegation evidence domains re-namespaced to `handshake::delegation::*::v1`
  (D-74); A1 wire interop is not a goal.
- MCP catalog lists read-only verify before x402 proposal tool; stdio server
  registration order unchanged for proposal-first harness flows.

### Boundary Notes

- Delegation evidence verifies provenance when policy requires it. Valid
  evidence alone never creates a greenlight or substitutes for gateway check.
- This release does not add A1 gateway HTTP, `VerifiedToken` clearance, or
  ambient delegation authority.

## 0.2.8 - 2026-05-29

### Added

- Service-agent gating phase: operator and full tier architecture gates,
  `check:service-agent-gating-phase` scripts, service-operator golden path and
  bootstrap examples, dual-enforcement posture tests, and HTTP mutation-route
  manifest gating.
- FailureClass taxonomy with registry-first derivation across HTTP transitions,
  SDK role clients, and MCP failure surfaces.
- x402 gateway-held credential custody (Mechanism A): signer unreachable without
  passed gateway check and gateway-resolved redacted evidence.
- Product coherence phase: unified readback spine, intent-compilation projection
  rows, forbidden-copy lint, keel-integrity audit, and claim-boundary fixes
  across CLI, SDK, and MCP surfaces.
- Service-operator and host-operator runbooks, integrator parity docs, and
  persona golden paths under internal docs.

### Changed

- Renamed service-agent integration vocabulary to service-operator where
  product surfaces describe Branch A bootstrap and maintenance flows.
- Root SDK re-export of role clients for one-import agent ergonomics without a
  factory wrapper.
- Product launch gate and proof-packet fixtures track `0.2.8` as the current
  package surface after Phase 04+05 land.

### Boundary Notes

- This release does not broaden authority. The public package remains proposal,
  evidence, conformance, SDK, CLI, and local MCP distribution only.
- Service-agent gating proves structural dual enforcement and FailureClass
  parity; it does not claim hosted operation, provider custody, or universal
  agent governance.
- MCP Registry discoverability remains a proof gap until registry acceptance
  and lookup are verified.
- Public npm availability does not create authority.

### Release State

- `ready_to_publish`: verified locally by repo gates and package projection.
- `actually_published`: verified by maintainer passkey publish from source
  checkout, npm registry readback for `0.2.8`, and registry signature metadata.
  Artifact-repo trusted-publish workflow and clean installed-artifact smoke remain
  to reconcile when `handshake-protocol-kernel` is re-projected from this source
  state.
- `registry_discoverable`: pending MCP Registry acceptance and lookup.

## 0.2.7 - 2026-05-25

### Changed

- Replaced the long npm-facing README with a shorter contract README focused on
  install, first-use, MCP, SDK imports, the current x402 wedge, release proof
  states, and explicit non-claims.
- Published a package-page cleanup release so npm no longer carries the stale
  `0.2.6` pre-publish sentence.
- Kept the public repository as a package artifact repository, not a source
  mirror.

### Boundary Notes

- This release does not broaden authority. The public package remains proposal,
  evidence, conformance, SDK, CLI, and local MCP distribution only.
- MCP Registry discoverability remains a proof gap until registry acceptance
  and lookup are verified.
- Public npm availability does not create authority.

### Release State

- `ready_to_publish`: verified locally by repo gates and package projection.
- `actually_published`: verified by npm trusted-publish workflow, npm registry
  readback, registry signature metadata, provenance publication, and clean
  installed-artifact smoke.
- `registry_discoverable`: pending MCP Registry acceptance and lookup.

## 0.2.6 - 2026-05-25

### Added

- Added the `./x402-protected-tool` package subpath for the protected x402
  proposal facade and host profile descriptors.
- Added the `./adapter-sdk` package subpath for definition-only protected-action
  adapter pack authoring and install-proposal report projection.
- Added role-scoped SDK clients for install setup, delegated-authority control,
  exact policy evaluation, gateway-custody transition transport, runtime
  proposal, and redacted evidence readback.
- Added local x402 install/probe/readiness CLI commands and clean
  installed-artifact activation checks.
- Added public package-artifact repository projection with a trusted-publish
  GitHub Actions workflow for npm provenance publishing.

### Changed

- Renamed the MCP package identity to
  `io.github.CreasyBear/handshake-protocol-kernel`.
- Rewrote the package README around the public artifact boundary, authority
  cut lines, x402 protected-action wedge, MCP server posture, trusted
  publishing, and release proof states.
- Tightened package-surface checks so the npm artifact remains limited to
  runtime bundles, binaries, metadata, README, license notices, and this
  changelog.
- Expanded protocol evidence around delegated spend authority, gateway custody
  proof packets, replay refusal, proof gaps, and protected-tool host profiles.

### Boundary Notes

- The official public package wedge remains one buyer-side
  `x402_payment.exact` per-call protected action.
- The MCP server remains proposal/evidence only. It does not create policy
  decisions, greenlights, gateway checks, payment material, mutations, receipt
  exports, AuthorityCertificates, hosted operation, or provider custody.
- Public npm availability does not create authority.
- MCP Registry discoverability remains a proof gap until registry acceptance
  and lookup are verified.
- An `AuthorityCertificate` remains terminal evidence, not permission,
  identity, settlement, hosted trust, or reusable auth.

### Release State

- `ready_to_publish`: verified locally by repo gates and package projection.
- `actually_published`: verified by npm trusted-publish workflow, npm registry
  readback, registry signature metadata, provenance publication, and clean
  installed-artifact smoke.
- `registry_discoverable`: pending MCP Registry acceptance and lookup.

## 0.2.5 - 2026-05-24

### Added

- Published the first public npm package artifact for
  `handshake-protocol-kernel`.
- Added bundled runtime, CLI, MCP, conformance, SDK, and experimental reference
  entrypoints under `dist/`.
- Added local JSON-output CLI evidence/readiness commands and local stdio MCP
  proposal/evidence server binaries.

### Boundary Notes

- Public npm `0.2.5` established distribution evidence only.
- The package did not claim hosted operation, provider custody, broad x402
  compatibility, broad MCP control, settlement finality, marketplace
  certification, or cross-org certificate trust.
