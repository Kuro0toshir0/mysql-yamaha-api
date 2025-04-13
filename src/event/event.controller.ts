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
import * as path from 'path';


import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('Event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
    @UseInterceptors(FileInterceptor('image', {
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
      @Body() CreateEventDto: CreateEventDto,
      @UploadedFile() file: Express.Multer.File,
    ) {
      if (file) {
        // Gunakan path relatif untuk URL akses file
        CreateEventDto.image = `/uploads/${file.filename}`;
      }
      return this.eventService.create(CreateEventDto);
    }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Put(':id')
@UseInterceptors(FileInterceptor('image', {
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
  @Body() updateEventDto: UpdateEventDto,
  @UploadedFile() file: Express.Multer.File,
) {
  if (file) {
    updateEventDto.image = `/uploads/${file.filename}`;
  }
  return this.eventService.update(+id, updateEventDto);
}


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
