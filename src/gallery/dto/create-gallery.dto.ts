import { IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateGalleryDto {
  @IsString()
  title: string;

  @IsUrl()
  @IsOptional()  // Menandakan bahwa ini bisa kosong saat pembuatan pertama kali
  imageUrl: string;
}
