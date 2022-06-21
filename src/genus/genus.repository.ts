import { EntityRepository, Repository } from "typeorm";
import { Genus } from "./genus.entity";

@EntityRepository(Genus)
export class GenusRepository extends Repository<Genus> {
}
