import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { ElasticMQMessageReceiverAdapter } from './mqMessageReceiver.service';

@Injectable()
export class ElasticMQMessageReceiverService {
  constructor(private readonly messageReceiver: ElasticMQMessageReceiverAdapter) {}

  @Interval(1000) 
  async handleMessageReception() {
    await this.messageReceiver.receiveMessages();
  }
}