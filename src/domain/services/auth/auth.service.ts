import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../../domain/services/user/users.service';
import { CreateUserDto } from '../../dto/user/create-user.dto';
import { User } from '../../interfaces/user/users.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  // async generateToken(user: User): Promise<string> {
  //   const payload = { username: user.username, sub: user.id };
  //   return this.jwtService.sign(payload);
  // }

  async login(user: User): Promise<{ access_token: string; user: User }> {
    const payload = { username: user.username, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return {
      access_token: accessToken,
      user: user,
      };
  }
  async register(createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}