import { ApiProperty } from "@nestjs/swagger"

export class EquipmentDto {
  writerId: number

  @ApiProperty({ description: '장비명' })
  name: string

  @ApiProperty({ description: '일련번호' })
  serialNumber: string

  @ApiProperty({ description: '보관장소' })
  placement: string

  @ApiProperty({ description: '취득일자' })
  startDate: Date

  @ApiProperty({ description: '제조사' })
  maker: string

  @ApiProperty({ description: '개수' })
  count: string

  @ApiProperty({ description: '단위' })
  unit: string

  @ApiProperty({ description: '메모' })
  memo: string
}
