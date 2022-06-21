import { ApiProperty } from "@nestjs/swagger"
import { Origin } from "src/origin/origin.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Microorganism {
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
  name: string

  @Column({ name: 'origin_id' })
  @ApiProperty()
  originId: string

  @ManyToOne(() => Origin, { eager: true })
  @JoinColumn({ name: 'origin_id' })
  originInfo: Origin
}
