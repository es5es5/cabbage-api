import { ApiProperty } from "@nestjs/swagger"
import { Users } from "src/users/users.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'cuome_bank' })
export class Business {
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
  @ApiProperty({ name: 'business_title' })
  businessTitle: string

  @Column()
  @ApiProperty({ name: 'business_manager' })
  businessManager: string

  @Column()
  @ApiProperty({ name: 'project_title' })
  projectTitle: string

  @Column()
  @ApiProperty({ name: 'project_manager' })
  projectManager: string

  @Column()
  @ApiProperty({ name: 'project_state' })
  projectState: string

  @Column()
  @ApiProperty({ name: 'project_pdf' })
  projectPdf: string

  @Column()
  @ApiProperty({ name: 'supervisor' })
  supervisor: string

  @Column()
  @ApiProperty({ name: 'money' })
  money: string

  @Column()
  @ApiProperty({ name: 'project_no' })
  projectNo: string

  @Column()
  @ApiProperty({ name: 'department' })
  department: string

  @Column()
  @ApiProperty({ name: 'specialized_organization' })
  specializedOrganization: string

  @Column()
  @ApiProperty({ name: 'presentation_state' })
  presentationState: string

  @Column()
  @ApiProperty({ name: 'supervisor_study_department' })
  supervisorStudyDepartment: string

  @Column()
  @ApiProperty({ name: 'supervisor_study_manager' })
  supervisorStudyManager: string

  @Column()
  @ApiProperty({ name: 'joint_study_department' })
  jointStudyDepartment: string

  @Column()
  @ApiProperty({ name: 'joint_study_manager' })
  jointStudyManager: string

  @Column()
  @ApiProperty({ name: 'rent_study_department' })
  rentStudyDepartment: string

  @Column()
  @ApiProperty({ name: 'rent_study_manager' })
  rentStudyManager: string
}
