import { Injectable } from '@nestjs/common';
import { MessageSender } from '../../interfaces/sqs/message-sender.interface';
import { SQS } from 'aws-sdk';

@Injectable()
export class ElasticMQMessageSenderAdapter implements MessageSender {
  public sqs: SQS;
  private queueUrl: string;

  constructor() {}

  initializeCluster(
    endpoint: string,
    region: string,
    accessKeyId: string,
    secretAccessKey: string,
    queueUrl: string,
    queueName: string,
  ): void {
    this.sqs = new SQS({
      endpoint,
      region,
      accessKeyId,
      secretAccessKey,
    });

    this.queueUrl = queueUrl;

    const params = {
      QueueName: queueName,
    };

    this.sqs
      .createQueue(params)
      .promise()
      .then(() => {
        console.log('Cola creada: 🚀', this.queueUrl);
      })
      .catch((error) => {
        console.error('Error al crear la cola:', error);
      });
  }

  async sendMessage(message: any): Promise<void>  {
    try {
      if (!this.sqs || !this.queueUrl) {
        throw new Error('Cluster no inicializado. Send');
      }

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
