import { ApiProperty } from "@nestjs/swagger";

export class UsersDto {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;
}
