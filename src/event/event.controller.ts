import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import path from 'path';

import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('Event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const originalName = file.originalname.split('.')[0];
          const fileExt = path.extname(file.originalname);
          const newFileName = `${originalName}-${Date.now()}${fileExt}`;
          cb(null, newFileName);
        },
      }),
    }),
  )
  async create(
    @UploadedFile() file: Express.Multer.File, // Menangani file image
    @Body() CreateEventDto: CreateEventDto,   // Menangani data lainnya
  ) {
    // Membuat URL file image yang baru
    const fileUrl = file ? `/uploads/${file.filename}` : null;
  
    // Gabungkan data dari DTO dan URL gambar
    const eventData = {
      ...CreateEventDto,   
      image: fileUrl,    
    };
  
    return await this.eventService.create(eventData);
  }
  

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  // @Put(':id')
  // @UseInterceptors(
  //   FileInterceptor('image', {
  //     storage: diskStorage({
  //       destination: './uploads',
  //       filename: (req, file, callback) => {
  //         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const ext = extname(file.originalname);
  //         callback(null, `event-${uniqueSuffix}${ext}`);
  //       },
  //     }),
  //   }),
  // )
  // update(
  //   @Param('id') id: string,
  //   @Body() updateEventDto: UpdateEventDto,
  //   @UploadedFile() file: Express.Multer.File,
  // ) {
  //   if (file) {
  //     updateEventDto.image = `uploads/${file.filename}`;
  //   }
  //   return this.eventService.update(+id, updateEventDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
