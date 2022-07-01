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

  @Column({ name: 'business_title' })
  @ApiProperty()
  businessTitle: string

  @Column({ name: 'business_manager' })
  @ApiProperty()
  businessManager: string

  @Column({ name: 'project_title' })
  @ApiProperty()
  projectTitle: string

  @Column({ name: 'project_manager' })
  @ApiProperty()
  projectManager: string

  @Column({ name: 'project_state' })
  @ApiProperty()
  projectState: string

  @Column({ name: 'project_pdf' })
  @ApiProperty()
  projectPdf: string

  @Column({ name: 'supervisor' })
  @ApiProperty()
  supervisor: string

  @Column({ name: 'money' })
  @ApiProperty()
  money: string

  @Column({ name: 'project_no' })
  @ApiProperty()
  projectNo: string

  @Column({ name: 'department' })
  @ApiProperty()
  department: string

  @Column({ name: 'specialized_organization' })
  @ApiProperty()
  specializedOrganization: string

  @Column({ name: 'presentation_state' })
  @ApiProperty()
  presentationState: string

  @Column({ name: 'supervisor_study_department' })
  @ApiProperty()
  supervisorStudyDepartment: string

  @Column({ name: 'supervisor_study_manager' })
  @ApiProperty()
  supervisorStudyManager: string

  @Column({ name: 'joint_study_department' })
  @ApiProperty()
  jointStudyDepartment: string

  @Column({ name: 'joint_study_manager' })
  @ApiProperty()
  jointStudyManager: string

  @Column({ name: 'rent_study_department' })
  @ApiProperty()
  rentStudyDepartment: string

  @Column({ name: 'rent_study_manager' })
  @ApiProperty()
  rentStudyManager: string

  @Column({ name: 'start_date' })
  @ApiProperty()
  startDate: Date

  @Column({ name: 'end_date' })
  @ApiProperty()
  endDate: Date
}
