import { ApiProperty } from "@nestjs/swagger";

export class CreateMicroorganismDto {
  @ApiProperty({ description: '이름' })
  name: string
}
