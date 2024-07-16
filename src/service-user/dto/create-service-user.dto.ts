import { IsEmail, IsString } from 'class-validator';

export class CreateServiceUserDto {
  @IsString()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsEmail()
  readonly date: string;

  @IsString()
  readonly description: string;
}
