/* eslint-disable hexagonal-architecture/enforce */
import { Injectable } from '@nestjs/common';
import { ElasticMQMessageSenderAdapter } from 'src/domain/services/message/mqMessageSender.service';
import { ElasticMQMessageReceiverAdapter } from 'src/domain/services/message/mqMessageReceiver.service';
import { SQS } from 'aws-sdk';

@Injectable()
export class MessageService {
  public sqs: SQS;

  constructor(
    private readonly messageSender: ElasticMQMessageSenderAdapter,
    private readonly messageReceiver: ElasticMQMessageReceiverAdapter,
  ) {
    this.sqs = new SQS({
        endpoint: process.env.AWS_SQS_ENDPOINT, 
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      });
  }

  async sendMessage(message: any): Promise<void> {
    await this.messageSender.sendMessage(message);
  }

  async receiveMessages(): Promise<void> {
    await this.messageReceiver.receiveMessages();
  }
}