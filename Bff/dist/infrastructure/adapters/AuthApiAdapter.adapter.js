"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApiAdapter = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const user_entity_1 = require("../../domain/entities/user.entity");
let AuthApiAdapter = class AuthApiAdapter {
    constructor() {
        this.baseURL = 'http://app:3000/auth';
    }
    findUserByUsername(username) {
        throw new Error('Method not implemented.' + username);
    }
    async login(username, password) {
        try {
            const response = await axios_1.default.post(`${this.baseURL}/login`, { username, password });
            const data = response.data;
            if (data && data.user) {
                const user = new user_entity_1.User(data.user.username, data.user.password, data.user.email, data.access_token);
                return { user, accessToken: data.access_token };
            }
            return null;
        }
        catch (error) {
            console.error('Error during login:', error);
            return null;
        }
    }
    async createUser(user) {
        try {
            const response = await axios_1.default.post(`${this.baseURL}/register`, user);
            const data = response.data;
            return new user_entity_1.User(data.username, data.password, data.email);
        }
        catch (error) {
            console.error('Error during registration:', error);
            throw error;
        }
    }
};
exports.AuthApiAdapter = AuthApiAdapter;
exports.AuthApiAdapter = AuthApiAdapter = __decorate([
    (0, common_1.Injectable)()
], AuthApiAdapter);
//# sourceMappingURL=AuthApiAdapter.adapter.js.map