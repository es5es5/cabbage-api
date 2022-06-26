import { ApiProperty } from "@nestjs/swagger"
import { Users } from "src/users/users.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'cuome_study_topic' })
export class StudyTopic {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number

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
  memo: string

  @Column()
  @ApiProperty()
  title: string

  @Column({name: 'start_date'})
  @ApiProperty()
  startDate: Date

  @Column({name: 'end_date'})
  @ApiProperty()
  endDate: Date

  @Column({name: 'consortium_main'})
  @ApiProperty()
  consortiumMain: string

  @Column({name: 'consortium_subs'})
  @ApiProperty()
  consortiumSubs: string

  @Column()
  @ApiProperty()
  money: string

  @Column()
  @ApiProperty()
  manager: string

  @Column()
  @ApiProperty()
  step: string

  @Column()
  @ApiProperty()
  goal: string

  @Column()
  @ApiProperty()
  needs: string

  @Column()
  @ApiProperty()
  plan: string
}
