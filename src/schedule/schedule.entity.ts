import { ApiProperty } from "@nestjs/swagger"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'cuome_schedule' })
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
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
  title: string

  @Column()
  @ApiProperty()
  memo: string

  @Column({ default: true, name: 'all_day' })
  @ApiProperty()
  allDay: boolean

  @Column()
  @ApiProperty()
  start: Date

  @Column()
  @ApiProperty()
  end: Date
}
