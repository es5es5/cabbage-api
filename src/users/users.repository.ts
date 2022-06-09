import { EntityRepository, Repository } from "typeorm";
import { Users } from "./users.entity";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {

    async createUsers(user: Users) : Promise<Users> {
        await this.save(user);
        return user;
    }
}
