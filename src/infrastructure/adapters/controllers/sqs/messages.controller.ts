import { Controller, Post, Body } from '@nestjs/common';
import { SendMessageUseCase } from '../../../../application/use-cases/send-message.use-case';

@Controller('messages')
export class MessagesController {
  constructor(private readonly sendMessageUseCase: SendMessageUseCase) {}

  @Post()
  async sendMessage(@Body('message') message: string) {
    return this.sendMessageUseCase.execute(message);
  }
}