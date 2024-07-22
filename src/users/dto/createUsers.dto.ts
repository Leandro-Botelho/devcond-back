import { IsEmail, IsString } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly contact: string;

  @IsString()
  readonly condominium: string;

  @IsString()
  readonly apartment: string;

  @IsString()
  readonly town: string;

  @IsString()
  readonly created_at: Date;
}
