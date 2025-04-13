import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createProductDto: CreateProductDto) {
    const { links, ...productData } = createProductDto;

    return this.prisma.product.create({
      data: {
        ...productData,
        links: links?.length ? { create: links.map(url => ({ url })) } : undefined,
      },
      include: { links: true },
    });

  }

  async findAll() {
    return this.prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      include: { links: true },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { links: true },
    });

    if (!product) {
      throw new NotFoundException('Produk tidak ditemukan');
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id); 
  
    const { links, ...productData } = updateProductDto;
    const data: any = { ...productData };
  
    if (links) {
      await this.prisma.link.deleteMany({
        where: { productId: id },
      });
  
      data.links = {
        create: links.map((url) => ({ url })),
      };
    }
  
    return this.prisma.product.update({
      where: { id },
      data,
      include: { links: true },
    });
  }
  

  async remove(id: number) {
    await this.findOne(id); // pastikan produk ada

    return this.prisma.product.delete({
      where: { id },
      include: { links: true },
    });
  }
}
