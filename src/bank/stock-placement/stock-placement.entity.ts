import { ApiProperty } from "@nestjs/swagger"
import { Users } from "src/users/users.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'cuome_bank_stock_placement' })
export class StockPlacement {
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

  @Column({ name: 'bank_id' })
  @ApiProperty()
  bankId: number

  @Column({ name: 'stock_placement_id' })
  @ApiProperty()
  stockPlacementId: string

  @Column({ name: 'liquid_count' })
  @ApiProperty()
  liquidCount: string

  @Column({ name: 'powder_count' })
  @ApiProperty()
  powderCount: string
}
