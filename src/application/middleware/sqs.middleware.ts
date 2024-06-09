// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { NextFunction, Request, Response } from 'express';
// import { SqsService } from '../../domain/services/sqs/sqs.service';

// @Injectable()
// export class SQSMiddleware implements NestMiddleware {
//   constructor(private readonly sqsService: SqsService) {}

//   use(req: Request, res: Response, next: NextFunction) {
//     const originalWrite = res.write;
//     const originalEnd = res.end;

//     // Lista de chunks de datos enviados en la respuesta
//     const chunks: any[] = [];

//     // Sobrescribe la función res.write para capturar los datos
//     res.write = function(chunk: any, ...args): boolean {
//       chunks.push(chunk);
//       return originalWrite.apply(res, args);
//     };

//     // Sobrescribe la función res.end para capturar los últimos datos
//     res.end = async function(chunk?: any, ...args): Promise<void></void> {
//       if (chunk) {
//         chunks.push(chunk);
//       }

//       // Construye la respuesta completa
//       const body = Buffer.concat(chunks).toString('utf8');

//       // Envía el mensaje a SQS
//       await this.sqsService.sendMessage(body);

//       // Devuelve la respuesta original
//       originalEnd.apply(res, args);
//     };

//     next();
//   }
// }