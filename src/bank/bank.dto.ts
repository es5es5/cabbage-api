import { ApiProperty } from "@nestjs/swagger";

export class BankDto {
  writerId: number

  @ApiProperty({ description: '' })
  code: string

  @ApiProperty({ description: '' })
  genusId: number

  @ApiProperty({ description: '' })
  speciesId: number

  @ApiProperty({ description: '' })
  bankNumber: number

  @ApiProperty({ description: '' })
  category: string

  @ApiProperty({ description: '' })
  originId: number

  @ApiProperty({ description: '' })
  gettingDate: Date

  @ApiProperty({ description: '' })
  stockPlacementId: number

  @ApiProperty({ description: '' })
  rentPlacementId: number

  @ApiProperty({ description: '' })
  liquidCount: number

  @ApiProperty({ description: '' })
  powderCount: number

  @ApiProperty({ description: '' })
  sequencing: string

  @ApiProperty({ description: '' })
  wholeGenome: string

  @ApiProperty({ description: '' })
  safetyAnalysis: string

  @ApiProperty({ description: '' })
  immunaryTest: string

  @ApiProperty({ description: '' })
  etcActivity: string
}
