// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { SqsService } from '../../../domain/services/sqs/sqs.service';
// import { MessageRepository } from '../../../domain/repository/sqs/messageRepository.repository';
// import { Message } from '../../entities/sqs/message.entity';

// @Injectable()
// export class SqsListener implements OnModuleInit {
//   constructor(
//     private readonly sqsService: SqsService,
//     private readonly messageRepository: MessageRepository,
//   ) {}

//   onModuleInit() {
//     this.listenToQueue();
//   }

//   async listenToQueue() {
//     const queueUrl = `${process.env.AWS_SQS_ENDPOINT}/queue/test`;
    
//     while (true) {
//       const response = await this.sqsService.receiveMessages(queueUrl);
//       const messages = response.Messages;
      
//       if (messages) {
//         for (const message of messages) {
//           const body = message.Body;
//           const newMessage = new Message(body);
//           await this.messageRepository.saveMessage(newMessage);
//         }
//       }
//     }
//   }
// }