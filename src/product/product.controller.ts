import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', {
      storage: diskStorage({
        destination: path.join(process.cwd(), 'uploads'),
        filename: (req, file, cb) => {
          const ext = path.extname(file.originalname);  // Mendapatkan ekstensi file
          const originalName = path.basename(file.originalname, ext);  // Mendapatkan nama file tanpa ekstensi
          cb(null, `${originalName}${ext}`);  // Menyimpan file dengan nama asli
        },
      }),
    }))
    create(
      @Body() CreateProductDto: CreateProductDto,
      @UploadedFile() file: Express.Multer.File,
    ) {

      CreateProductDto.price = parseFloat(CreateProductDto.price as any);

      if (file) {
        CreateProductDto.image = `/uploads/${file.filename}`;
      }
      return this.productService.create(CreateProductDto);
    }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

    @Put(':id')
    @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: path.join(process.cwd(), 'uploads'),
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const originalName = path.basename(file.originalname, ext);
        cb(null, `${originalName}${ext}`);
      },
    }),
  }))

  update(
    @Param('id') id: string,
    @Body() UpdateProductDto: UpdateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {

    UpdateProductDto.price = parseFloat(UpdateProductDto.price as any);
    
    if (file) {
      UpdateProductDto.image = `/uploads/${file.filename}`;
    }
    return this.productService.update(+id, UpdateProductDto);
  }
  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
