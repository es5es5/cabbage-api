import { EntityRepository, Repository } from "typeorm";
import { StudyTopic } from "./study_topic.entity";

@EntityRepository(StudyTopic)
export class StudyTopicRepository extends Repository<StudyTopic> {
}
