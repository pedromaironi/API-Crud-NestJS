import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/services/users.service';
import { User } from '../../users/interfaces/users.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: User): Promise<{ access_token: string }> {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}