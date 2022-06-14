import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({ description: '아이디' })
  readonly username: string;

  @ApiProperty({ description: '비밀번호',  })
  readonly password: string;
}
