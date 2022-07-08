import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({ description: '아이디' })
  username: string;

  @ApiProperty({ description: '비밀번호',  })
  password: string;
}
