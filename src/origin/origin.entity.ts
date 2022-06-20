import { ApiProperty } from "@nestjs/swagger"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'cuome_origin' })
export class Origin {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: string

  @Column({ default: true })
  @ApiProperty()
  able: boolean

  @CreateDateColumn()
  @ApiProperty()
  createtime: Date

  @Column()
  @ApiProperty()
  name: string

  @Column()
  @ApiProperty()
  memo: string
}
