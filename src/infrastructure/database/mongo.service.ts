// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Product, ProductDocument } from '../../../schemas/products/products.schema';

// @Injectable()
// export class MongoService {
//   constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

//   async findAll(): Promise<Product[]> {
//     return this.productModel.find().exec();
//   }

//   async create(product: Product): Promise<Product> {
//     const newProduct = new this.productModel(product);
//     return newProduct.save();
//   }
// }