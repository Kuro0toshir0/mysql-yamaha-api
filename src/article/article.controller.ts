import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { Request } from 'express';
import { Put } from '@nestjs/common';

@Controller('Article')
export class ArticleController {
  constructor(private readonly Articleservice: ArticleService) {}

  @Post()
   @UseInterceptors(FileInterceptor('thumbnail', {
      storage: diskStorage({
        destination: path.join(process.cwd(), 'uploads'),
        filename: (req, file, cb) => {
          const ext = path.extname(file.originalname);  // Mendapatkan ekstensi file
          const originalName = path.basename(file.originalname, ext);  // Mendapatkan nama file tanpa ekstensi
          cb(null, `${originalName}${ext}`);  
        },
      }),
    }))
    create(
      @Body() CreateArticleDto: CreateArticleDto,
      @UploadedFile() file: Express.Multer.File,
    ) {
      CreateArticleDto.authorId = parseInt(CreateArticleDto.authorId as any);
      if (file) {
        // Gunakan path relatif untuk URL akses file
        CreateArticleDto.thumbnail = `/uploads/${file.filename}`;
      }
      return this.Articleservice.create(CreateArticleDto);
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
  @UseInterceptors(FileInterceptor('thumbnail', {
    storage: diskStorage({
      destination: path.join(process.cwd(), 'uploads'),
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const originalName = path.basename(file.originalname, ext);
        cb(null, `${originalName}${ext}`);
      },
    }),
  }))
  update(
    @Param('id') id: string,
    @Body() UpdateArticleDto: UpdateArticleDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    UpdateArticleDto.authorId = parseInt(UpdateArticleDto.authorId as any);

    if (file) {
      UpdateArticleDto.thumbnail = `/uploads/${file.filename}`;
    }
    return this.Articleservice.update(+id, UpdateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.Articleservice.remove(+id);
  }
}
