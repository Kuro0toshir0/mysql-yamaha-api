import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateEventDto) {
    return this.prisma.event.create({
      data: {
        ...data,
        date: new Date(data.date),
      },
    });
  }

  findAll() {
    return this.prisma.event.findMany({
      orderBy: { date: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.event.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateEventDto) {
    const existing = await this.prisma.event.findUnique({ where: { id } });
    if (!existing) {
      throw new Error('Event not found');
    }
  
    return this.prisma.event.update({
      where: { id },
      data: {
        ...data,
        image: data.image ?? existing.image,
        date: data.date ? new Date(data.date) : existing.date,
      },
    });
  }
  

  remove(id: number) {
    return this.prisma.event.delete({
      where: { id },
    });
  }
}
