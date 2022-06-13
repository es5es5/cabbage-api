import { EntityRepository, Repository } from "typeorm";
import { Origin } from "./origin.entity";
@EntityRepository(Origin)
export class OriginRepository extends Repository<Origin> {
}
