import { ApiProperty } from "@nestjs/swagger"
import { Users } from "src/users/users.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'cuome_bank' })
export class Bank {
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
  code: string

  @Column()
  @ApiProperty()
  genus: string

  @Column()
  @ApiProperty()
  species: string

  @Column()
  @ApiProperty()
  number: number

  @Column()
  @ApiProperty()
  category: string

  @Column({ name: 'origin_id' })
  @ApiProperty()
  originId: string

  // @ManyToMany(() => Origin, { eager: true })
  // @JoinColumn({ name: 'origin_id' })
  // originInfo: Origin

  @Column({ name: 'getting_date' })
  @ApiProperty()
  gettingDate: Date

  @Column({ name: 'stock_placement_id' })
  @ApiProperty()
  stockPlacementId: string

  @Column({ name: 'rent_placement' })
  @ApiProperty()
  rentPlacement: string

  @Column({ name: 'liquid_count' })
  @ApiProperty()
  liquidCount: number

  @Column({ name: 'powder_count' })
  @ApiProperty()
  powderCount: number

  @Column()
  @ApiProperty()
  sequencing: string

  @Column({ name: 'whole_genome' })
  @ApiProperty()
  wholeGenome: string

  @Column({ name: 'safety_analysis' })
  @ApiProperty()
  safetyAnalysis: string

  @Column({ name: 'immunary_test' })
  @ApiProperty()
  immunaryTest: string

  @Column({ name: 'etc_activity' })
  @ApiProperty()
  etcActivity: string
}
