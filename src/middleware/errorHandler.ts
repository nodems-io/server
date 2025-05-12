import { FastifyReply, FastifyRequest, FastifyError } from "fastify";
import ErrorCodes from "../objects/error-codes";
import { ErrorResult } from "../objects/result";

const errorHandler = () => (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    let err = new ErrorResult(ErrorCodes.UNKNOWN_ERROR);
    if (reply.statusCode === 429) {
        err = new ErrorResult(ErrorCodes.TOO_MANY_REQUEST);
    }

    if (error.name === "ArgumentRequiredError") {
        err = new ErrorResult(ErrorCodes.MISSING_PARAMETERS);
    }

    if (error.message === ErrorCodes.INVALID_PATH) {
        err = new ErrorResult(ErrorCodes.INVALID_PATH);
    }

    console.log(`Error: ${error.message}`);
    reply.send(err);
};

export default errorHandler;
