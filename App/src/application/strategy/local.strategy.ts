import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../../domain/services/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    // Implement your validation logic here
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException("Invalid username");
    }
    return user;
  }
}