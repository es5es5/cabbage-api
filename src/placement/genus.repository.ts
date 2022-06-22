import { EntityRepository, Repository } from "typeorm";
import { Placement } from "./placement.entity";

@EntityRepository(Placement)
export class PlacementRepository extends Repository<Placement> {
}
