import { ApiProperty } from "@nestjs/swagger"

export class Origin {
  @ApiProperty({ description: 'id' })
  id!: string
  name: string
  createtime: number
}
