import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from 'src/domain/entities/sqs/message.entity';

@Injectable()
export class MessageRepository {
  constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) {}

  async saveMessage(message: Message): Promise<Message> {
    const newMessage = new this.messageModel(message);
    return newMessage.save();
  }

  async getMessages(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }
}