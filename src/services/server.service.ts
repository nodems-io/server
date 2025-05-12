
import {Server} from "../entities/server.entity";
import {Datacenter} from "../entities/datacenter.entity";

export default class ServerService {

    private model = Server;
    private dcModel = Datacenter;

    async create(data: CreateServerDto): Promise<Server> {
        const datacenter = await this.dcModel.findOneBy({ id: data.datacenterId });
        if (!datacenter) throw new Error("Datacenter not found");

        const server = this.model.create({
            ...data,
            datacenter,
        });

        return await this.model.save(server);
    }

    async all(): Promise<Server[]> {
        return await this.model.find();
    }

    async remove(id: number): Promise<void> {
        await this.model.delete(id);
    }

    async findById(id: number): Promise<Server | null> {
        return await this.model.findOneBy({ id });
    }

    async update(id: number, data: Partial<Server>): Promise<Server | null> {
        const server = await this.model.findOneBy({ id });
        if (!server) throw new Error("Server not found");
        Object.assign(server, data);
        return await this.model.save(server);
    }

    async findByDatacenterId(datacenterId: number): Promise<Server[]> {
        return await this.model.find({ where: { datacenter: { id: datacenterId } } });
    }






}
