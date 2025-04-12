import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { Put } from '@nestjs/common';
import { Request } from 'express';

@Controller('Event')
export class EventController {
  constructor(private readonly eventservice: EventService) { }

  @Post()
  @UseInterceptors(FileInterceptor('imageUrl'))  // Menangani file upload dengan Multer
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() file: Express.Multer.File) {
    if (file) {
      createEventDto.image = path.join('uploads', file.filename);  // Menyimpan path file di DB
    }
    return this.eventservice.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventservice.findOne(+id);
  }


  @Put(':id')
  @UseInterceptors(FileInterceptor('imageUrl'))
  update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      updateEventDto.image = `uploads/${file.filename}`;
    }
    return this.eventservice.update(+id, updateEventDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventservice.remove(+id);
  }
}
