/* eslint-disable hexagonal-architecture/enforce */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/modules/app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
// import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // register all plugins and extension
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe({}));
  app.enableVersioning({ type: VersioningType.URI });
  app.use(helmet());
  // app.use(compression());

  await app.listen(4000, () => {
    console.log(`🚀 BFF Application running at port 4000`);
  })
}
bootstrap();

