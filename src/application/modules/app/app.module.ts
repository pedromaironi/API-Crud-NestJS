import { Module } from '@nestjs/common';
import { AppController } from '../infrastructure/adapters/controllers/application/app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './services/application/app.service';
// import { ThrottlerModule } from '@nestjs/throttler';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SqsModule } from 'src/infrastructure/sqs/sqs.module';
import { MessagesController } from 'src/infrastructure/adapters/controllers/sqs/messages.controller';
import { SendMessageUseCase } from './use-cases/send-message.use-case';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URI, {
      dbName: process.env.DATABASE_NAME,
      auth: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
      },
    }),

    ProductsModule,
    UsersModule,
    AuthModule,
    SqsModule
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, SendMessageUseCase]
})
export class AppModule {}