import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ArticleModule } from './article/article.module';
import { EventModule } from './event/event.module';
import { GalleryModule } from './gallery/gallery.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),  // Folder tempat file disimpan
      serveRoot: '/uploads/',  // URL prefix untuk file yang disajikan
    }),
    UserModule, 
    ProductModule,
     ArticleModule,
      EventModule,
       GalleryModule,
       PrismaModule
      ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
