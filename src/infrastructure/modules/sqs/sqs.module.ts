import { Module } from '@nestjs/common';
import { SqsService } from 'src/domain/services/sqs/sqs.service';
import { ConfigModule } from '@nestjs/config';
import { SqsListener } from 'src/domain/services/sqs/sqsListener.service';
import { messageService } from 'src/domain/services/sqs/message.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from 'src/domain/schemas/sqs/message.schema';
import { MessagesController } from 'src/infrastructure/controllers/sqs/messagesController.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
  ],
  controllers:[MessagesController],
  providers: [SqsService, SqsListener, messageService],
  exports: [SqsService, SqsListener, messageService],
})
export class SqsModule {}