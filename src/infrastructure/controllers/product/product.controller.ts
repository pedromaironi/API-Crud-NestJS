import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from '../../../domain/services/product/product.service';
import { Product } from '../../../domain/schemas/products/products.schema';
// import { JwtAuthGuard } from '../../modules/auth/guards/jwt-auth.guard';
import { CreateProductDto } from 'src/domain/dto/product/createProduct.dto';
import { JwtAuthGuard } from 'src/application/guards/jwt-auth.guard';
import { ElasticMQMessageSenderAdapter } from '../../../domain/services/message/mqMessageSender.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly messageSenderService: ElasticMQMessageSenderAdapter,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Product[]> {
    await this.messageSenderService.sendMessage({
      action: 'GET',
      message: 'Obtener todos los productos.',
    });
    return this.productService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    await this.messageSenderService.sendMessage({
      action: 'POST',
      message: 'Se creo el producto: ' + JSON.stringify(createProductDto),
    });
    return this.productService.create(createProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') productId: string): Promise<void> {
    await this.messageSenderService.sendMessage({
      action: 'DELETE',
      message: 'Se elimino el producto: ' + productId,
    });
    return this.productService.deleteProduct(productId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') productId: string,
    @Body() updateProductDto: CreateProductDto,
  ): Promise<Product> {
    await this.messageSenderService.sendMessage({
      action: 'PUT',
      message: 'Se actualiazo el producto: ' + productId,
    });
    return this.productService.updateProduct(productId, updateProductDto);
  }
}
