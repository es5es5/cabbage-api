import { ApiProperty } from "@nestjs/swagger";

export class OriginDto {
  @ApiProperty({ description: '이름' })
  name: string;

  @ApiProperty({ description: '메모' })
  memo: string;
}
