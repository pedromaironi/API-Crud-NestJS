"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let ProductService = class ProductService {
    constructor() {
        this.baseURL = 'http://app:3000/products';
    }
    getRequestConfig(bearerToken) {
        return {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        };
    }
    async getAllProducts(bearerToken) {
        try {
            const config = this.getRequestConfig(bearerToken);
            const response = await axios_1.default.get(this.baseURL, config);
            return response.data;
        }
        catch (error) {
            console.error('Error al obtener los productos:', error);
            throw error;
        }
    }
    async getProductById(id, bearerToken) {
        try {
            const config = this.getRequestConfig(bearerToken);
            const response = await axios_1.default.get(`${this.baseURL}/${id}`, config);
            return response.data;
        }
        catch (error) {
            console.error(`Error al obtener el producto con ID ${id}:`, error);
            throw error;
        }
    }
    async createProduct(productData, bearerToken) {
        try {
            const config = this.getRequestConfig(bearerToken);
            const response = await axios_1.default.post(this.baseURL, productData, config);
            return response.data;
        }
        catch (error) {
            console.error('Error al crear el producto:', error);
            throw error;
        }
    }
    async updateProduct(id, productData, bearerToken) {
        try {
            const config = this.getRequestConfig(bearerToken);
            const response = await axios_1.default.put(`${this.baseURL}/${id}`, productData, config);
            return response.data;
        }
        catch (error) {
            console.error(`Error al actualizar el producto con ID ${id}:`, error);
            throw error;
        }
    }
    async deleteProduct(id, bearerToken) {
        try {
            const config = this.getRequestConfig(bearerToken);
            await axios_1.default.delete(`${this.baseURL}/${id}`, config);
            return true;
        }
        catch (error) {
            console.error(`Error al eliminar el producto con ID ${id}:`, error);
            throw error;
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
//# sourceMappingURL=product.service.js.map