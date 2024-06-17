import { Injectable } from '@nestjs/common';
import { ProductInterface } from '../../../domain/interfaces/product/product.interface';
import { Product } from '../../../domain/entities/product/product.entity';
import { CreateProductDto } from 'src/domain/dto/product/createProduct.dto';
import { ProductRepository } from '../../../domain/repository/product/product.repository';

@Injectable()
export class ProductUseCases implements ProductInterface {
  constructor(private readonly productInterface: ProductRepository) {}

  async createProduct(productDto: CreateProductDto): Promise<Product> {
    const { name, price, category } = productDto;
    const product = new Product(name, price, category);
    return this.productInterface.createProduct(product);
  }

  async deleteProduct(productId: string): Promise<void> {
    await this.productInterface.deleteProduct(productId);
  }

  async updateProduct(
    productId: string,
    productDto: CreateProductDto,
  ): Promise<Product> {
    const { name, price, category } = productDto;
    const product = new Product(name, price, category);
    return this.productInterface.updateProduct(productId, product);
  }

  async findAllProducts(): Promise<Product[]> {
    return this.productInterface.findAllProducts();
  }
}
