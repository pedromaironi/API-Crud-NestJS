import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SqsService } from '../../services/sqs/sqs.service';

@Module({
  imports: [ConfigModule],
  providers: [SqsService],
  exports: [SqsService],
})
export class SqsModule {}