import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDocument } from '../../../domain/schemas/sqs/message.schema';

@Injectable()
export class MessageSaverService {
  constructor(@InjectModel('Message') private readonly messageModel: Model<MessageDocument>) {}

  async saveMessage(message: any): Promise<void> {
    const createdMessage = new this.messageModel(message);
    await createdMessage.save();
  }
}