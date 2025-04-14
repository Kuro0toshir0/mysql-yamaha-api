import { IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateGalleryDto {
  @IsString()
  title: string;

  @IsUrl()
  @IsOptional()  
  imageUrl: string;
}
