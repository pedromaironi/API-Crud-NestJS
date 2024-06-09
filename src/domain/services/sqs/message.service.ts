import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageSQS as Message } from '../../interfaces/sqs/messageSQS.interface';

@Injectable()
export class messageService {
  constructor(
    @InjectModel('Message') private readonly messageModel: Model<Message>,
  ) {}

  async saveMessage(body: string): Promise<Message> {
    const createdMessage = new this.messageModel({ body });
    return createdMessage.save();
  }
}