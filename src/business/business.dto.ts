import { ApiProperty } from "@nestjs/swagger"

export class BusinessDto {
  writerId: number

  @ApiProperty()
  businessTitle: string

  @ApiProperty()
  businessManager: string

  @ApiProperty()
  projectTitle: string

  @ApiProperty()
  projectManager: string

  @ApiProperty()
  projectState: string

  @ApiProperty()
  projectPdf: string

  @ApiProperty()
  supervisor: string

  @ApiProperty()
  money: string

  @ApiProperty()
  projectNo: string

  @ApiProperty()
  department: string

  @ApiProperty()
  specializedOrganization: string

  @ApiProperty()
  presentationState: string

  @ApiProperty()
  supervisorStudyDepartment: string

  @ApiProperty()
  supervisorStudyManager: string

  @ApiProperty()
  jointStudyDepartment: string

  @ApiProperty()
  jointStudyManager: string

  @ApiProperty()
  rentStudyDepartment: string

  @ApiProperty()
  rentStudyManager: string

  @ApiProperty()
  startDate: string

  @ApiProperty()
  endDate: string
}
