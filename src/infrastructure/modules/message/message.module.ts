import { Module } from '@nestjs/common';
import { MessageService } from '../../../domain/services/message/MessageService.service';
import { ElasticMQMessageSenderAdapter } from '../../../domain/services/message/mqMessageSender.service';
import { ElasticMQMessageReceiverAdapter } from '../../../domain/services/message/mqMessageReceiver.service';
import { ElasticMQMessageReceiverService } from 'src/domain/services/message/MessageReceiverService.service';
import { ScheduleModule } from '@nestjs/schedule';
import { MessageSchema } from 'src/domain/schemas/sqs/message.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSaverService } from 'src/domain/services/message/MessageSaverService.service';
import { ClusterService } from 'src/domain/services/cluster/cluster.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
  ],
  providers: [
    MessageService,
    MessageSaverService,
    ElasticMQMessageSenderAdapter,
    ElasticMQMessageReceiverAdapter,
    ElasticMQMessageReceiverService,
    ClusterService
  ],
  exports: [
    MessageService,
    MessageSaverService,
    ElasticMQMessageSenderAdapter,
    ElasticMQMessageReceiverAdapter,
    ElasticMQMessageReceiverService,
    ClusterService
  ],
})
export class MessageModule {}
