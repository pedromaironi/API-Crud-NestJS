import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserRepositoryInterface } from '../../domain/interfaces/user.interface';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class AuthApiAdapter implements UserRepositoryInterface{
  findUserByUsername(username: string): Promise<User> {
    throw new Error('Method not implemented.' + username);
  }
  private readonly baseURL: string = 'http://app:3000/auth';

  async login(username: string, password: string): Promise<{ user: User; accessToken: string } | null> {
    try {
      const response = await axios.post(`${this.baseURL}/login`, { username, password });
      const data = response.data;
      if (data && data.user) {
        const user = new User(data.user.username, data.user.password, data.user.email, data.access_token);
        return { user, accessToken: data.access_token };
      }
      return null;
    } catch (error) {
      console.error('Error during login:', error);
      return null;
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      const response = await axios.post(`${this.baseURL}/register`, user);
      const data = response.data;
      return new User(data.username, data.password, data.email);
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }
}
