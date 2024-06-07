// productos.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { Product, ProductSchema } from '../../../infrastructure/database/schemas/products/products.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}