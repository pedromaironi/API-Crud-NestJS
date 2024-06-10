import { Product } from '../interfaces/product.interface';
export declare class ProductService {
    private readonly baseURL;
    private getRequestConfig;
    getAllProducts(bearerToken: string): Promise<Product[]>;
    getProductById(id: string, bearerToken: string): Promise<Product | undefined>;
    createProduct(productData: Product, bearerToken: string): Promise<Product>;
    updateProduct(id: string, productData: Product, bearerToken: string): Promise<Product | undefined>;
    deleteProduct(id: string, bearerToken: string): Promise<boolean>;
}
