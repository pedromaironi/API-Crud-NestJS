import { ProductService } from '../../../application/services/product/product.service';
import { CreateProductDto } from '../../../domain/dto/product/createProduct.dto';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { Product } from '../../../application/entities/product/product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}