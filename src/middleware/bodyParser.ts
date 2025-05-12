import { FastifyRequest } from "fastify";
import { ContentTypeParserDoneFunction } from "fastify/types/content-type-parser";

const bodyParser = (req: FastifyRequest, body: string | Buffer, done: ContentTypeParserDoneFunction) => {
    try {
        const newBody = { ...JSON.parse(body.toString()) };

        newBody.language = newBody.language || "TR";

        done(null, newBody);
    } catch (error: any) {
        error.statusCode = 400;
        done(error, undefined);
    }
};

export default bodyParser;
