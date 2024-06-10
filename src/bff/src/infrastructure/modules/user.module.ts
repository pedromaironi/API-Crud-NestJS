import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../../domain/services/user.service';
import { UserApiAdapter } from '../adapters/UserApiAdapter.adapter';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'UserRepositoryInterface',
      useClass: UserApiAdapter,
    },
  ],
  exports: ['UserRepositoryInterface'],
})
export class UserModule {}