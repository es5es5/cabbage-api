import { ApiProperty } from "@nestjs/swagger";

export class MicroorganismDto {
  @ApiProperty({ description: '이름' })
  readonly name: string;
}
