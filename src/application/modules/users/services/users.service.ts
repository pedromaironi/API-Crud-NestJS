import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }
}