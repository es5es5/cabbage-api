import { ApiProperty } from "@nestjs/swagger"
import { Users } from "src/users/users.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

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

  @Column({ name: 'writer_id' })
  @ApiProperty()
  writerId: number

  @ManyToOne(() => Users, user => user.id, { eager: true })
  @JoinColumn({ name: 'writer_id' })
  writerInfo: Users

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

  @Column()
  @ApiProperty()
  color: string
}
