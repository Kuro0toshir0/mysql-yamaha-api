import { IsString, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsDateString()
  date: string; 

  @IsString()
  image: string;
}
