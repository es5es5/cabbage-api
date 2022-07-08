import { EntityRepository, Repository } from "typeorm";
import { Equipment } from "./equipment.entity";

@EntityRepository(Equipment)
export class EquipmentRepository extends Repository<Equipment> {
}
