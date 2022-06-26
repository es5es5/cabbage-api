import { ApiProperty } from "@nestjs/swagger"

export class StudyTopicDto {
  writerId: number

  @ApiProperty({ description: '' })
  memo: string

  @ApiProperty({ description: '' })
  title: string

  @ApiProperty({ description: '' })
  startDate: string

  @ApiProperty({ description: '' })
  endDate: string

  @ApiProperty({ description: '' })
  consortiumMain: string

  @ApiProperty({ description: '' })
  consortiumSubs: string

  @ApiProperty({ description: '' })
  money: string

  @ApiProperty({ description: '' })
  manager: string

  @ApiProperty({ description: '' })
  step: string

  @ApiProperty({ description: '' })
  goal: string

  @ApiProperty({ description: '' })
  needs: string

  @ApiProperty({ description: '' })
  plan: string
}
