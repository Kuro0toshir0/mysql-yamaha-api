import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  thumbnail: string;

  @IsInt()
  authorId: number;
}
