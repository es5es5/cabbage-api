import { ApiProperty } from "@nestjs/swagger"

export class GenusDto {
  writerId: number

  @ApiProperty({ description: '속, 종 구분', enum: ['Genus', 'Species'] })
  type: string

  @ApiProperty({ description: '' })
  name: string

  @ApiProperty({ description: '' })
  memo: string
}
