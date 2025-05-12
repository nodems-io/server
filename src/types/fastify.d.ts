// src/types/fastify.d.ts
import 'fastify';

declare module 'fastify' {
    interface FastifyRequest {
        user?: {
            id: number;
            email: string;
            [key: string]: any;
        };
    }
}
