import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../../../domain/schemas/products/products.schema';
import { ProductInterface } from '../../../domain/interfaces/product/product.interface';

@Injectable()
export class ProductRepository implements ProductInterface {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) {}

  async createProduct(product: Product): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async deleteProduct(productId: string): Promise<void> {
    await this.productModel.findByIdAndDelete(productId).exec();
  }

  async updateProduct(productId: string, product: Product): Promise<Product> {
    return this.productModel.findByIdAndUpdate(productId, product, { new: true }).exec();
  }

  async findAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}