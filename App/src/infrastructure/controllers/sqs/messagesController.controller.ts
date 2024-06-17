// import { Controller, Post, Body } from '@nestjs/common';
// import { SqsService } from '../../../domain/services/sqs/sqs.service';

// @Controller('messages')
// export class MessagesController {
//   constructor(private readonly sqsService: SqsService) {}

//   @Post()
//   async sendMessage(@Body('message') message: string)  {
//     await this.sqsService.sendMessage(message);
//     return { status: 'Message sent to SQS' };
//   }
// }