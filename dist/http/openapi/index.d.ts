import { z } from "zod";
export declare const openApiDocument: {
    openapi: string;
    info: {
        title: string;
        version: string;
        description: string;
    };
    components: {
        securitySchemes: {
            handshakeControlPlaneBearer: {
                type: string;
                scheme: string;
                description: string;
            };
            handshakeRuntimeEvidenceBearer: {
                type: string;
                scheme: string;
                description: string;
            };
            handshakeGatewayCustodyBearer: {
                type: string;
                scheme: string;
                description: string;
            };
            handshakeReviewCustodyBearer: {
                type: string;
                scheme: string;
                description: string;
            };
        };
    };
    paths: {
        "/health": {
            get: {
                summary: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: z.core.ZodStandardJSONSchemaPayload<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
                            };
                        };
                    };
                };
            };
        };
        "/v0.2/hosted/readiness": {
            get: {
                summary: string;
                description: string;
                security: {
                    [x: string]: never[];
                }[];
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: z.core.ZodStandardJSONSchemaPayload<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
                            };
                        };
                    };
                    "401": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: z.core.ZodStandardJSONSchemaPayload<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
                            };
                        };
                    };
                    "403": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: z.core.ZodStandardJSONSchemaPayload<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
                            };
                        };
                    };
                    "500": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: z.core.ZodStandardJSONSchemaPayload<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
                            };
                        };
                    };
                    "503": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: z.core.ZodStandardJSONSchemaPayload<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
                            };
                        };
                    };
                };
            };
        };
    };
};
