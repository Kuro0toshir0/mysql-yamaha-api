import { IsString, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsDateString()
  date: string; // ISO 8601 format string

}
