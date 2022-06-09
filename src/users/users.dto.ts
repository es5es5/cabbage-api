import { ApiProperty } from "@nestjs/swagger";

export class UsersDto {
  @ApiProperty({ description: '이름' })
  readonly username: string;

  @ApiProperty({ description: '비밀번호',  })
  readonly password: string;
}
