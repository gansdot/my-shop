import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { LoggingInterceptor } from './common/logging.interceptor.js';
import { TransformInterceptor } from './common/transform.interceptor.js';
import { TimeoutInterceptor } from './common/timeout.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor(), new TransformInterceptor(), new TimeoutInterceptor()); 
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
