// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { SqsService } from '../services/sqs/sqs.service';

// @Module({
//   imports: [ConfigModule],
//   providers: [
//     SqsService,
//     {
//       provide: 'SQS_OPTIONS',
//       useFactory: (configService: ConfigService) => ({
//         endpoint: 'http://localhost:9324',
//         region: 'elasticmq',
//         accessKeyId: 'x',
//         secretAccessKey: 'x',
//       }),
//       inject: [ConfigService],
//     },
//   ],
//   exports: [SqsService],
// })
// export class SqsModule {}