import {FastifyPluginOptions, FastifyReply, FastifyRequest,} from "fastify";
import DatacenterService from "../services/datacenter.service";
import {
    createDatacenterSchema, deleteDatacenterSchema,
    getDatacenterSchema,
    listDatacentersSchema,
    updateDatacenterSchema
} from "../schemas/datacenter.schemas";


const datacenterRouter = () => async (app: FastifyPluginOptions) => {
    const service = new DatacenterService();
    app.get("/", listDatacentersSchema, async (req:FastifyRequest , reply:FastifyReply) => {
        const data = await service.all();
        reply.send(data);
    });

    app.get("/:id", getDatacenterSchema, async (req:FastifyRequest , reply:FastifyReply) => {
        const { id } = req.params as any;
        const data = await service.findById(Number(id));
        if (!data) return reply.status(404).send({ message: "Not Found" });
        reply.send(data);
    });


    app.post("/", createDatacenterSchema, async (req:FastifyRequest , reply:FastifyReply) => {
        const { name, location } = req.body as any;
        const newRecord = await service.create(name, location);
        reply.send(newRecord);
    });

    app.put("/:id", updateDatacenterSchema, async (req:FastifyRequest , reply:FastifyReply) => {
        const { id } = req.params as any;
        const updated = await service.update(Number(id), req.body as any);
        reply.send(updated);
    });

    app.delete("/:id", deleteDatacenterSchema, async (req:FastifyRequest , reply:FastifyReply) => {
        const { id } = req.params as any;
        await service.remove(Number(id));
        reply.send({ message: "Deleted" });
    });
    
};

export default datacenterRouter;


