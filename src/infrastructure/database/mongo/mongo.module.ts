import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '../../config/config.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('DATABASE_URI'),
        user: configService.get('DATABASE_USER'),
        pass: configService.get('DATABASE_PASS'),
        dbName: configService.get('DATABASE_NAME'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MongoModule {}