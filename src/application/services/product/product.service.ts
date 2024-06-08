import { Injectable } from '@nestjs/common';
import { ProductUseCase } from '../../../domain/use-cases/product/product.use-cases';
import { CreateProductDto } from '../../../domain/dto/product/createProduct.dto';
import { Product } from '../../../application/entities/product/product.entity';
import { ProductRepository } from 'src/domain/interfaces/product/product.repository';

@Injectable()
export class ProductService {
  constructor(
    private readonly productUseCases: ProductUseCase,
    private readonly productRepository: ProductRepository,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = new Product(createProductDto);
    return this.productUseCases.createProduct(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productUseCases.getProducts();
  }
}
