import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersController } from '../users/controller/users.controller';
import { UsersService } from './services/users.service';
import { AuthService } from '../auth/services/auth.service';
import { JwtStrategy } from '../auth/jwt.strategy/jwt.strategy';
import { User, UserSchema } from '../../../infrastructure/database/schemas/users/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: 'your_secret_key', // Replace with your own secret key
      signOptions: { expiresIn: '1h' }, // Adjust expiration time as needed
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService, JwtStrategy],
})
export class UsersModule {}