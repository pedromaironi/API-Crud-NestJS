import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../../domain/services/app.service';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';
import { ProductModule } from './product.module';

@Module({
  imports: [AuthModule, UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
