import { Injectable } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from 'prisma/generated/client';
@Injectable()
export class PrismaService extends PrismaClient {}
