import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { Request } from 'express';
import { Put } from '@nestjs/common';

@Controller('Article')
export class ArticleController {
  constructor(private readonly Articleservice: ArticleService) {}

  @Post()
  @UseInterceptors(FileInterceptor('imageUrl'))  // Menangani file upload dengan Multer
  create(@Body() createArticleDto: CreateArticleDto, @UploadedFile() file: Express.Multer.File) {
    if (file) {
      createArticleDto.thumbnail = path.join('../uploads', file.filename);  // Menyimpan path file di DB
    }
    return this.Articleservice.create(createArticleDto);
  }

  @Get()
  findAll() {
    return this.Articleservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.Articleservice.findOne(+id);
  }

  @Put(':id')
    update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
      return this.Articleservice.update(+id, updateArticleDto);
    }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.Articleservice.remove(+id);
  }
}
