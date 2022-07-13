import { ApiProperty } from "@nestjs/swagger"
import { Users } from "src/users/users.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'cuome_reagent' })
export class Reagent {
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
  name: string

  @Column({ name: 'serial_number' })
  @ApiProperty()
  serialNumber: string

  @Column({ name: 'placement' })
  @ApiProperty()
  placement: string

  @Column({ name: 'start_date' })
  @ApiProperty()
  startDate: Date

  @Column({ name: 'end_date' })
  @ApiProperty()
  endDate: Date

  @Column({ name: 'maker' })
  @ApiProperty()
  maker: string

  @Column({ name: 'ph_point' })
  @ApiProperty()
  phPoint: string

  @Column({ name: 'manager' })
  @ApiProperty()
  manager: string

  @Column({ name: 'price' })
  @ApiProperty()
  price: string

  @Column({ name: 'count', nullable: false, default: '0' })
  @ApiProperty()
  count: string

  @Column({ name: 'unit' })
  @ApiProperty()
  unit: string

  @Column()
  @ApiProperty()
  memo: string
}
