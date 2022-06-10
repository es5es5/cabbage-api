import { ApiProperty } from "@nestjs/swagger";

export class OriginDto {
  @ApiProperty({ description: '이름' })
  readonly name: string;
}
