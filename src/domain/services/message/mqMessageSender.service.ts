import { Injectable } from '@nestjs/common';
import { MessageSender } from '../../interfaces/sqs/message-sender.interface';
import { SQS } from 'aws-sdk';

@Injectable()
export class ElasticMQMessageSenderAdapter implements MessageSender {
  private readonly sqs: SQS;
  private readonly queueUrl: string = 'http://localhost:9324/queue/my-queue';
  private readonly queueName: string = 'my-queue';

  constructor() {
    this.sqs = new SQS({
      endpoint: process.env.AWS_SQS_ENDPOINT,
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

      const paramsInit = {
        QueueName: this.queueName,
      };

      this.sqs.createQueue(paramsInit).promise();

  }

  async sendMessage(message: any): Promise<void> {
    try {

      const params = {
        QueueUrl: this.queueUrl,
        MessageBody: JSON.stringify(message),
      };

      await this.sqs.sendMessage(params).promise();
      console.log('Mensaje enviado 🚀:', message);
    } catch (error) {
      console.error('Error al enviar mensaje a ElasticMQ:', error);
    }
  }
}
