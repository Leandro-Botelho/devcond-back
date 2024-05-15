import { IsEmail, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  readonly name: string;
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
