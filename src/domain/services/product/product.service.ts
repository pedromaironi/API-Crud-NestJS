import { Injectable } from '@nestjs/common';
import { ProductUseCases } from '../../../domain/use-cases/product/product.use-cases';
import { CreateProductDto } from '../../dto/product/createProduct.dto';
import { Product } from '../../entities/product/product.entity';

@Injectable()
export class ProductService {
  constructor(
    private readonly productUseCases: ProductUseCases,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = new Product(createProductDto.name, createProductDto.price, createProductDto.category);
    return this.productUseCases.createProduct(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productUseCases.findAllProducts();
  }

  async deleteProduct(productId: string): Promise<void> {
    return this.productUseCases.deleteProduct(productId);
  }

  async updateProduct(productId: string, updateProductDto: CreateProductDto): Promise<Product> {
    const product = new Product(updateProductDto.name, updateProductDto.price, updateProductDto.category);
    return this.productUseCases.updateProduct(productId, product);
  }
}