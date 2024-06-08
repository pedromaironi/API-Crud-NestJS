import { Module } from '@nestjs/common';
import { AppController } from '../../controllers/app/app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from '../../../domain/services/app/app.service';
// import { ThrottlerModule } from '@nestjs/throttler';
import { ProductModule } from '../product/product.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { SqsModule } from '../sqs/sqs.module';
import { MongooseConfigModule } from '../database/MongooseConfig.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseConfigModule,
    ProductModule,
    UsersModule,
    AuthModule,
    SqsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}