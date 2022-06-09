import { ApiProperty } from "@nestjs/swagger"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: string

  @Column({ default: true })
  @ApiProperty()
  able: boolean

  @CreateDateColumn()
  @ApiProperty()
  createtime: Date

  @Column({ unique: true })
  @ApiProperty()
  username: string

  @Column()
  @ApiProperty()
  password: string
}
