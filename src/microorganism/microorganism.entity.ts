import { ApiProperty } from "@nestjs/swagger"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Microorganism {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string

  @Column({ default: true })
  @ApiProperty()
  able: boolean

  @Column()
  @ApiProperty()
  name: string
}
