import { ApiProperty } from "@nestjs/swagger"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'cuome_users' })
export class Users {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number

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

  @Column({ name: 'display_name' })
  @ApiProperty()
  displayName: string
}
