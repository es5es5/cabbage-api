import { ApiProperty } from "@nestjs/swagger"
import { Genus } from "src/genus/genus.entity"
import { Origin } from "src/origin/origin.entity"
import { Placement } from "src/placement/placement.entity"
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

  @JoinColumn({ name: 'writer_id' })
  @ManyToOne(() => Users, a => a.id, { eager: true })
  writerInfo: Users

  @Column()
  @ApiProperty()
  code: string

  @Column({ name: 'genus_id' })
  @ApiProperty()
  genusId: number

  @JoinColumn({ name: 'genus_id' })
  @ManyToOne(() => Genus, a => a.id, { eager: true })
  genusInfo: Genus

  @Column({ name: 'species_id' })
  @ApiProperty()
  speciesId: number

  @JoinColumn({ name: 'species_id' })
  @ManyToOne(() => Genus, a => a.id, { eager: true })
  speciesInfo: Genus

  @Column()
  @ApiProperty({ name: 'bank_number' })
  bankNumber: number

  @Column()
  @ApiProperty()
  category: string

  @Column({ name: 'origin_id' })
  @ApiProperty()
  originId: number

  @JoinColumn({ name: 'origin_id' })
  @ManyToOne(() => Origin, a => a.id, { eager: true })
  originInfo: Origin

  @Column({ name: 'getting_date' })
  @ApiProperty()
  gettingDate: Date

  @Column({ name: 'stock_placement_id' })
  @ApiProperty()
  stockPlacementId: number

  @JoinColumn({ name: 'stock_placement_id' })
  @ManyToOne(() => Placement, a => a.id, { eager: true })
  stockPlacementInfo: Placement

  @Column({ name: 'rent_placement_id' })
  @ApiProperty()
  rentPlacementId: number

  @JoinColumn({ name: 'rent_placement_id' })
  @ManyToOne(() => Placement, a => a.id, { eager: true })
  rentPlacementInfo: Placement

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
