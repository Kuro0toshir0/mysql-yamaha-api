// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async validateUser(username: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }

    return null; // Jika tidak ada user atau password salah
  }

  // Login dan menghasilkan JWT
  async login(user: any) {
    const payload = { 
      sub: user.id,
      username: user.username,
     }; // menggunakan user.id sebagai sub
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  // Verifikasi token
  async verifyToken(token: string) {
    return this.jwtService.verify(token); // Verifikasi JWT
  }
}
