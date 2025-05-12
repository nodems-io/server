import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResult, Result} from "../objects/result";
import {type} from "node:os";

const responseHandler = () => async (request: FastifyRequest, reply: FastifyReply, payload: any) => {
    let response: Result<any>;

    if (request.method === 'OPTIONS') {
        reply.status(200)
    }

    try {
        response = JSON.parse(payload);
    } catch (e) {
        return payload;
    }

    if (!response.success) {
        const message = response.message;
        response.message = message || response.message;
    }


    return JSON.stringify(response);
};

export default responseHandler;
