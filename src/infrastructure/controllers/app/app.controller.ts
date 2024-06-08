import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../../application/services/app/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}