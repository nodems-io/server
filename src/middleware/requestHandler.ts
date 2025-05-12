import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from "fastify";
import ErrorCodes from "../objects/error-codes";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const requestHandler = () => (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {


    if (!request.routeOptions.url) {
        throw new Error(ErrorCodes.INVALID_PATH);
    }
    done();
};

export default requestHandler;
