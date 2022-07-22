import { EntityRepository, Repository } from "typeorm";
import { StockPlacement } from "./stock-placement.entity";

@EntityRepository(StockPlacement)
export class StockPlacementRepository extends Repository<StockPlacement> {
}
