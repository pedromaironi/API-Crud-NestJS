import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../../domain/services/auth.service';
import { AuthApiAdapter } from '../adapters/AuthApiAdapter.adapter';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'UserRepositoryInterface',
      useClass: AuthApiAdapter,
    },
  ],
  exports: ['UserRepositoryInterface'],
})
export class AuthModule {}