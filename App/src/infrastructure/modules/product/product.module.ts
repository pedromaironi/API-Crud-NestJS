import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from '../../../domain/services/product/product.service';
import { ProductController } from '../../controllers/product/product.controller';
import { ProductSchema } from '../../../domain/schemas/products/products.schema';
import { ProductUseCases } from '../../../domain/use-cases/product/product.use-cases';
import { ProductRepository } from '../../../domain/repository/product/product.repository';
import { MessageModule } from '../message/message.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    // MessageModule
  ],
  providers: [
    ProductService,
    ProductUseCases,
    ProductRepository,

  ],
  controllers: [ProductController],
  exports: [ProductService, ProductUseCases, ProductRepository],
})
export class ProductModule {}
