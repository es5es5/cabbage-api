import { EntityRepository, Repository } from "typeorm";
import { Microorganism } from "./model/microorganism.entity";

@EntityRepository(Microorganism)
export class MicroorganismRepository extends Repository<Microorganism> {

    async createMicroorganism(microorganism: Microorganism) : Promise<Microorganism> {
        await this.save(microorganism);
        return microorganism;
    }
}
