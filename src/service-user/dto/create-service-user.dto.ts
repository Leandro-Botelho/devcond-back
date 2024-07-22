import { IsBoolean, IsString } from 'class-validator';

export class CreateServiceUserDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly date: string;

  @IsBoolean()
  readonly status: boolean;

  @IsString()
  readonly description: string;
}
