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

  @Column({ name: 'memo' })
  @ApiProperty()
  memo: string

  @Column({ unique: true })
  @ApiProperty()
  username: string

  @Column()
  @ApiProperty()
  password: string

  @Column({ name: 'display_name' })
  @ApiProperty()
  displayName: string

  @Column({ name: 'birthday' })
  @ApiProperty()
  birthday: string

  @Column({ name: 'authority' })
  @ApiProperty()
  authority: string

  @Column({ name: 'position' })
  @ApiProperty()
  position: string

  @Column({ default: true })
  @ApiProperty()
  use: boolean
}
