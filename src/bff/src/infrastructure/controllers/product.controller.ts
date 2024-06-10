import { Controller, Get, Post, Put, Delete, Body, Param, Req } from '@nestjs/common';
import { Product } from '../../domain/interfaces/product.interface';
import { ProductService } from '../../domain/services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(@Req() request): Promise<Product[]> {
    const bearerToken = request.headers.authorization.split(' ')[1];
    return this.productService.getAllProducts(bearerToken);
  }

  @Get(':id')
  async getProductById(@Param('id') id: string, @Req() request): Promise<Product | undefined> {
    const bearerToken = request.headers.authorization.split(' ')[1];
    return this.productService.getProductById(id, bearerToken);
  }

  @Post()
  async createProduct(@Body() productData: Product, @Req() request): Promise<Product> {
    const bearerToken = request.headers.authorization.split(' ')[1];
    return this.productService.createProduct(productData, bearerToken);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() productData: Product, @Req() request): Promise<Product | undefined> {
    const bearerToken = request.headers.authorization.split(' ')[1];
    return this.productService.updateProduct(id, productData, bearerToken);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string, @Req() request): Promise<boolean> {
    const bearerToken = request.headers.authorization.split(' ')[1];
    return this.productService.deleteProduct(id, bearerToken);
  }
}
