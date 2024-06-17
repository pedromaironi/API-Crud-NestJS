import { Product } from '../../domain/interfaces/product.interface';
import { ProductService } from '../../domain/services/product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(request: any): Promise<Product[]>;
    getProductById(id: string, request: any): Promise<Product | undefined>;
    createProduct(productData: Product, request: any): Promise<Product>;
    updateProduct(id: string, productData: Product, request: any): Promise<Product | undefined>;
    deleteProduct(id: string, request: any): Promise<boolean>;
}
