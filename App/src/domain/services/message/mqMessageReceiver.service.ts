import { Injectable } from '@nestjs/common';
import { SQS } from 'aws-sdk';
import { MessageSaverService } from './MessageSaverService.service';

@Injectable()
export class ElasticMQMessageReceiverAdapter {
  private sqs: SQS;
  private queueUrl: string;
  private queueName;

  constructor(private readonly messageService: MessageSaverService) {}

  initializeCluster(
    endpoint: string,
    region: string,
    accessKeyId: string,
    secretAccessKey: string,
    queueUrl: string,
    queueName: string
  ) {
    this.sqs = new SQS({
      endpoint,
      region,
      accessKeyId,
      secretAccessKey,
    });

    this.queueUrl = queueUrl;
    this.queueName = queueName;
  }

  async receiveMessages(): Promise<void> {
    try {
      if (!this.sqs || !this.queueUrl) {
        throw new Error('Cluster no inicializado.');
      }

      const params = {
        QueueUrl: this.queueUrl,
        MaxNumberOfMessages: 10,
        WaitTimeSeconds: 20,
      };

      const data = await this.sqs.receiveMessage(params).promise();

      if (data.Messages && data.Messages.length > 0) {
        for (const message of data.Messages) {
          await this.messageService.saveMessage({
            action: 'POST',
            message: message.Body,
          });
          console.log('Mensaje recibido y guardado en la DB:', message.Body);
          await this.deleteMessage(this.queueUrl, message.ReceiptHandle);
          console.log('ID: ❌', message.ReceiptHandle);
          // await this.sqs.deleteQueue(params).promise();
          // console.log('Cola eliminada: ❌', this.queueUrl);
        }
      }
    } catch (error) {
      console.error('Error al recibir mensajes de ElasticMQ:', error);
    }
  }

  // // Función para procesar el mensaje de producto
  // async processProductMessage(messageBody: string): Promise<void> {
  //   try {
  //     const productData = JSON.parse(messageBody);
  //     const { action, product } = productData;

  //     // Lógica para procesar el mensaje según su acción (crear, actualizar, eliminar)
  //     switch (action) {
  //       case 'create':
  //         // Lógica para crear un nuevo producto en la base de datos
  //         //   await this.messageService.create(product);
  //         console.log('Producto creado en la base de datos:', product);
  //         break;
  //       case 'update':
  //         // Lógica para actualizar un producto existente en la base de datos
  //         //   await this.productService.updateProduct(product.id, product);
  //         console.log('Producto actualizado en la base de datos:', product);
  //         break;
  //       case 'delete':
  //         // Lógica para eliminar un producto de la base de datos
  //         //   await this.productService.deleteProduct(product.id);
  //         console.log('Producto eliminado de la base de datos:', product.id);
  //         break;
  //       default:
  //         break;
  //     }
  //   } catch (error) {
  //     console.error('Error al procesar el mensaje de producto:', error);
  //   }
  // }

  private async deleteMessage(
    queueUrl: string,
    receiptHandle: string,
  ): Promise<void> {
    try {
      const params = {
        QueueUrl: queueUrl,
        ReceiptHandle: receiptHandle,
      };
      await this.sqs.deleteMessage(params).promise();
      console.log('Mensaje eliminado de la cola.');
    } catch (error) {
      console.error('Error al eliminar mensaje de la cola:', error);
    }
  }
}
