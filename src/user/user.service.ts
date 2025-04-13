// user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';  // Import bcrypt untuk hashing password
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      
      return await this.prisma.user.create({
        data: {
          name: createUserDto.name,          
          username: createUserDto.username,
          password: hashedPassword, 
        },
      });
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    let updatedData = { ...updateUserDto };

    if (updateUserDto.password) {
      updatedData.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data: updatedData,
    });
  }

  async remove(id: number) {
    await this.findOne(id); 
    return this.prisma.user.delete({ where: { id } });
  }
}
