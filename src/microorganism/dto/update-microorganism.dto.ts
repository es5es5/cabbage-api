import { PartialType } from '@nestjs/swagger'
import { CreateMicroorganismDto } from './create-microorganism.dto'

export class UpdateMicroorganismDto extends PartialType(
  CreateMicroorganismDto,
) {}
