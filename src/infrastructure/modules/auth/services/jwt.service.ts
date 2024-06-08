import { Injectable } from '@nestjs/common';
import { JwtStrategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtService {
  constructor(private readonly configService: ConfigService) {}

  configureJwtStrategy() {
    const jwtSecret = this.configService.get<string>('JWT_TOKEN');
    console.log('JWT Secret:', jwtSecret); // Logging statement to check the JWT secret/key
    // Pass the JWT secret/key to the JwtStrategy constructor
    const jwtStrategy = new JwtStrategy({
      secretOrKey: jwtSecret,
      // Other JwtStrategy configuration options...
    });
    // Return the configured JwtStrategy
    return jwtStrategy;
  }
}