import { Injectable, OnModuleInit } from '@nestjs/common';
import { ElasticMQMessageSenderAdapter } from '../message/mqMessageSender.service';
import { ElasticMQMessageReceiverAdapter } from '../message/mqMessageReceiver.service';

@Injectable()
export class ClusterService implements OnModuleInit {
  constructor(
    private readonly messageSenderAdapter: ElasticMQMessageSenderAdapter,
    private readonly messageReceiverAdapter: ElasticMQMessageReceiverAdapter,
  ) {}

  async onModuleInit() {
    this.initializeClusters();
  }

  async initializeClusters() {
    const endpoint = process.env.AWS_SQS_ENDPOINT;
    const region = process.env.AWS_REGION;
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    const queueName = process.env.AWS_SQS_QUEUE_NAME;
    const queueUrl = process.env.AWS_SQS_QUEUE_URL;
    this.messageSenderAdapter.initializeCluster(
      endpoint,
      region,
      accessKeyId,
      secretAccessKey,
      queueUrl,
      queueName,
    );
    this.messageReceiverAdapter.initializeCluster(
      endpoint,
      region,
      accessKeyId,
      secretAccessKey,
      queueUrl,
      queueName,
    );
  }

  async sendMessagesToCluster(message: any) {
    await this.messageSenderAdapter.sendMessage(message);
  }

  async receiveMessagesFromCluster() {
    await this.messageReceiverAdapter.receiveMessages();
  }
}
