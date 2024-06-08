import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SQS } from 'aws-sdk';

@Injectable()
export class SqsService {
  private sqs: SQS;

  constructor(private configService: ConfigService) {
    this.sqs = new SQS({
      endpoint: this.configService.get<string>('AWS_SQS_ENDPOINT'),
      region: this.configService.get<string>('AWS_REGION'),
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
    });
  }

  async sendMessage(queueUrl: string, messageBody: string) {
    const params = {
      QueueUrl: queueUrl,
      MessageBody: messageBody,
    };

    return this.sqs.sendMessage(params).promise();
  }
}