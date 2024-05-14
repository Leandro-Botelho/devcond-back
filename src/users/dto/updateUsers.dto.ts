import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from './createUsers.dto';

export class UpdateUsersDTO extends PartialType(CreateUsersDto) {}
