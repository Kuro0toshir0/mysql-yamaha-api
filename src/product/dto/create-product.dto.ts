import { IsOptional, IsString, IsNumber, IsArray, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLinkDto {
  @IsString()
  url: string;
}

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @Type(() => Number)
  @IsNumber()
  price: number;

  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true }) 
  links?: string[];

  @IsString()
  image: string;
}
