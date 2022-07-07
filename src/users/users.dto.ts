import { ApiProperty } from "@nestjs/swagger";

export class UsersDto {
  @ApiProperty({ description: '아이디' })
  username: string;

  @ApiProperty({ description: '보여줄 이름' })
  displayName: string;

  @ApiProperty({ description: '비밀번호' })
  password: string;

  @ApiProperty({ description: '생년월일' })
  birthday: string

  @ApiProperty({ description: '권한' })
  authority: string

  @ApiProperty({ description: '업무' })
  position: string

  @ApiProperty({ description: '사용여부' })
  use: boolean

  @ApiProperty({ description: '메모' })
  memo: string
}
