import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../../auth/services/auth.service';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/users.interface';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: User): Promise<User> {
    const user = await this.usersService.create(createUserDto);
    delete user.password; // Ensure password is not returned in response
    return user;
  }
}