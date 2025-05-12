
import {Datacenter} from "../entities/datacenter.entity";

export default class DatacenterService {
    private model = Datacenter;

    async create(name: string, location: string): Promise<Datacenter> {
        const datacenter = this.model.create({ name, location });
        return await this.model.save(datacenter);
    }

    async all(): Promise<Datacenter[]> {
        return await this.model.find({ relations: ['servers'] });
    }

    async findById(id: number): Promise<Datacenter | null> {
        return await this.model.findOne({ where: { id }, relations: ['servers'] });
    }

    async remove(id: number): Promise<void> {
        await this.model.delete(id);
    }

    async update(id: number, data: Partial<Datacenter>): Promise<Datacenter | null> {
        await this.model.update(id, data);
        return await this.findById(id);
    }


}
