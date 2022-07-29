import { ApiProperty } from "@nestjs/swagger"

export class ExperimentDto {
  writerId: number

  @ApiProperty({ description: '장비명' })
  name: string

  @ApiProperty({ description: '메모' })
  memo: string
}
