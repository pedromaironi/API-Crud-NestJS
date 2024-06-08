import { Injectable } from '@nestjs/common';
import { SqsService } from '../../../application/services/sqs/sqs.service';

@Injectable()
export class SendMessageUseCase {
  constructor(private readonly sqsService: SqsService) {}

  async execute(message: string) {
    const queueUrl = `${process.env.AWS_SQS_ENDPOINT}/queue/test`;
    return this.sqsService.sendMessage(queueUrl, message);
  }
}