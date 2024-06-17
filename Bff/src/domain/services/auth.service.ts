import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserRepositoryInterface } from '../interfaces/user.interface';
import { AuthServiceInterface } from '../interfaces/auth.interface';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async login(username: string, password: string): Promise<{ user: User; accessToken: string } | null> {
    return this.userRepository.login(username, password);
  }

  async register(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }
}
