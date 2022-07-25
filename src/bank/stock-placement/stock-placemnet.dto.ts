import { ApiProperty } from "@nestjs/swagger";

export class StockPlacementDto {
  writerId: number
  bankId: number

  @ApiProperty()
  stockPlacementId: string

  @ApiProperty()
  liquidCount: string

  @ApiProperty()
  powderCount: string
}
