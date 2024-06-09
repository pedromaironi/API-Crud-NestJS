// import { Module } from '@nestjs/common';
// import { SqsService } from 'src/domain/services/sqs/sqs.service';
// import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
// import { MessageSchema } from 'src/domain/schemas/sqs/message.schema';
// import { MessagesController } from 'src/infrastructure/controllers/sqs/messagesController.controller';
// import { SqsListener } from 'src/domain/services/sqs/sqsListener.service';
// import { MessageRepository } from 'src/domain/repository/sqs/messageRepository.repository';

// @Module({
//   imports: [
//     ConfigModule,
//     MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
//   ],
//   controllers:[MessagesController],
//   providers: [SqsService, SqsListener, MessageRepository],
//   exports: [SqsService, SqsListener]
// })

// export class SqsModule {}