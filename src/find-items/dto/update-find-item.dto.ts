import { PartialType } from '@nestjs/mapped-types';
import { CreateFindItemDto } from './create-find-item.dto';

export class UpdateFindItemDto extends PartialType(CreateFindItemDto) {}
