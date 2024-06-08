import { Injectable } from '@nestjs/common';
import { ProductDto } from '../../dto/product/product.dto';
import { ProductRepository } from '../../interfaces/product/product.repository';

class Product {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
  ) {}
}

@Injectable()
export class ProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async createProduct(productDto: ProductDto): Promise<Product> {
    return this.productRepository.createProduct(productDto);
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.getProducts();
  }
}