"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApiAdapter = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const user_entity_1 = require("../../domain/entities/user.entity");
let UserApiAdapter = class UserApiAdapter {
    constructor() {
        this.baseURL = 'http://app:3000/users';
    }
    login(_username, _password) {
        throw new Error('Method not implemented.');
    }
    async findUserByUsername(username) {
        try {
            const response = await axios_1.default.get(`${this.baseURL}/${username}`);
            const data = response.data;
            return data ? new user_entity_1.User(data.username, data.password, data.email) : null;
        }
        catch (error) {
            console.error('Error during findUserByUsername:', error);
            return null;
        }
    }
    async createUser(user) {
        try {
            const response = await axios_1.default.post(this.baseURL, user);
            const data = response.data;
            return new user_entity_1.User(data.username, data.password, data.email);
        }
        catch (error) {
            console.error('Error during createUser:', error);
            throw error;
        }
    }
};
exports.UserApiAdapter = UserApiAdapter;
exports.UserApiAdapter = UserApiAdapter = __decorate([
    (0, common_1.Injectable)()
], UserApiAdapter);
//# sourceMappingURL=UserApiAdapter.adapter.js.map