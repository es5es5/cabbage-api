import { ApiProperty } from "@nestjs/swagger"

export class GenusDto {
  writerId: number

  @ApiProperty({ description: '' })
  name: string

  @ApiProperty({ description: '' })
  memo: string
}
