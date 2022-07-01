import { ApiProperty } from "@nestjs/swagger"

export class BusinessDto {
  writerId: number

  @ApiProperty({ description: '사업명' })
  businessTitle: string

  @ApiProperty({ description: '내부 담당자' })
  businessManager: string

  @ApiProperty({ description: '과제명' })
  projectTitle: string

  @ApiProperty({ description: '사업명' })
  projectManager: string

  @ApiProperty({ description: '과제 상태' })
  projectState: string

  @ApiProperty({ description: '과제 PDF' })
  projectPdf: string

  @ApiProperty({ description: '주관부처' })
  supervisor: string

  @ApiProperty({ description: '사업비' })
  money: string

  @ApiProperty({ description: '과제번호' })
  projectNo: string

  @ApiProperty({ description: '' })
  department: string

  @ApiProperty({ description: '전문기관' })
  specializedOrganization: string

  @ApiProperty({ description: '발표상태' })
  presentationState: string

  @ApiProperty({ description: '주관연구기관' })
  supervisorStudyDepartment: string

  @ApiProperty({ description: '주관연구책임자' })
  supervisorStudyManager: string

  @ApiProperty({ description: '공동연구기관' })
  jointStudyDepartment: string

  @ApiProperty({ description: '공동연구책임자' })
  jointStudyManager: string

  @ApiProperty({ description: '위탁연구기관' })
  rentStudyDepartment: string

  @ApiProperty({ description: '위탁연구책임자' })
  rentStudyManager: string

  @ApiProperty({ description: '시작일자' })
  startDate: Date

  @ApiProperty({ description: '끝일자' })
  endDate: Date

  @ApiProperty({ description: '메모' })
  memo: string
}
