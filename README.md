# Handshake Protocol Kernel

Handshake is protected action infrastructure for automated decision making.
The category is protected actions for automated decision making.

This package is the installable protocol kernel, CLI, MCP proposal server, and
typed SDK surface for reducing one consequential automated action to an exact
action contract, evaluating that contract, checking the exact greenlight at the
gateway before mutation, and preserving reconstructable terminal evidence.

```text
vague principal intent
-> generated execution evidence
-> candidate action
-> exact action contract
-> policy decision
-> one-use greenlight or refusal
-> gateway check before mutation
-> receipt, refusal, replay refusal, or proof gap
-> optional terminal AuthorityCertificate
```

Handshake is not generic agent auth, not tracing, not a review UI, not a
settlement rail, not hosted custody, not marketplace certification, and not
host-wide sandbox containment. A path is protected only when the gateway owns
the mutation credential and verifies the exact one-use greenlight before the
mutation attempt.

Product and protocol terms:

- `cleared protected-action event`: one specific terminal Handshake event with
  reconstructable evidence. It is not settlement, permission, or generic agent
  trust.
- `protocol kernel`: the state machine and schema set that records exact
  contracts, policy decisions, one-use greenlights, gateway checks, receipts,
  refusals, proof gaps, isolation, and optional terminal certificates.
- `product surface`: CLI, MCP, SDK, docs, demo, or service-facing experience
  that exposes proposal, evidence, and readback without creating authority.
- `AuthorityCertificate`: terminal evidence for one event. The certificate is
  terminal evidence, not permission, identity, settlement, hosted trust, or
  reusable auth.

Certificate is terminal evidence, not permission.

Public npm availability does not create authority. MCP Registry discoverability
remains a proof gap until registry acceptance and lookup are verified.

## Status

- Package: `handshake-protocol-kernel`
- Current artifact version: `0.2.6`
- MCP server name: `io.github.CreasyBear/handshake-protocol-kernel`
- License: Apache-2.0
- Runtime: Node.js `>=20`
- Public repository form: package artifact repository, not source mirror

The public repository is intentionally shaped like the npm package:

```text
.github/workflows/trusted-publish.yml
.handshake-release-repository-manifest.json
bin/
dist/
CHANGELOG.md
LICENSE
NOTICE
README.md
package.json
server.json
```

The public repository must not contain private source or source-workbench
folders such as `src/`, `test/`, `scripts/`, `examples/`, `docs/`,
`.planning/`, `.agents/`, `migrations/`, `node_modules/`, or local planning
artifacts. If those appear in the public repository, the release boundary has
failed.

## Install

Use the package after the target version has been published to npm:

```bash
npm install handshake-protocol-kernel
```

For one-shot CLI checks without installing globally:

```bash
npm exec --package handshake-protocol-kernel -- handshake schema
npm exec --package handshake-protocol-kernel -- handshake conformance x402-payment
```

For a global operator install:

```bash
npm install -g handshake-protocol-kernel
handshake schema
```

The package exposes three binaries:

| Binary                      | Purpose                                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `handshake`                 | Human/operator CLI for schema, local readiness, conformance, evidence readback, support bundles, and certificate verification. |
| `handshake-mcp`             | Local stdio MCP server for model-facing x402 proposal/evidence.                                                                |
| `handshake-protocol-kernel` | Alias to the MCP stdio server so package-name execution starts the MCP server.                                                 |

## First Checks

After install, start with non-mutating checks:

```bash
handshake schema
handshake conformance x402-payment
handshake init --cwd .
handshake doctor --cwd .
```

These commands do not evaluate policy, create a greenlight, perform a gateway
check, resolve credentials, sign payment material, mutate a protected surface,
export a receipt, or mint an AuthorityCertificate.

Installed x402 first-use ladder:

```bash
handshake init --cwd .
handshake doctor --cwd .
handshake install x402-payment ./install.x402-payment.json --record-local
handshake probes x402-payment ./x402-posture.json --record-local
handshake register x402-gateway-readiness ./x402-gateway-readiness.json --record-local
handshake install health --cwd .
handshake-mcp
```

This establishes local proposal readiness only. The authority path remains
separate: runtime proposal, policy evaluation, exact gateway check, then
terminal evidence.

These installed first-use commands do not create policy decisions, greenlights,
gateway checks, payment material, mutations, receipts, or certificates.

## MCP Server

`server.json` declares one npm/stdio MCP package:

```json
{
  "name": "io.github.CreasyBear/handshake-protocol-kernel",
  "packages": [
    {
      "registryType": "npm",
      "identifier": "handshake-protocol-kernel",
      "transport": { "type": "stdio" }
    }
  ]
}
```

For an MCP host that accepts command/args configuration:

```json
{
  "mcpServers": {
    "handshake-protocol-kernel": {
      "command": "npx",
      "args": ["-y", "handshake-protocol-kernel"]
    }
  }
}
```

The MCP server exposes one proposal tool:

```text
handshake.actions.x402_payment.propose
```

It also exposes read-only metadata, challenge, health, contract, envelope,
receipt timeline, idempotency, and certificate-reference resources. The MCP
server is proposal/evidence only. It does not issue policy decisions,
greenlights, gateway checks, mutations, signer calls, receipt exports,
AuthorityCertificates, hosted operation, broad MCP protection, or provider
custody.

## Package Imports

Root import:

```ts
import { HandshakeClient, verifiedGatewayCheckFromResult, verifyAuthorityCertificate } from "handshake-protocol-kernel";
```

Role-scoped clients:

```ts
import {
  ControlPlaneClient,
  EvidenceClient,
  GatewayClient,
  InstallClient,
  PolicyClient,
  RuntimeClient,
} from "handshake-protocol-kernel/sdk/role-clients";
```

Use this subpath for install setup, delegated-authority lifecycle management,
exact policy evaluation, runtime proposal, gateway-custody transition transport,
and redacted evidence readback. The package root still exposes the lower-level
`HandshakeClient` for route parity and integration tests, but first-slice
activation should teach role-scoped clients first.

`InstallClient` performs one server-side setup commit, not hosted installation
authority. It can register compiled catalog, gateway-registry, and
operating-envelope records from a ready install proposal. It cannot evaluate
policy, create greenlights, perform gateway checks, resolve credentials,
mutate, export receipts, or mint certificates.

`PolicyClient.evaluatePolicy()` evaluates one exact action contract and may
record one policy decision plus one-use greenlight or refusal. It cannot
perform the gateway check or mutate the protected surface.

Runtime proposal helpers:

```ts
import {
  proposeRuntimeIngressActionContracts,
  RuntimeIngressDispatchBlockSchema,
} from "handshake-protocol-kernel/runtime";
```

Adapter authoring:

```ts
import {
  defineProtectedActionAdapterPack,
  projectAdapterSdkInstallProposalReport,
} from "handshake-protocol-kernel/adapter-sdk";
```

Use `adapter-sdk` for third-party protected-action adapter packs and
install-proposal shape review. It is definition-only: not an install client,
not a gateway client, not a policy evaluator, not certification, and not a
mutation runner.

X402 protected-tool facade and host profile descriptors:

```ts
import {
  buildProtectedX402ToolHostProfile,
  prepareProtectedX402ToolDispatch,
  X402ProtectedToolReadinessSnapshotSchema,
} from "handshake-protocol-kernel/x402-protected-tool";
```

Conformance:

```ts
import { evaluateX402PaymentInstallConformance } from "handshake-protocol-kernel/conformance";
```

Experimental reference fixtures live behind the explicit `experimental` export.
Do not treat that export as a production authority surface.

## Authority Boundary

Handshake separates surfaces that often get blurred:

| Surface           | What it can do                                                                                      | What it cannot do                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Runtime proposal  | Record generated execution evidence and propose exact action contracts.                             | It cannot authorize, greenlight, mutate, or prove the principal understood every implication. |
| Policy evaluation | Decide one exact action contract and possibly create one one-use greenlight.                        | It cannot perform the gateway check or prove downstream finality.                             |
| Gateway check     | Verify the exact greenlight and observed parameters immediately before mutation.                    | It cannot reuse a greenlight or broaden authority beyond the exact contract.                  |
| Evidence readback | Project redacted contract, receipt, refusal, proof-gap, and certificate evidence.                   | It cannot create authority, mutate, or expose raw credential material.                        |
| MCP server        | Let a model propose one exact x402 protected action and read evidence.                              | It cannot create policy decisions, gateway checks, payment payloads, or mutations.            |
| CLI               | Inspect schema, local readiness, conformance, redacted evidence, support bundles, and certificates. | It cannot perform hidden mutation authority or turn local readiness into hosted enforcement.  |

If a review screen is not structurally bound to the exact action contract, it
is review theatre. If a greenlight can be reused, it is ambient authority
wearing a badge. If the receipt cannot distinguish gateway check from
downstream finality, it is evidence theatre.

## Current Wedge

The first official package wedge is one buyer-side `x402_payment.exact`
per-call protected action.

The local/source-owned proof path is a narrow official x402 exact buyer-side
proof path. It covers one official buyer-side `exact` per-call path and keeps
gateway-held payment material behind the exact gateway check.

Supported posture:

- exact upstream x402 payment requirement evidence;
- explicit selected requirement index and digest;
- bound delegated spend authority reference;
- bound wallet-signer credential reference;
- pre-contract local readiness and bypass posture;
- runtime proposal through MCP or SDK;
- policy decision over one exact action contract;
- gateway-held payment material only after `VerifiedGatewayCheck`;
- replay refusal for consumed greenlights;
- proof gaps when downstream finality is unknown.

Cut lines:

- no aggregate payment-budget management;
- no seller middleware;
- no facilitator operation claim;
- no broad x402 compatibility claim;
- no live provider custody claim from the package alone;
- no hosted operation claim from npm installation;
- no host-wide MCP/browser/shell/package-manager containment;
- no settlement-finality guarantee.

Additional source-owned proof coverage exists outside this public artifact
repository: package-install material adapter pack evidence/report projection,
the first promoted non-payment adapter pack after x402 exact per-call, a
package-manager local host-specific bypass manifest/proof-packet/report, public
runtime ingress for local x402 payment and package-install dispatch boundaries,
and a source-owned local MCP stdio proposal/evidence process proof. In the
private source workbench these are exercised by commands such as
`npm run demo:self-hosted`; the public artifact repository does not ship those
source examples.

Source workbench proof packets:

| Source command             | Output                                             | Boundary                                                                                                       |
| -------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `npm run demo:self-hosted` | `examples/self-hosted-activation/output/latest.md` | Self-hosted activation packet with real local MCP stdio proposal/evidence process proof; not hosted operation. |
| `npm run demo:aps`         | `examples/x402-protected-spend/output/latest.md`   | Local x402 protected-spend report; not hosted operation and not broad x402 compatibility.                      |
| `npm run demo:adapter-sdk` | `examples/external-adapter-sdk/output/latest.md`   | Definition-only adapter authoring packet; not policy evaluation, not gateway check, and not mutation.          |

Sample JSON for readback should come from source-owned demos and schemas, not
handwritten copies.

No adapter family defines the protocol. This package is not broad x402
compatibility, not live provider custody, hosted mutation authority, production
hosted readiness, generic MCP/runtime control, host-wide containment,
package-manager ecosystem protection, package safety proof, npm audit
replacement, Bun provenance verification, external package-material
attestation, cross-org AuthorityCertificate trust, remote JWKS trust fetching,
live revocation authority, facilitator operation, seller middleware,
unsupported x402 schemes, marketplace certification, or compliance-grade audit.
Aggregate payment-budget management is intentionally outside the current remit.

## Evidence And Certificates

An `AuthorityCertificate` is terminal evidence for one event. It is not
permission, identity, settlement, hosted trust, reusable auth, or a future
greenlight. Verification works only against pinned trust material supplied by
the verifier.

Evidence projections are redacted. Raw credential material, raw payment
payloads, signer secrets, bearer tokens, and internal-only records must not be
treated as package readback output.

Useful CLI readback commands:

```bash
handshake evidence aps-report ./aps-report-input.json
handshake evidence contract-view ./contract-view-input.json
handshake evidence receipt-timeline ./receipt-timeline-input.json
handshake support bundle ./support-bundle-input.json
handshake cert verify ./certificate.json --trust-bundle ./trust-bundle.json
```

Inputs are explicit JSON evidence packets produced by a host, control plane, or
source-owned integration. The public artifact repository does not ship private
demo fixtures or source examples.

## Trusted Publishing

This repository is intended to be published through npm Trusted Publishing from
GitHub Actions.

MCP Registry discoverability is now a launch blocker. current `0.2.6` checkout
has additional local product surface and must be republished before external
release language can claim `0.2.6` npm availability.

Configure the npm package trusted publisher with:

```text
Package: handshake-protocol-kernel
Repository owner: CreasyBear
Repository name: handshake-protocol-kernel
Workflow filename: trusted-publish.yml
Environment: none, unless an npm environment is deliberately configured
```

Then run the GitHub Actions workflow `trusted-publish` with:

```text
expected_version = 0.2.6
```

The workflow checks:

- `package.json` version matches the requested version;
- private source directories are absent from the public repository;
- package imports and CLI schema smoke checks pass;
- npm publishes with provenance using the GitHub OIDC identity.

Publishing the npm package is distribution evidence only. It does not create
Handshake authority, policy decisions, greenlights, gateway checks, mutations,
custody, settlement, hosted operation, MCP Registry acceptance, marketplace
certification, or trust in any particular deployment.

Release proof states:

- `ready_to_publish`: package shape, metadata sync, smoke checks, provenance
  posture, license posture, and authority-boundary checks have local evidence.
- `actually_published`: npm publish has occurred for the exact package and
  version, and installed-artifact readback has passed.
- `registry_discoverable`: MCP Registry metadata has been accepted and lookup
  for `io.github.CreasyBear/handshake-protocol-kernel` has been verified.

## MCP Registry

MCP Registry discoverability is separate from npm publication.

The package provides `server.json`, but registry acceptance and lookup must be
verified independently. Until registry lookup succeeds for
`io.github.CreasyBear/handshake-protocol-kernel`, MCP Registry discoverability
is a proof gap, not a release success claim.

## Public Repository Contract

This public repository is not the private development workbench. It is the
artifact repository used for package inspection, trusted publishing, and MCP
metadata.

It should remain boring:

- no private source tree;
- no tests or internal planning docs;
- no source-only scripts;
- no generated demo outputs;
- no node_modules;
- no hidden credential material;
- no claim that the repository itself protects anything.

The only mutation this repository should perform is trusted publication of the
already projected package artifact through the pinned workflow.

## Failure Posture

Handshake treats refusal and proof gaps as product outcomes:

- stale metadata -> reload evidence before proposing;
- changed observed parameters -> create a new exact contract;
- raw sibling path reachable -> stop and record bypass/proof evidence;
- delegated authority revoked or expired -> isolate the authority ref;
- credential ref stale or isolated -> refuse before signer use;
- greenlight consumed -> replay refusal, not retry authority;
- downstream finality unknown -> proof gap, not success.

Reason-code runbook:

| Signal                                            | Next mechanism                                    |
| ------------------------------------------------- | ------------------------------------------------- |
| stale metadata or stale readiness                 | Reload evidence before proposing again.           |
| unsafe input, amount overrun, or dynamic argument | Recraft the exact request.                        |
| changed observed parameters                       | create new contract                               |
| consumed greenlight replay                        | create new contract                               |
| raw sibling path reachable                        | Stop and record bypass/proof evidence.            |
| credential or delegated authority isolated        | Keep future policy/gateway attempts blocked.      |
| downstream finality unknown                       | Read evidence; retry only through a new contract. |

The invariant is narrow and deliberate: no consequential automated action
executes outside declared bounds, and divergent behavior must be haltable,
isolatable, and reconstructable.
