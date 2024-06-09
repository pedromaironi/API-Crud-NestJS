import { Injectable, OnModuleInit } from '@nestjs/common';
import { SqsService } from './sqs.service';
import { messageService } from './message.service';

@Injectable()
export class SqsListener implements OnModuleInit {
  private readonly queueUrl = 'http://localhost:9324/queue/test'; // Ajusta esto según tu configuración

  constructor(
    private readonly sqsService: SqsService,
    private readonly _messageService: messageService,
  ) {}

  async onModuleInit() {
    this.listenForMessages();
  }

  private async listenForMessages(): Promise<void> {
    while (true) {
      const params = {
        QueueUrl: this.queueUrl,
        MaxNumberOfMessages: 1,
        WaitTimeSeconds: 20,
      };

      const response = await this.sqsService.sqs.receiveMessage(params).promise();
      const messages = response.Messages;

      if (messages) {
        for (const message of messages) {
          console.log('Mensaje recibido:', message.Body);
          await this._messageService.saveMessage(message.Body);

          // Eliminar el mensaje de la cola después de procesarlo
          const deleteParams = {
            QueueUrl: this.queueUrl,
            ReceiptHandle: message.ReceiptHandle,
          };
          await this.sqsService.sqs.deleteMessage(deleteParams).promise();
        }
      }
    }
  }
}