import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { Product } from '../../../../infrastructure/database/schemas/products/products.schema';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

//   @Get(':id')
//   async findOne(@Param('id') id: string) {
//     return this.productsService.findOne(id);
//   }

//   @Post()
//   async create(@Body() createProductDto: CreateProductDto) {
//     return this.productsService.create(createProductDto);
//   }

//   @Put(':id')
//   async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
//     return this.productsService.update(id, updateProductDto);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string) {
//     return this.productsService.delete(id);
//   }
}