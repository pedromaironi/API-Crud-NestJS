import { Injectable, Inject } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserRepositoryInterface } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async findUserByUsername(username: string): Promise<User | null> {
    return this.userRepository.findUserByUsername(username);
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }
}