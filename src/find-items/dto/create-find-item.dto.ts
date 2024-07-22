import { IsString } from 'class-validator';

export class CreateFindItemDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly location: string;

  @IsString()
  readonly nameFind: string;

  @IsString()
  readonly contact: string;

  @IsString()
  readonly description: string;
}
