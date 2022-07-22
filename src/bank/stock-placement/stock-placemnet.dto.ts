import { ApiProperty } from "@nestjs/swagger";

export class StockPlacementDto {
  writerId: number
  @ApiProperty()
  bankId: number

  @ApiProperty()
  stockPlacementId: string

  @ApiProperty()
  liquidCount: string

  @ApiProperty()
  powderCount: string
}
