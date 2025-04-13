import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
  app.use(cookieParser()); 
  app.enableCors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
  });  await app.listen(4000);
}
bootstrap();
