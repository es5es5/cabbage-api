import { ApiProperty } from "@nestjs/swagger";

export class ChangePasswordDto {
  @ApiProperty({ description: '아이디' })
  readonly username: string;

  @ApiProperty({ description: '비밀번호' })
  readonly password: string;

  @ApiProperty({ description: '비밀번호1' })
  readonly password1: string;

  @ApiProperty({ description: '비밀번호2' })
  readonly password2: string;
}
