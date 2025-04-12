import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Menyajikan file statis menggunakan express.static()
  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
  app.enableCors(); 
  await app.listen(4000);
}
bootstrap();
