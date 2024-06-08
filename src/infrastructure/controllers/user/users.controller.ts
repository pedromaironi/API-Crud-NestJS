import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UsersService } from '../../../domain/services/user/users.service';
import { CreateUserDto } from '../../../domain/dto/user/create-user.dto';
import { JwtAuthGuard } from '../../../application/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
  
}