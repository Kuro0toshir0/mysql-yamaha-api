import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}

  async create(createGalleryDto: CreateGalleryDto) {
    return this.prisma.gallery.create({
      data: createGalleryDto,
    });
  }

  async findAll() {
    return this.prisma.gallery.findMany();
  }

  async findOne(id: number) {
    return this.prisma.gallery.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.gallery.delete({
      where: { id },
    });
  }
}
