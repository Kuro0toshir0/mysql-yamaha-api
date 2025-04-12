import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [PrismaModule],
  controllers: [ArticleController],
  providers: [ArticleService,PrismaService],
})
export class ArticleModule {}
