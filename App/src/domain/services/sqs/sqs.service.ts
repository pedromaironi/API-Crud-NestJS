// import { Injectable } from '@nestjs/common';
// import { SQS } from 'aws-sdk';

// @Injectable()
// export class SqsService {
//   public sqs: SQS;

//   constructor() {
//     this.sqs = new SQS({
//       endpoint: process.env.AWS_SQS_ENDPOINT, 
//       region: process.env.AWS_REGION,
//       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     });
//   }

//   async sendMessage(messageBody: string) {
//     const params = {
//       QueueUrl: `${process.env.AWS_SQS_ENDPOINT}/queue/test`,
//       MessageBody: messageBody,
//     };

//     return this.sqs.sendMessage(params).promise();
//   }

//   async receiveMessages(queueUrl: string) {
//     const params = {
//       QueueUrl: queueUrl,
//       MaxNumberOfMessages: 10,
//       WaitTimeSeconds: 10,
//     };
//     return this.sqs.receiveMessage(params).promise();
//   }
// }