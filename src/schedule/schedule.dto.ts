import { ApiProperty } from "@nestjs/swagger"

export class ScheduleDto {
  writerId: number

  @ApiProperty({ description: '' })
  title: string

  @ApiProperty({ description: '' })
  memo: string

  @ApiProperty({ description: '' })
  allDay: boolean
}
