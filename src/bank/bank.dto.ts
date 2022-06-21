import { ApiProperty } from "@nestjs/swagger";

export class BankDto {
  writerId: number

  @ApiProperty({ description: '' })
  code: string

  @ApiProperty({ description: '' })
  genus: string

  @ApiProperty({ description: '' })
  species: string

  @ApiProperty({ description: '' })
  number: number

  @ApiProperty({ description: '' })
  category: string

  @ApiProperty({ description: '' })
  originId: string

  @ApiProperty({ description: '' })
  gettingDate: Date

  @ApiProperty({ description: '' })
  stockPlacementId: string

  @ApiProperty({ description: '' })
  rentPlacement: string

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
