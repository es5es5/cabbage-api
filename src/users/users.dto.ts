import { ApiProperty } from "@nestjs/swagger";

export class UsersDto {
  @ApiProperty({ description: '아이디' })
  username: string;

  @ApiProperty({ description: '비밀번호',  })
  password: string;

  @ApiProperty({ description: '보여줄 이름',  })
  displayName: string;
}
