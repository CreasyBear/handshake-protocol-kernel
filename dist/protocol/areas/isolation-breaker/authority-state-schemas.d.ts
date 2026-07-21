import { z } from "zod";
import type { AuthorityRecordWitness } from "../../store/authority-source";
import { type IsolationState } from "./types";
export declare const ISOLATION_AUTHORITY_SOURCE_VERSION: "isolation-authority-source-2";
export declare const ISOLATION_CAUSE_RECORD_VERSION: "isolation-cause-record-1";
export declare const ISOLATION_ACTIVE_CAUSE_SET_VERSION: "isolation-active-cause-set-1";
export declare const IsolationCauseSemanticsSchema: z.ZodObject<{
    state: z.ZodEnum<{
        revoked: "revoked";
        quarantined: "quarantined";
        review_only: "review_only";
        rate_limited: "rate_limited";
        halted: "halted";
        state_suspect: "state_suspect";
    }>;
    reasonCode: z.ZodString;
    reasonSummary: z.ZodString;
    sourceDecisionRef: z.ZodString;
    effectiveAt: z.ZodString;
    expiresAt: z.ZodNullable<z.ZodString>;
    observedStreamOffsets: z.ZodArray<z.ZodObject<{
        streamId: z.ZodString;
        partitionKey: z.ZodString;
        observedOffsetStart: z.ZodNumber;
        observedOffsetEnd: z.ZodNumber;
        observedEventDigest: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export declare const IsolationCauseRecordWitnessSchema: z.ZodObject<{
    record: z.ZodObject<{
        recordKind: z.ZodLiteral<"authority_evidence">;
        localId: z.ZodString;
    }, z.core.$strict>;
    semanticState: z.ZodLiteral<"isolation_cause">;
    version: z.ZodLiteral<1>;
    digest: z.ZodString;
}, z.core.$strict>;
export declare const IsolationCauseRecordPayloadSchema: z.ZodObject<{
    isolationCauseRecordVersion: z.ZodLiteral<"isolation-cause-record-1">;
    scope: z.ZodObject<{
        tenantId: z.ZodString;
        organizationId: z.ZodString;
        scopeType: z.ZodEnum<{
            gateway: "gateway";
            agent: "agent";
            tenant: "tenant";
            organization: "organization";
            run: "run";
            envelope: "envelope";
            action_class: "action_class";
            credential_ref: "credential_ref";
            authority_ref: "authority_ref";
            resource: "resource";
        }>;
        scopeId: z.ZodString;
    }, z.core.$strict>;
    scopeDigest: z.ZodString;
    causeId: z.ZodString;
    causeDigest: z.ZodString;
    cause: z.ZodObject<{
        state: z.ZodEnum<{
            revoked: "revoked";
            quarantined: "quarantined";
            review_only: "review_only";
            rate_limited: "rate_limited";
            halted: "halted";
            state_suspect: "state_suspect";
        }>;
        reasonCode: z.ZodString;
        reasonSummary: z.ZodString;
        sourceDecisionRef: z.ZodString;
        effectiveAt: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        observedStreamOffsets: z.ZodArray<z.ZodObject<{
            streamId: z.ZodString;
            partitionKey: z.ZodString;
            observedOffsetStart: z.ZodNumber;
            observedOffsetEnd: z.ZodNumber;
            observedEventDigest: z.ZodNullable<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    originalResult: z.ZodObject<{
        schemaVersion: z.ZodLiteral<"0.2.4">;
        tenantId: z.ZodString;
        organizationId: z.ZodString;
        createdAt: z.ZodString;
        isolationStateId: z.ZodString;
        scopeType: z.ZodEnum<{
            gateway: "gateway";
            agent: "agent";
            tenant: "tenant";
            organization: "organization";
            run: "run";
            envelope: "envelope";
            action_class: "action_class";
            credential_ref: "credential_ref";
            authority_ref: "authority_ref";
            resource: "resource";
        }>;
        scopeId: z.ZodString;
        state: z.ZodEnum<{
            active: "active";
            revoked: "revoked";
            quarantined: "quarantined";
            review_only: "review_only";
            rate_limited: "rate_limited";
            halted: "halted";
            state_suspect: "state_suspect";
        }>;
        reasonCode: z.ZodString;
        reasonSummary: z.ZodString;
        sourceDecisionRef: z.ZodString;
        effectiveAt: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        clearedAt: z.ZodNullable<z.ZodString>;
        observedStreamOffsets: z.ZodDefault<z.ZodArray<z.ZodObject<{
            streamId: z.ZodString;
            partitionKey: z.ZodString;
            observedOffsetStart: z.ZodNumber;
            observedOffsetEnd: z.ZodNumber;
            observedEventDigest: z.ZodNullable<z.ZodString>;
        }, z.core.$strict>>>;
        version: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export declare const IsolationActiveCauseBindingSchema: z.ZodObject<{
    causeId: z.ZodString;
    causeDigest: z.ZodString;
    causeRecord: z.ZodObject<{
        record: z.ZodObject<{
            recordKind: z.ZodLiteral<"authority_evidence">;
            localId: z.ZodString;
        }, z.core.$strict>;
        semanticState: z.ZodLiteral<"isolation_cause">;
        version: z.ZodLiteral<1>;
        digest: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export declare const IsolationAuthoritySourcePayloadSchema: z.ZodObject<{
    isolationAuthoritySourceVersion: z.ZodLiteral<"isolation-authority-source-2">;
    scopeDigest: z.ZodString;
    activeCauses: z.ZodArray<z.ZodObject<{
        causeId: z.ZodString;
        causeDigest: z.ZodString;
        causeRecord: z.ZodObject<{
            record: z.ZodObject<{
                recordKind: z.ZodLiteral<"authority_evidence">;
                localId: z.ZodString;
            }, z.core.$strict>;
            semanticState: z.ZodLiteral<"isolation_cause">;
            version: z.ZodLiteral<1>;
            digest: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strict>>;
    activeCauseSetDigest: z.ZodString;
    isolationState: z.ZodObject<{
        schemaVersion: z.ZodLiteral<"0.2.4">;
        tenantId: z.ZodString;
        organizationId: z.ZodString;
        createdAt: z.ZodString;
        isolationStateId: z.ZodString;
        scopeType: z.ZodEnum<{
            gateway: "gateway";
            agent: "agent";
            tenant: "tenant";
            organization: "organization";
            run: "run";
            envelope: "envelope";
            action_class: "action_class";
            credential_ref: "credential_ref";
            authority_ref: "authority_ref";
            resource: "resource";
        }>;
        scopeId: z.ZodString;
        state: z.ZodEnum<{
            active: "active";
            revoked: "revoked";
            quarantined: "quarantined";
            review_only: "review_only";
            rate_limited: "rate_limited";
            halted: "halted";
            state_suspect: "state_suspect";
        }>;
        reasonCode: z.ZodString;
        reasonSummary: z.ZodString;
        sourceDecisionRef: z.ZodString;
        effectiveAt: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        clearedAt: z.ZodNullable<z.ZodString>;
        observedStreamOffsets: z.ZodDefault<z.ZodArray<z.ZodObject<{
            streamId: z.ZodString;
            partitionKey: z.ZodString;
            observedOffsetStart: z.ZodNumber;
            observedOffsetEnd: z.ZodNumber;
            observedEventDigest: z.ZodNullable<z.ZodString>;
        }, z.core.$strict>>>;
        version: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type IsolationCauseSemantics = z.infer<typeof IsolationCauseSemanticsSchema>;
export type IsolationCauseRecordPayload = Omit<z.infer<typeof IsolationCauseRecordPayloadSchema>, "scopeDigest" | "causeDigest"> & {
    scopeDigest: `sha256:${string}`;
    causeDigest: `sha256:${string}`;
};
export type IsolationActiveCauseBinding = Readonly<{
    causeId: string;
    causeDigest: `sha256:${string}`;
    causeRecord: AuthorityRecordWitness;
}>;
export type IsolationAuthoritySourcePayload = Readonly<{
    isolationAuthoritySourceVersion: typeof ISOLATION_AUTHORITY_SOURCE_VERSION;
    scopeDigest: `sha256:${string}`;
    activeCauses: readonly IsolationActiveCauseBinding[];
    activeCauseSetDigest: `sha256:${string}`;
    isolationState: IsolationState;
}>;
