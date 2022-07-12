import { EntityRepository, Repository } from "typeorm";
import { Reagent } from "./reagent.entity";

@EntityRepository(Reagent)
export class ReagentRepository extends Repository<Reagent> {
}
