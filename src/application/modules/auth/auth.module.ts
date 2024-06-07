import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { UsersModule } from '../users//users.module';
import { JwtStrategy } from './jwt.strategy/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your_secret_key', // Replace with your own secret key
      signOptions: { expiresIn: '1h' }, // Adjust expiration time as needed
    }),
    UsersModule, // Import the UsersModule to access the UsersService
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService], // Export the AuthService to be used in other modules
})
export class AuthModule {}