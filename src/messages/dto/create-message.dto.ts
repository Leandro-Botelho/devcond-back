import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  readonly description: string;

  @IsString()
  readonly date: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly location: string;
}
