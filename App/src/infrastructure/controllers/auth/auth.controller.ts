import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../../../domain/services/auth/auth.service';
import { LocalAuthGuard } from '../../../application/guards/local-auth.guard';
import { CreateUserDto } from '../../../domain/dto/user/create-user.dto';
import { JwtAuthGuard } from '../../../application/guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    // console.log(process.env.JWT_SECRET);

    return this.authService.register(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}