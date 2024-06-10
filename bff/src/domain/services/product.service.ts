import { Injectable } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class ProductService {
  private readonly baseURL: string = 'http://app:3000/products';

  private getRequestConfig(bearerToken: string): AxiosRequestConfig {
    return {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };
  }
  
  async getAllProducts(bearerToken: string): Promise<Product[]> {
    try {
      const config = this.getRequestConfig(bearerToken);
      const response = await axios.get<Product[]>(this.baseURL, config);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw error;
    }
  }

  async getProductById(id: string, bearerToken: string): Promise<Product | undefined> {
    try {
      const config = this.getRequestConfig(bearerToken);
      const response = await axios.get<Product>(`${this.baseURL}/${id}`, config);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el producto con ID ${id}:`, error);
      throw error;
    }
  }

  async createProduct(productData: Product, bearerToken: string): Promise<Product> {
    try {
      const config = this.getRequestConfig(bearerToken);
      const response = await axios.post<Product>(this.baseURL, productData, config);
      return response.data;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  }

  async updateProduct(id: string, productData: Product, bearerToken: string): Promise<Product | undefined> {
    try {
      const config = this.getRequestConfig(bearerToken);
      const response = await axios.put<Product>(`${this.baseURL}/${id}`, productData, config);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar el producto con ID ${id}:`, error);
      throw error;
    }
  }

  async deleteProduct(id: string, bearerToken: string): Promise<boolean> {
    try {
      const config = this.getRequestConfig(bearerToken);
      await axios.delete(`${this.baseURL}/${id}`, config);
      return true;
    } catch (error) {
      console.error(`Error al eliminar el producto con ID ${id}:`, error);
      throw error;
    }
  }
}