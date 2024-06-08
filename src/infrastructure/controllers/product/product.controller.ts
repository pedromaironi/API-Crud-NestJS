import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ProductService } from '../../../domain/services/product/product.service';
import { Product } from '../../../domain/schemas/products/products.schema';
// import { JwtAuthGuard } from '../../modules/auth/guards/jwt-auth.guard';
import { CreateProductDto } from 'src/application/dto/product/createProduct.dto';


@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') productId: string): Promise<void> {
    return this.productService.deleteProduct(productId);
  }

  @Put(':id')
  async update(@Param('id') productId: string, @Body() updateProductDto: CreateProductDto): Promise<Product> {
    return this.productService.updateProduct(productId, updateProductDto);
  }
}