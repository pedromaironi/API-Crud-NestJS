// src/application/interfaces/product.repository.ts
import { ProductDto } from '../../dto/product/product.dto';

class Product {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
  ) {}
}

export interface ProductRepository {
  createProduct(productDto: ProductDto): Promise<Product>;
  getProducts(): Promise<Product[]>;
}