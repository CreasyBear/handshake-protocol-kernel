import { z } from "zod";
export declare const HttpProtectedMutationProfileSchema: z.ZodObject<{
    targetHttpMethod: z.ZodString;
    endpointUrl: z.ZodString;
    pathTemplate: z.ZodString;
    requestBodyDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    selectedHeadersDigest: z.ZodString;
    dynamicEndpointConstructionObserved: z.ZodDefault<z.ZodBoolean>;
    dynamicHostConstructionObserved: z.ZodDefault<z.ZodBoolean>;
    retryAuthorityReuseDetected: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strict>;
export type HttpProtectedMutationProfile = z.infer<typeof HttpProtectedMutationProfileSchema>;
