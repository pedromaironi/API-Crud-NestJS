// import { Injectable, CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import { SqsService } from '../../domain/services/sqs/sqs.service';

// @Injectable()
// export class SqsInterceptor implements NestInterceptor {
//   constructor(private readonly sqsService: SqsService) {}

//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     return next
//       .handle()
//       .pipe(
//         tap(async (data) => {
//           await this.sqsService.sendMessage(JSON.stringify(data));
//         }),
//       );
//   }
// }