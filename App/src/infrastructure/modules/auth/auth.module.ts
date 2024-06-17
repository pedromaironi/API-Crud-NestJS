import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../../../domain/services/auth/auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from '../../controllers/auth/auth.controller';
import { JwtStrategy } from '../../../application/strategy/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtService } from '../../../domain/services/auth/jwt.service';
import { LocalStrategy } from '../../../application/strategy/local.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '3d' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtService, LocalStrategy],
})
export class AuthModule {
}