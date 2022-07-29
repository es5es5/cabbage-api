import { ApiProperty } from "@nestjs/swagger"
import { Users } from "src/users/users.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'cuome_research_experiment' })
export class Experiment {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number

  @Column({ default: true, nullable: false })
  @ApiProperty()
  able: boolean

  @CreateDateColumn({nullable: false})
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

  @Column()
  @ApiProperty()
  manager: string

  @Column()
  @ApiProperty()
  methods_link: string

  @Column()
  @ApiProperty()
  results_link: string

  @Column()
  @ApiProperty()
  startDate: Date
}
