import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { User } from '../../domain/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    const loginResult = await this.authService.login(loginDto.username, loginDto.password);
    if (loginResult) {
      const { user, accessToken } = loginResult;
      return { username: user.username, email: user.email, accessToken };
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }
  @Post('register')
  async register(@Body() registerDto: { username: string; password: string; email: string }) {
    const user = new User(registerDto.username, registerDto.password, registerDto.email);
    const newUser = await this.authService.register(user);
    return { username: newUser.username, email: newUser.email };
  }
}