import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) { }

  @Post()
  @UseInterceptors(FileInterceptor('imageUrl', {
    storage: diskStorage({
      destination: path.join(process.cwd(), 'uploads'),
      filename: (req, file, cb) => {
        // Gunakan nama asli file tanpa modifikasi
        const ext = path.extname(file.originalname);  // Mendapatkan ekstensi file
        const originalName = path.basename(file.originalname, ext);  // Mendapatkan nama file tanpa ekstensi
        cb(null, `${originalName}${ext}`);  // Menyimpan file dengan nama asli
      },
    }),
  }))
  create(
    @Body() createGalleryDto: CreateGalleryDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      // Gunakan path relatif untuk URL akses file
      createGalleryDto.imageUrl = `/uploads/${file.filename}`;
    }
    return this.galleryService.create(createGalleryDto);
  }


  @Get()
  findAll() {
    return this.galleryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galleryService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galleryService.remove(+id);
  }
}
