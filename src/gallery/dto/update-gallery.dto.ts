import { PartialType } from '@nestjs/mapped-types';
import { CreateGalleryDto } from './create-gallery.dto';
import { IsString, IsOptional, IsUrl } from 'class-validator';


export class UpdateGalleryDto extends PartialType(CreateGalleryDto) { 
    @IsString()
    @IsOptional()
    title?: string;
  
    @IsUrl()
    @IsOptional()
    imageUrl?: string;
}


