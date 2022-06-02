import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Microorganism {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ default: true })
  able: boolean

  @Column()
  name: string
}
