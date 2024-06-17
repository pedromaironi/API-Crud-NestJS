/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserRepositoryInterface } from '../../domain/interfaces/user.interface';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class UserApiAdapter implements UserRepositoryInterface {
  login(
    _username: string,
    _password: string,
  ): Promise<{ user: User; accessToken: string }> {
    throw new Error('Method not implemented.');
  }
  private readonly baseURL: string = 'http://app:3000/users';

  async findUserByUsername(username: string): Promise<User | null> {
    try {
      const response = await axios.get(`${this.baseURL}/${username}`);
      const data = response.data;
      return data ? new User(data.username, data.password, data.email) : null;
    } catch (error) {
      console.error('Error during findUserByUsername:', error);
      return null;
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      const response = await axios.post(this.baseURL, user);
      const data = response.data;
      return new User(data.username, data.password, data.email);
    } catch (error) {
      console.error('Error during createUser:', error);
      throw error;
    }
  }
}
