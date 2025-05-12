import {FastifyReply, FastifyRequest} from 'fastify';
import TokenService from "../services/token.service";

const authenticate = async (request: FastifyRequest, reply: FastifyReply) => {
    const url = request.raw.url || '';


    if (url.startsWith('/swagger') || url.startsWith('/auth/register') || url.startsWith('/auth/login')) {
        return;
    }

    const authHeader =
        request.headers['authorization'] ||
        request.headers['Authorization'] ||
        request.headers['AUTHORIZATION'];

    if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
        return reply.status(401).send({ message: 'Unauthorized: Missing or malformed token' });
    }

    const token = authHeader.replace('Bearer ', '').trim();

    try {
        request.user = await new TokenService().validateAuthToken(token);
    } catch (err) {
        return reply.status(401).send({ message: 'Unauthorized: Invalid token' });
    }
};

export default authenticate;
