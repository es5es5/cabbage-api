import { ApiProperty } from "@nestjs/swagger";

export class UsersDto {
  @ApiProperty({ description: '아이디' })
  readonly username: string;

  @ApiProperty({ description: '비밀번호',  })
  readonly password: string;

  @ApiProperty({ description: '보여줄 이름',  })
  readonly displayName: string;
}
