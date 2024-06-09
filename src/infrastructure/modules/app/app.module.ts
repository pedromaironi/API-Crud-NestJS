import { Module } from '@nestjs/common';
import { AppController } from '../../controllers/app/app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from '../../../domain/services/app/app.service';
// import { ThrottlerModule } from '@nestjs/throttler';
import { ProductModule } from '../product/product.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
// import { SqsModule } from '../sqs/sqs.module';
import { MongooseConfigModule } from '../database/MongooseConfig.module';
// import { SqsInterceptor } from 'src/application/interceptors/sqs.interceptor';
// import { APP_INTERCEPTOR } from '@nestjs/core';
import { MessageModule } from '../message/message.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseConfigModule,
    MessageModule,
    ProductModule,
    UsersModule,
    AuthModule,
    // SqsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: SqsInterceptor,
    // },
  ],
})
export class AppModule {}
