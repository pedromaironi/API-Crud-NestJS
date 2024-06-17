// src/application/interfaces/product.repository.ts
import { Product } from 'src/domain/entities/product/product.entity';
import { CreateProductDto } from 'src/domain/dto/product/createProduct.dto';

export interface ProductInterface {
  createProduct(product: CreateProductDto): Promise<Product>;
  deleteProduct(productId: string): Promise<void>;
  updateProduct(productId: string, product: Product): Promise<Product>;
  findAllProducts(): Promise<Product[]>;
}