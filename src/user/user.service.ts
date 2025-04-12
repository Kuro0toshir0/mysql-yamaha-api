import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Menggunakan Prisma untuk interaksi dengan DB
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/userresponse.dto';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Membuat user baru
  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });

    return this.mapToResponseDto(user);
  }

  // Mendapatkan semua user
  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.prisma.user.findMany();
    return users.map(user => this.mapToResponseDto(user));
  }

  // Mendapatkan satu user berdasarkan ID
  async findOne(id: number): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.mapToResponseDto(user);
  }

  // Memperbarui data user
  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserResponseDto> {
    const user = await this.findOne(id); // Pastikan user ada sebelum update

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    return this.mapToResponseDto(updatedUser);
  }

  // Menghapus user berdasarkan ID
  async remove(id: number): Promise<void> {
    const user = await this.findOne(id); // Pastikan user ada sebelum dihapus

    await this.prisma.user.delete({
      where: { id },
    });
  }

  private mapToResponseDto(user: any): UserResponseDto {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
