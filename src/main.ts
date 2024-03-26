import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { ValidationPipe } from '@nestjs/common';
import { ValidationPipeConfig } from './config';
import { setupSwagger } from './util/setupSwagger';

async function bootstrap() {
  const corsOption: CorsOptions = {
    origin: ['http://localhost:3000', 'http://192.168.0.62:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe(ValidationPipeConfig));
  app.enableCors(corsOption);
  app.useWebSocketAdapter(new IoAdapter(app));

  setupSwagger(app);

  await app.listen(4100);
}
bootstrap();
