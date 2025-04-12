import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // biar bisa digunakan di seluruh module tanpa di-import satu-satu
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
