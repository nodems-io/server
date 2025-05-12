import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

export default fp(async function swaggerPlugin(fastify: FastifyInstance) {
    await fastify.register(import('@fastify/swagger'), {
        swagger: {
            info: {
                title: 'NodeMs API',
                description: 'NodeMs Server Pool Management',
                version: '0.0.1',
            },
            externalDocs: {
                url: 'https://nodems.io',
                description: '',
            },
            securityDefinitions: {
                Authorization: {
                    type: 'apiKey',
                    name: 'Authorization',
                    in: 'header',
                    description: 'JWT Authorization header using the Bearer scheme. Example: "Bearer {token}"',
                },
            },
            security: [
                {
                    Authorization: [],
                },
            ],
            host: '127.0.0.1:8085',
            schemes: [  'http','https'],
            consumes: ['application/json'],
            produces: ['application/json'],
        },
    });

    await fastify.register(import('@fastify/swagger-ui'), {
        routePrefix: '/swagger',
        staticCSP: true,
        transformStaticCSP: (header: string) => header,
        uiConfig: {
            docExpansion: 'list',
            deepLinking: false,
        },
    });
});
