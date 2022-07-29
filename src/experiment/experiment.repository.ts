import { EntityRepository, Repository } from "typeorm";
import { Experiment } from "./experiment.entity";

@EntityRepository(Experiment)
export class ExperimentRepository extends Repository<Experiment> {
}
