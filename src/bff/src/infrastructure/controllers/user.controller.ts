import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from '../../domain/services/user.service';
import { User } from '../../domain/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username')
  async findUserByUsername(@Param('username') username: string) {
    const user = await this.userService.findUserByUsername(username);
    return user ? { username: user.username, email: user.email } : null;
  }

  @Post()
  async createUser(@Body() createUserDto: { username: string; password: string; email: string }) {
    const user = new User(createUserDto.username, createUserDto.password, createUserDto.email);
    const newUser = await this.userService.createUser(user);
    return { username: newUser.username, email: newUser.email };
  }
}