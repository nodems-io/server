import {FastifyPluginOptions, FastifyReply, FastifyRequest,} from "fastify";
import {ErrorResult, SuccessResult} from "../objects/result";
import ServerService from "../services/server.service";
import {Server} from "../entities/server.entity";
import {
    createServerSchema,
    deleteServerSchema,
    getServerSchema,
    listServersSchema,
    updateServerSchema
} from "../schemas/server.schemas";


const serviceRouter = () => async (app: FastifyPluginOptions) => {
    const service = new ServerService();

    app.post("/", createServerSchema,async (req:FastifyRequest , reply:FastifyReply) => {
        try {
            const server = await service.create(req.body as any);
            return new SuccessResult(server);
        } catch (e: any) {
            return new ErrorResult(e.message);
        }
    });

    app.get("/", listServersSchema, async (req:FastifyRequest , reply:FastifyReply) => {
        const list = await service.all();
        return new SuccessResult(list);
    });


    app.get("/:id",getServerSchema ,async (req:FastifyRequest , reply:FastifyReply) => {
        const server = await service.findById(Number((req.params as any).id));
        if (!server) return reply.status(404).send({ message: "Not Found" });
        return new SuccessResult(server);
    });


    app.put("/:id", updateServerSchema,async (req:FastifyRequest , reply:FastifyReply) => {
        try {
            const server = await service.update(Number((req.params as any).id), req.body as Partial<Server>);
            return new SuccessResult(server);
        } catch (e: any) {
            return new ErrorResult(e.message);
        }
    });

    app.delete("/:id", deleteServerSchema,async (req:FastifyRequest , reply:FastifyReply) => {
        await service.remove(Number((req.params as any).id));
        return new SuccessResult({ message: "Deleted" });
    });
};

export default serviceRouter;


