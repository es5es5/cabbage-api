import { ApiProperty } from "@nestjs/swagger"

export class PlacementDto {
  writerId: number

  @ApiProperty({ description: '' })
  name: string

  @ApiProperty({ description: '' })
  memo: string
}
