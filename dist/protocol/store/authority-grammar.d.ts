import { validatePolicyAdmissionCodec3Grammar } from "../areas/policy-greenlight/admission/source/source-grammar";
export declare const AUTHORITY_SOURCE_WRITE_GRAMMARS: readonly ["policy-admission-codec-3", "gateway-admission-codec-1", "gateway-admission-codec-2", "consequence-cutoff-codec-1", "consequence-cutoff-codec-2", "terminal-observation-codec-1", "terminal-observation-codec-2", "isolation-transition-codec-1", "isolation-transition-codec-2"];
export type AuthoritySourceWriteGrammar = (typeof AUTHORITY_SOURCE_WRITE_GRAMMARS)[number];
export type AuthorityWriterGrammarMutationView = Readonly<{
    writerGrammar: AuthoritySourceWriteGrammar;
    scope: Readonly<{
        tenantId: string;
        organizationId: string;
    }>;
    identity: Readonly<{
        mutationKind: string;
        localId: string;
    }>;
    requestDigest: string;
    records: readonly Readonly<{
        record: Readonly<{
            recordKind: string;
            localId: string;
        }>;
        semanticState: string;
        version: number;
        digest: string;
        payload: unknown;
        predecessor: unknown;
    }>[];
    pointerGuards: readonly Readonly<{
        pointer: Readonly<{
            pointerKind: string;
            localId: string;
        }>;
    }>[];
    pointerMutations: readonly Readonly<{
        pointer: Readonly<{
            pointerKind: string;
            localId: string;
        }>;
        expected: Readonly<{
            kind: string;
        }>;
        successor: Readonly<{
            record: Readonly<{
                recordKind: string;
                localId: string;
            }>;
            semanticState: string;
            version: number;
            digest: string;
        }> | null;
    }>[];
    projectionIntents: readonly unknown[];
    temporalFence?: Readonly<{
        kind: string;
        notBefore?: string;
        notAfter?: string;
    }>;
}>;
export type AuthorityWriterGrammarValidator = (mutation: AuthorityWriterGrammarMutationView) => void | Promise<void>;
export declare const PACKET_01_AUTHORITY_GRAMMAR_REGISTRY: readonly [Readonly<{
    writerGrammar: "policy-admission-codec-3";
    validate: typeof validatePolicyAdmissionCodec3Grammar;
}>, Readonly<{
    writerGrammar: "gateway-admission-codec-1";
    validate: (mutation: AuthorityWriterGrammarMutationView) => Promise<void>;
}>, Readonly<{
    writerGrammar: "gateway-admission-codec-2";
    validate: (mutation: AuthorityWriterGrammarMutationView) => Promise<void>;
}>, Readonly<{
    writerGrammar: "consequence-cutoff-codec-1";
    validate: (mutation: AuthorityWriterGrammarMutationView) => Promise<void>;
}>, Readonly<{
    writerGrammar: "consequence-cutoff-codec-2";
    validate: (mutation: AuthorityWriterGrammarMutationView) => Promise<void>;
}>, Readonly<{
    writerGrammar: "terminal-observation-codec-1";
    validate: (mutation: AuthorityWriterGrammarMutationView) => Promise<void>;
}>, Readonly<{
    writerGrammar: "terminal-observation-codec-2";
    validate: (mutation: AuthorityWriterGrammarMutationView) => Promise<void>;
}>, Readonly<{
    writerGrammar: "isolation-transition-codec-1";
    validate: (mutation: AuthorityWriterGrammarMutationView) => Promise<void>;
}>, Readonly<{
    writerGrammar: "isolation-transition-codec-2";
    validate: (mutation: AuthorityWriterGrammarMutationView) => Promise<void>;
}>];
export declare const PACKET_01_TAGGED_WRITER_REFUSAL: "Packet 01 authority grammar does not register this tagged writerGrammar.";
export declare function selectPacket01AuthorityWriterGrammar(writerGrammar: unknown): (typeof PACKET_01_AUTHORITY_GRAMMAR_REGISTRY)[number] | Readonly<{
    ok: false;
    reason: typeof PACKET_01_TAGGED_WRITER_REFUSAL;
}> | null;
